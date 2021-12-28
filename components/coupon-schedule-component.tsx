import { FunctionComponent, useEffect, useState } from 'react';
import { getAllBonds } from '../sanity/queries';
import { BondGroup, Bond, Coupon } from '../sanity/types';
import CopuponScheduleTable from './coupon-schedule-table';
import { formatDate } from '../lib/utils';

const CouponScheduleComputer: FunctionComponent = function () {
  const [bondGroups, setBondGroups] = useState<BondGroup[]>([]);
  const [bonds, setBonds] = useState<Bond[]>();
  const [couponSchedule, setCouponSchedule] = useState<Coupon[]>([]);
  const [selectedBondSlug, setSelectedBondSlug] = useState<string>();
  const [selectedBond, setSelectedBond] = useState<Bond>();
  const [amount, setAmount] = useState(1000);

  const fetchCouponSchedule = async () => {
    if (bonds && selectedBondSlug) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_PRICING_API}/schedule?amount=${amount}&slug=${selectedBondSlug}`);

        const body = await response.json();

        setCouponSchedule(body);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchBondTitles = async () => {
    const allBonds = await getAllBonds();

    setBonds(allBonds);

    const tempBondGroups: BondGroup[] = [];

    // Convert bonds to bond groups for optiongroups in select
    allBonds.forEach((bond: Bond) => {
      const { issuerType } = bond;

      const bondGroupIndex = tempBondGroups.findIndex((bondGroup) => bondGroup.issuerType === issuerType);

      if (tempBondGroups && bondGroupIndex > -1 && tempBondGroups[bondGroupIndex]) {
        tempBondGroups[bondGroupIndex].bonds.push(bond);
      } else {
        tempBondGroups.push({
          issuerType,
          bonds: [bond],
        });
      }
    });

    setBondGroups(tempBondGroups);
  };

  const downloadCouponSchedule = () => {
    if (couponSchedule && selectedBond) {
      let csv = 'Payment Date,Interest,Principal,Total\n';
      couponSchedule.forEach((row) => {
        const rowArray = [row.date, row.interest, row.principal, row.total];

        csv += rowArray.join(',');
        csv += '\n';
      });

      const anchor = document.createElement('a');
      anchor.href = `data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`;
      anchor.target = '_blank';
      anchor.download = `${selectedBond.title}.csv`;
      anchor.click();
    }
  };

  useEffect(() => {
    fetchBondTitles();
  }, []);

  useEffect(() => {
    setSelectedBond(bonds?.find((bond) => bond.slug === selectedBondSlug));
    fetchCouponSchedule();
  }, [selectedBondSlug, amount]);

  return (
    <div className="mt-12">
      <div className="md:grid md:grid-cols-3 md:gap-10">
        <div className="md:col-span-1 space-y-6">

          <div>
            <div>
              <label htmlFor="bond" className="block text-lg font-medium text-gray-700">
                Select Bond
              </label>
              <select
                id="bond"
                name="bond"
                onChange={(e) => setSelectedBondSlug(e.target.value)}
                className="border-opacity-50 border block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >

                <option />
                {

                    bondGroups
                    && bondGroups.map((bondGroup) => (
                      <optgroup key={bondGroup.issuerType} label={bondGroup.issuerType.toUpperCase()}>

                        {
                            bondGroup.bonds
                            && bondGroup.bonds.map((bond) => <option key={bond.slug} value={bond.slug}>{bond.title}</option>)

                        }

                      </optgroup>
                    ))

                }
              </select>
            </div>

          </div>

          <div>
            <div>
              <label htmlFor="amount" className="block text-lg font-medium text-gray-700">
                Amount
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value, 10))}
                  className="border-opacity-50 border focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                  placeholder="1000"
                />
              </div>
            </div>
          </div>

          <button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={downloadCouponSchedule}
            type="button"
          >
            Download
          </button>

        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">

          <div className="space-y-6">
            <table className="w-full">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 pb-2 text-left text-sm font-bold text-blue-500 uppercase tracking-wider w-1/4"
                  >
                    Coupon Rate
                  </th>
                  <th
                    scope="col"
                    className="px-6 pb-2 text-left text-sm font-bold text-blue-500 uppercase tracking-wider w-1/4"
                  >
                    Coupon Frequency
                  </th>
                  <th
                    scope="col"
                    className="px-6 pb-2 text-left text-sm font-bold text-blue-500 uppercase tracking-wider w-1/4"
                  >
                    Maturity
                  </th>
                  <th
                    scope="col"
                    className="px-6 pb-2 text-left text-sm font-bold text-blue-500 uppercase tracking-wider w-1/4"
                  >
                    Coupons Remaining
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 pb-4 whitespace-nowrap text-md font-medium text-gray-900">{ selectedBond ? `${selectedBond.coupon}%` : ''}</td>
                  <td className="px-6 pb-4 whitespace-nowrap text-md text-gray-500">{ selectedBond ? 'Semi-annually' : ''}</td>
                  <td className="px-6 pb-4 whitespace-nowrap text-md text-gray-500">{ selectedBond ? formatDate(selectedBond.maturityDate) : ''}</td>
                  <td className="px-6 pb-4 whitespace-nowrap text-md text-gray-500">{ couponSchedule && couponSchedule.length > 0 ? couponSchedule.length : ''}</td>
                </tr>
              </tbody>
            </table>

            <CopuponScheduleTable coupons={couponSchedule || []} />

          </div>

        </div>
      </div>

    </div>
  );
};

export default CouponScheduleComputer;

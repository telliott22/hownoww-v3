import { FunctionComponent, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { getAllBonds } from '../sanity/queries';
import { BondGroup, Bond, CashCalculatorResponse } from '../sanity/types';

const CashCalculatorComponent: FunctionComponent = function () {
  const [tradeDate, setTradeDate] = useState<Date>(new Date());
  const [settlementDate, setSettlementDate] = useState<Date>(new Date());
  const [bonds, setBonds] = useState<Bond[]>();
  const [bondGroups, setBondGroups] = useState<BondGroup[]>([]);
  const [selectedBondSlug, setSelectedBondSlug] = useState<string>();
  const [nextCoupon, setNextCoupon] = useState<string>();
  const [previousCoupon, setPreviousCoupon] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [amount, setAmount] = useState<number>();
  const [accrualDays, setAccrualDays] = useState<number>();
  const [total, setTotal] = useState<number>();
  const [interest, setInterest] = useState<number>();
  const [selectedBond, setSelectedBond] = useState<Bond>();

  const formatDate = (date: Date) => `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  const fetchCouponDates = async () => {
    if (selectedBondSlug) {
      const url = `${process.env.NEXT_PUBLIC_PRICING_API}/previous-next-coupon?slug=${selectedBondSlug}`;

      const response = await fetch(url);

      const coupons = await response.json();

      setNextCoupon(coupons.next);
      setPreviousCoupon(coupons.previous);
    }
  };

  const fetchCashCalculation = async () => {
    if (price && amount && settlementDate && previousCoupon && selectedBond) {
      const url = `${process.env.NEXT_PUBLIC_PRICING_API}/cash-calculator?price=${price}&amount=${amount}&coupon=${selectedBond?.coupon}&settlementDate=${formatDate(settlementDate)}&previousCoupon=${previousCoupon}`;

      const response = await fetch(url);

      const json: CashCalculatorResponse = await response.json();

      setInterest(json.principalAmount);
      setInterest(json.accruedInterest);
      setTotal(json.total);
      setAccrualDays(json.accrualDays);
    }
  };

  const fetchBondTitles = async () => {
    const localBonds = await getAllBonds();

    setBonds(localBonds);

    const localBondGroups: BondGroup[] = [];

    // Convert bonds to bond groups for optiongroups in select
    localBonds.forEach((bond: Bond) => {
      const { issuerType } = bond;

      const bondGroupIndex = localBondGroups.findIndex((bondGroup) => bondGroup.issuerType === issuerType);

      if (localBondGroups && bondGroupIndex > -1 && localBondGroups[bondGroupIndex]) {
        localBondGroups[bondGroupIndex].bonds.push(bond);
      } else {
        localBondGroups.push({
          issuerType,
          bonds: [bond],
        });
      }
    });

    setBondGroups(localBondGroups);
  };

  useEffect(() => {
    fetchBondTitles();
  }, []);

  useEffect(() => {
    setSelectedBond(bonds?.find((bond) => bond.slug === selectedBondSlug));
    fetchCouponDates();
  }, [selectedBondSlug]);

  useEffect(() => {
    fetchCashCalculation();
  }, [price, amount, settlementDate, previousCoupon, selectedBond]);

  return (
    <div className="mt-20">
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="bond" className="block text-lg font-medium text-gray-700">
                  Select Bond
                </label>
                <select
                  id="bond"
                  name="bond"
                  onChange={(e) => setSelectedBondSlug(e.target.value)}
                  className="border-opacity-50 border block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >

                  <option> </option>
                  {

                                        bondGroups
                                        && bondGroups.map((bondGroup) => (
                                          <optgroup key={bondGroup.issuerType} label={bondGroup.issuerType.toUpperCase()}>

                                            {
                                                        bondGroup.bonds
                                                        && bondGroup.bonds.map((bond) => <option key={bond._id} value={bond.slug}>{bond.title}</option>)

                                                    }

                                          </optgroup>
                                        ))

                                    }
                </select>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Trade Date
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <DatePicker
                    selected={tradeDate}
                    onChange={(date: Date) => setTradeDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="border-opacity-50 border focus:ring-blue-500 focus:border-blue-500 block w-52 sm:text-sm border-gray-300 rounded-md p-3"
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Settlement Date
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <DatePicker
                    selected={settlementDate}
                    onChange={(date: Date) => setSettlementDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="border-opacity-50 border focus:ring-blue-500 focus:border-blue-500 block w-52 sm:text-sm border-gray-300 rounded-md p-3"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Indicated Price
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value, 10))}
                    className="border-opacity-50 border focus:ring-blue-500 focus:border-blue-500 block w-52 sm:text-sm border-gray-300 rounded-md p-3"
                    placeholder="1000"
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Nominal Amount
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.target.value, 10))}
                    className="border-opacity-50 border focus:ring-blue-500 focus:border-blue-500 block w-52 sm:text-sm border-gray-300 rounded-md p-3"
                    placeholder="1000"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Previous Coupon
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <p
                    className="block w-52 sm:text-sm border-gray-300 rounded-md p-3"
                  >
                    { previousCoupon }
                  </p>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Next Coupon
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <p
                    className="block w-52 sm:text-sm border-gray-300 rounded-md p-3"
                  >
                    { nextCoupon }
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Coupon rate
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <p
                    className="block w-52 sm:text-sm border-gray-300 rounded-md p-3"
                  >
                    { selectedBond?.coupon }
                  </p>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Coupon Frequency
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <p
                    className="block w-52 sm:text-sm border-gray-300 rounded-md p-3"
                  >
                    Semi-Anually
                  </p>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Day Count Convention
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <p
                    className="block w-52 sm:text-sm border-gray-300 rounded-md p-3"
                  >
                    30/360
                  </p>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Accrual Days
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <p
                    className="block w-52 sm:text-sm border-gray-300 rounded-md p-3"
                  >
                    { accrualDays }
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Principal Amount
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <p
                    className="block w-52 sm:text-sm border-gray-300 rounded-md p-3"
                  >
                    { amount }
                  </p>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Accrued Interest
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <p
                    className="block w-52 sm:text-sm border-gray-300 rounded-md p-3"
                  >
                    { interest }
                  </p>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Total Cash Consideration
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <p
                    className="block w-52 sm:text-sm border-gray-300 rounded-md p-3"
                  >
                    { total }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </form>

    </div>
  );
};

export default CashCalculatorComponent;

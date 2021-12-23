import { FunctionComponent } from 'react';
import {
  ChevronUpIcon, ChevronDownIcon, ClockIcon, DocumentDownloadIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
import Image from 'next/image';
import { Bond, Price } from '../sanity/types';
import NigerianFlag from '../public/flags/nigeria.png';
import AngolanFlag from '../public/flags/angola.png';
import GhanaianFlag from '../public/flags/ghana.png';

const BondTable: FunctionComponent<{ title: string, bonds: Bond[], prices: Price[], type: 'coupon' | 'bond' }> = function ({
  title, bonds, prices, type,
}) {
  const changeChevron = (change: string) => {
    if (change) {
      return parseInt(change, 10) > 0 ? <span className="text-green"><ChevronUpIcon /></span> : <span className="text-red w-5 h-5 block"><ChevronDownIcon /></span>;
    }

    return '';
  };

  const renderFlag = (country: string) => {
    let imageSrc;
    switch (country) {
      case 'nigeria':
        imageSrc = NigerianFlag;
        break;
      case 'angola':
        imageSrc = AngolanFlag;
        break;
      case 'ghana':
        imageSrc = GhanaianFlag;
        break;

      default:
        return '';
    }

    return <Image height={14} width={20} src={imageSrc} />;
  };

  const renderBondRows = () => {
    if (type === 'bond') {
      return (
        <tbody>
          {bonds.map((bond, index) => {
            const pricing = prices ? prices.find((price) => price.slug === bond.slug) : null;

            return (
              <tr key={bond.title} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                  <span className="inline-block mr-2">
                    {renderFlag(bond.country)}

                  </span>
                  {bond.issuer}

                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.maturityDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.coupon}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pricing ? pricing.bid_price : ''}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  { pricing ? pricing.ask_price : '' }
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  { pricing ? `${pricing.bid_percentage}%` : ''}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex flex-row">
                  { pricing ? `${pricing.ask_percentage}%` : ''}
                  {
                    pricing && pricing.change ? changeChevron(pricing.change) : ''
                  }
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.amountOutstanding}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link href={`/history/${bond.slug}`} passHref>
                    <span className="w-5 h-5 block cursor-pointer text-blue"><ClockIcon /></span>
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link href={`/history/${bond.slug}`} passHref>
                    <span className="w-5 h-5 block cursor-pointer text-blue"><DocumentDownloadIcon /></span>
                  </Link>
                </td>
              </tr>

            );
          })}
        </tbody>
      );
    }

    if (type === 'coupon') {
      return (
        <tbody>
          {bonds.map((bond, index) => (
            <tr key={bond.title} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.couponDate}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bond.issuer}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.maturityDate}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.coupon}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.coupon}</td>
            </tr>
          ))}
        </tbody>
      );
    }

    return '';
  };

  return (
    <div>
      <div className="pb-5 border-gray-200">
        <h3 className="text-2xl leading-6 text-blue-600 mb-2">{title}</h3>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">

                  {

                            type === 'bond'
                            && (
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"
                              >
                                Issuer
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"
                              >
                                Maturity
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"
                              >
                                Coupon
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"
                              >
                                Bid Price
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"
                              >
                                Ask Price
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"
                              >
                                Bid %
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"
                              >
                                Ask %
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"
                              >
                                Amt Oust. ($MM)
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"
                              >
                                History
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"
                              >
                                Prospectus
                              </th>
                            </tr>
                            )

                        }

                  {

                            type === 'coupon'
                            && (
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"
                              >
                                Coupon Date
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"
                              >
                                Issuer
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"
                              >
                                Maturity
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"
                              >
                                Coupon
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"
                              >
                                Coupon Freq.
                              </th>

                            </tr>
                            )

                        }

                </thead>
                {

                    bonds && bonds.length

                      ? renderBondRows()

                      : (
                        <tbody>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 opacity-50 text-center" colSpan={8}>No bonds found</td>
                          </tr>
                        </tbody>
                      )

                }

              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BondTable;

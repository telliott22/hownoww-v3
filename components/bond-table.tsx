
import { FunctionComponent } from 'react'; 
import { Bond } from '../sanity/types'

  const BondTable: FunctionComponent<{title: string, bonds: Bond[]}> = ({title, bonds}) => {
    return (
        <div>
            <div className="pb-5 border-gray-200">
                <h3 className="text-2xl leading-6 text-blue-600">{title}</h3>
            </div>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Name
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Issuer
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Maturity
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Coupon
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Bid Price
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Ask Price
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Bid %
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Ask %
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Amt Oust. ($MM)
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        {

                            bonds && bonds.length ?
                            
                            <tbody >
                                {bonds.map((bond, index) => (
                                    <tr key={bond.title} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bond.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.issuer}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.maturity}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.coupon}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.bidPrice}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.askPrice}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.bidPercentage}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.askPercentage}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.amountOutstanding}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-blue-600 hover:text-blue-900">
                                        Edit
                                        </a>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>

                            :

                            <tbody >
                                <tr >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center" colSpan={8}>No bonds found</td>
                                </tr>
                            </tbody>
                            
                        }

                    </table>
                    </div>
                </div>
                </div>
            </div>

      </div>
    )
  }
  
  export default BondTable;

import { FunctionComponent } from 'react'; 

/* This example requires Tailwind CSS v2.0+ */
const people = [
    { name: 'Jane Cooper', title: 'Regional Paradigm Technician', role: 'Admin', email: 'jane.cooper@example.com' },
    { name: 'Cody Fisher', title: 'Product Directives Officer', role: 'Owner', email: 'cody.fisher@example.com' },
    // More people...
  ]
  
  const BondTable: FunctionComponent = ({title}) => {
    return (
        <>
            <div className="pb-5 border-gray-200">
                <h3 className="text-2xl leading-6 font-medium  text-gray-900">{title}</h3>
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
                        <tbody>
                        {people.map((person, personIdx) => (
                            <tr key={person.email} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                                </a>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>

      </>
    )
  }
  
  export default BondTable;
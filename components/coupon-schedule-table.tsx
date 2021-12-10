import { FunctionComponent } from "react"
import { Coupon } from "../sanity/types"
import { numberWithCommas} from '../lib/utils'

 const CopuponScheduleTable: FunctionComponent<{coupons: Coupon[]}> = ({coupons}) => {
    
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4"
                    >
                        Payment Date
                    </th>
                    <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4"
                    >
                        Interest
                    </th>
                    <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4"
                    >
                        Principal
                    </th>
                    <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4"
                    >
                        Total
                    </th>
                </tr>
            </thead>
            <tbody>
                {   
                    coupons && coupons.length > 0 ?
                    coupons.map((coupon, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td colSpan={1} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{coupon.date}</td>
                            <td colSpan={1} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{coupon.interest}</td>
                            <td colSpan={1} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{numberWithCommas(parseInt(coupon.principal))}</td>
                            <td colSpan={1} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{numberWithCommas(parseInt(coupon.total))}</td>
                        </tr>
                    ))

                    :

                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-center text-gray-400" colSpan={4}>Please select bond</td>
                    </tr>
            
            }
            </tbody>
        </table>
    )
}

export default CopuponScheduleTable
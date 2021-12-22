import type { NextPage } from 'next'
import Layout from './layout'
import Footer from './footer'
import { NavItem } from '../sanity/types'

const Page: NextPage<{title?: string, description?: string}> = ({children, title, description}) => {
  const navigation: NavItem[] = [
    { name: 'Pricing', href: '/' },
    { name: 'Coupon Dates', href: '/coupon-payments' },
    { name: 'Coupon Schedules', href: '/coupon-schedules' },
    { name: 'Coupon Calculator', href: '/cash-calculator' },
    { name: 'Guide', href: '/guide' },
  ]

  return (
    <main className="mt-10">
        <Layout title={title} description={description} navigation={navigation}>
            {children}
        </Layout>
        <Footer navigation={navigation} />
    </main>
  )
}

export default Page

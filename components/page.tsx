import type { NextPage } from 'next'
import Layout from './layout'
import Footer from './footer'
import { NavItem } from '../sanity/types'

const Page: NextPage<{title: string}> = ({children, title}) => {

  const navigation: NavItem[] = [
    { name: 'Pricing', href: '/' },
    { name: 'Coupon Dates', href: '/coupon-dates' },
    { name: 'Coupon Schedules', href: '/coupon-schedules' },
    { name: 'Coupon Calculator', href: '/cash-calculator' },
    { name: 'Guide', href: '/guide' },
  ]

  return (
    <>
        <Layout title={title} navigation={navigation}>
            {children}
        </Layout>
        <Footer navigation={navigation} />

    </>
  )
}

export default Page

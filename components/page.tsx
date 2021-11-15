import type { NextPage } from 'next'
import Layout from './layout'
import Footer from './footer'

const Page: NextPage = ({children, title}) => {

  const navigation = [
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

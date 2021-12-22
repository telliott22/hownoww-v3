import type { NextPage } from 'next'
import Container from '../components/container'
import CouponScheduleComponent from '../components/coupon-schedule-component'
import Page from '../components/page'

const CouponSchedules: NextPage = () => {

  return (
    <Page title={'Coupon Schedules'} description={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>

      <Container>

        <CouponScheduleComponent />

      </Container>

    </Page>
  )
}

export default CouponSchedules

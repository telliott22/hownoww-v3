import type { NextPage } from 'next';
import Container from '../components/container';
import CouponScheduleComponent from '../components/coupon-schedule-component';
import Page from '../components/page';

const CouponSchedules: NextPage = function () {
  return (
    <Page title="Coupon Schedules" description="Check per Eurobond the exact coupon payment and when it is expected to be paid during the entire life of the bond.">

      <Container>

        <CouponScheduleComponent />

      </Container>

    </Page>
  );
};

export default CouponSchedules;

import type { NextPage } from 'next';
import Page from '../components/page';
import { Bond } from '../sanity/types';
import BondTable from '../components/bond-table';
import Container from '../components/container';

export async function getStaticProps() {
  const url = `${process.env.NEXT_PUBLIC_PRICING_API}/coupons-this-year`;

  const response = await fetch(url);

  const months = await response.json();

  return {
    props: {
      months,
    },
    revalidate: 60 * 60 * 6, // 6 hours
  };
}

type Month = {
  date: string,
  coupons: Bond[]
};

const CouponPayments: NextPage<{ months: Month[] }> = function ({ months }) {
  const monthsLabels = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <Page title="Coupon Calender" description="As part of your financial planning, please use our calendar to determine when coupons are due in your portfolio per calendar month.">

      <Container>

        <div className="space-y-10 md:space-y-20">

          {
                months && months.length
                && months.map((month) => {
                  const splitTitle = month.date.split('/');

                  const title = `${monthsLabels[parseInt(splitTitle[0], 10) - 1]} ${splitTitle[1]}`;

                  return <BondTable type="coupon" prices={[]} key={title} bonds={month.coupons} title={title} />;
                })
            }

        </div>

      </Container>

    </Page>
  );
};

export default CouponPayments;

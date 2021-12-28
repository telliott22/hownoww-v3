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
    <Page title="Coupon Payments" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">

      <Container>

        <div className="space-y-10 mt-10 md:space-y-20 md:mt-20">

          {
                        months
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

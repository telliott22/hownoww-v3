import type { NextPage } from 'next';
import Head from 'next/head';
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics';
import Layout from './layout';
import Footer from './footer';
import { NavItem } from '../sanity/types';
import ContactCta from './contact-cta';

const Page: NextPage<{ title?: string, description?: string }> = function ({ children, title, description }) {
  usePageViews();

  const navigation: NavItem[] = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Coupon Calendar', href: '/coupon-calendar' },
    { name: 'Coupon Schedules', href: '/coupon-schedules' },
    { name: 'Cash Calculator', href: '/cash-calculator' },
    { name: 'Guide', href: '/guide' },
  ];

  return (

    <main className="mt-6">
      <GoogleAnalytics />

      <Head>

        <title>
          {' '}
          {title ? `${title} | ` : ''}
          {' '}
          HowNoww
          {' '}
        </title>

        <meta
          name="description"
          content={description || 'Daily Nigerian, Ghanaian and Angolan Eurobond Pricing'}
        />

      </Head>
      <Layout title={title} description={description} navigation={navigation}>
        {children}
      </Layout>

      <div className="pt-28">
        <ContactCta />
        <Footer navigation={navigation} />
      </div>

    </main>
  );
};

Page.defaultProps = {
  title: '',
  description: '',
};

export default Page;

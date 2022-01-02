import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from './layout';
import Footer from './footer';
import { NavItem } from '../sanity/types';
import ContactCta from './contact-cta';

const Page: NextPage<{ title?: string, description?: string }> = function ({ children, title, description }) {
  const navigation: NavItem[] = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Coupon Payments', href: '/coupon-payments' },
    { name: 'Coupon Schedules', href: '/coupon-schedules' },
    { name: 'Cash Calculator', href: '/cash-calculator' },
    { name: 'Guide', href: '/guide' },
  ];

  return (

    <main className="mt-6">

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
          content={description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
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

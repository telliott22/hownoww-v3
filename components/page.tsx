import type { NextPage } from 'next';
import Layout from './layout';
import Footer from './footer';
import { NavItem } from '../sanity/types';
import ContactCta from './contact-cta';

const Page: NextPage<{ title?: string, description?: string }> = function ({ children, title, description }) {
  const navigation: NavItem[] = [
    { name: 'Pricing', href: '/' },
    { name: 'Coupon Dates', href: '/coupon-payments' },
    { name: 'Coupon Schedules', href: '/coupon-schedules' },
    { name: 'Coupon Calculator', href: '/cash-calculator' },
    { name: 'Guide', href: '/guide/intro' },
  ];

  return (
    <main className="mt-6">
      <Layout title={title} description={description} navigation={navigation}>
        {children}
      </Layout>
      <ContactCta />
      <Footer navigation={navigation} />
    </main>
  );
};

export default Page;

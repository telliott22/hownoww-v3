export type Bond = {
  _id: string,
  title: string,
  issuer: string,
  maturityDate: string,
  coupon: string,
  bidPrice: string,
  askPrice: string,
  bidPercentage: string,
  askPercentage: string,
  amountOutstanding: string,
  issuerType: string,
  slug: string,
  couponDate?: string
  country: string
  expired: boolean
};

export type BondGroup = {
  issuerType: string
  bonds: Bond[]
};

export type Coupon = {
  date: string
  interest: string
  principal: string
  total: string
};

export type NavItem = {
  name: string,
  href: string
};

export type CashCalculatorResponse = {
  principalAmount: number
  accruedInterest: number
  total: number
  accrualDays: number
};

export type GuidePageData = {
  content: [object]
  title: string
};

export type GuidePageNavItem = {
  title: string,
  slug: string,
};

export type FaqSection = {
  title: string,
  faqs: Faq[],
};

export type Faq = {
  question: string,
  answer: [Object],
};

export type Price = {
  id: number,
  title: string,
  bid_price: string,
  ask_price: string,
  bid_percentage: string,
  ask_percentage: string,
  change: string,
  created_at: string,
  updated_at: string,
  eod: boolean,
  yield: string,
  slug: string,
  formattedDate: string,
  day: string
};

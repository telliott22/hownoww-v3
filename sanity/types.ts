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
}
  
export type BondGroup = {
  issuerType: string
  bonds: Bond[]
}

export type Coupon = {
  date: string
  interest: string
  principal: string
  total: string
}

export type NavItem = {
  name: string,
  href: string
}

export type CashCalculatorResponse = {
  principalAmount: number
  accruedInterest: number
  total: number
  accrualDays: number
}
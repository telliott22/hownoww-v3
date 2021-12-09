export type Bond = {
    title: string,
    issuer: string,
    maturityDate: string,
    coupon: string,
    bidPrice: string,
    askPrice: string,
    bidPercentage: string,
    askPercentage: string,
    amountOutstanding: string,
    couponDate?: string
  }


export type NavItem = {
  name: string,
  href: string
}
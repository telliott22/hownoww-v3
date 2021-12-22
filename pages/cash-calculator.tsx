import type { NextPage } from 'next'
import Container from '../components/container'
import CashCalculatorComponent from '../components/cash-calculator-component'
import Page from '../components/page'

const CashCalculator: NextPage = () => 


{

  return (
    <Page title={'Cash Calculator'} description={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>

      <Container>

          <CashCalculatorComponent />

      </Container>

    </Page>
  )
}

export default CashCalculator

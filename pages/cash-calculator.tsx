import type { NextPage } from 'next';
import Container from '../components/container';
import CashCalculatorComponent from '../components/cash-calculator-component';
import Page from '../components/page';

const CashCalculator: NextPage = function () {
  return (
    <Page title="Cash Calculator" description="Determine the exact cash amount for a Eurobond purchase or sale. Select a Eurobond, insert the nominal amount, cash price and trade & settlement date and we do the rest for you.">

      <Container>

        <CashCalculatorComponent />

      </Container>

    </Page>
  );
};

export default CashCalculator;

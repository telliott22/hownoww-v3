import { FunctionComponent } from 'react';
import Page from './page';
import { Price } from '../sanity/types';
import BondTable from './bond-table';
import Container from './container';

const HistoryPage: FunctionComponent<{ prices: Price[], title: string }> = function ({ prices, title }) {
  const downloadPrices = () => {
    if (prices) {
      let csv = 'Date,Bid Price,Ask Price,Bid %, Ask %\n';
      prices.forEach((row) => {
        const rowArray = [row.formattedDate, row.bid_price, row.ask_price, `${row.bid_percentage}%`, `${row.ask_percentage}%`];

        csv += rowArray.join(',');
        csv += '\n';
      });

      const anchor = document.createElement('a');
      anchor.href = `data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`;
      anchor.target = '_blank';
      anchor.download = `${title}.csv`;
      anchor.click();
    }
  };

  return (
    <Page title={title}>

      <Container>

        <button
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-4"
          onClick={downloadPrices}
          type="button"
        >
          Download
        </button>

        <BondTable bonds={[]} title="" type="history" prices={prices || []} />

      </Container>

    </Page>
  );
};

export default HistoryPage;

import { FunctionComponent } from 'react';
import GuideContent from './guide-content';
import Page from './page';
import { GuidePageData, GuidePageNavItem } from '../sanity/types';

const GuidePage: FunctionComponent<{ pageData: GuidePageData, pageSlugs: GuidePageNavItem[] }> = function ({ pageData, pageSlugs }) {
  return (
    <Page>

      <div className="pb-20">

        <GuideContent pageData={pageData} pageSlugs={pageSlugs} />

      </div>

    </Page>
  );
};

export default GuidePage;

import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, ClearRefinements, RefinementList } from 'react-instantsearch-dom';

import CustomHits from '../components/CustomHits';

const searchClient = algoliasearch(
  'W2VMA39BF8',
  '2c18cf0c3a6cade2206fc265a7396170'
);

const SearchContainer = () => {
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName="dev_MINTBEAN">
        <div className="grid-x">
          <div className="cell small-3">
            <ClearRefinements />
            <h2>States</h2>
            <RefinementList attribute="terms.state" />
          </div>
          <div className="cell auto">
            <SearchBox />
            <CustomHits />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

export default SearchContainer;

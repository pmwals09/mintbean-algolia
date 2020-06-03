import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, SearchBox, ClearRefinements, RefinementList } from 'react-instantsearch-dom';

import SearchHit from '../components/SearchHit';

const searchClient = algoliasearch(
  'W2VMA39BF8',
  '2c18cf0c3a6cade2206fc265a7396170'
);

const SearchContainer = () => {
  return (
    <div className="container">
      <InstantSearch searchClient={searchClient} indexName="dev_MINTBEAN">
        <div className="left-panel">
            <ClearRefinements />
            <h2>States</h2>
            <RefinementList attribute="terms.state" />
          </div>
          <div className="right-panel">
              <SearchBox />
              <Hits hitComponent={SearchHit}/>
          </div>
      </InstantSearch>
    </div>
  );
};

export default SearchContainer;

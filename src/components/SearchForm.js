import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, ClearRefinements, RefinementList } from 'react-instantsearch-dom';
import { orderBy } from 'lodash'

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
          <div className="cell small-2">
            <ClearRefinements />
            <h2>States</h2>
            <div className="refinement-list">
              <RefinementList
                attribute="terms.state"
                limit={55}
                transformItems={items => orderBy(items, "label", "asc")}
              />
            </div>
            <h2>Party</h2>
            <div className="refinement-list">
              <RefinementList
                attribute="terms.party"
                limit={5}
                transformItems={items => orderBy(items, "label", "asc")}
              />
            </div>
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

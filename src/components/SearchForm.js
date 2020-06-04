import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, ClearRefinements, RefinementList, Pagination } from 'react-instantsearch-dom';
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
            <h3>States</h3>
            <div className="refinement-list">
              <RefinementList
                attribute="terms.state"
                limit={55}
                transformItems={items => orderBy(items, "label", "asc")}
              />
            </div>
            <h3>Party</h3>
            <div>
              <RefinementList
                attribute="terms.party"
                limit={5}
                transformItems={items => orderBy(items, "label", "asc")}
              />
            </div>
            <div>
              <h3>Type</h3>
                <RefinementList
                  attribute="terms.type"
                  limit={5}
                />
            </div>
          </div>
          <div className="cell auto">
            <SearchBox />
            <CustomHits />
            <Pagination />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

export default SearchContainer;

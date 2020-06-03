import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch-dom';

import SearchHit from '../components/SearchHit';

const searchClient = algoliasearch(
  'W2VMA39BF8',
  '2c18cf0c3a6cade2206fc265a7396170'
);

const SearchContainer = () => {
  return (
    <div className="container">
      <InstantSearch searchClient={searchClient} indexName="dev_MINTBEAN">
        <div className="search-panel">
          <div className="search-panel__results">
            <SearchBox
              className="searchbox"
              translations={{
                placeholder: '',
              }}
            />
            <div className="grid-x grid-margin-x">
              <Hits hitComponent={SearchHit} />
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

export default SearchContainer;

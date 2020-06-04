import React from 'react';
import { connectHits } from 'react-instantsearch-dom'
import _ from 'lodash'

const Hits = ({ hits }) => {
  const legislatorList = hits.sort().map(hit => {
    let partyColor = _.lowerCase(hit.terms[hit.terms.length - 1].party[0])
    return (
      <div className={`cell small-12 medium-4 large-3 legislator ${partyColor}`} key={hit.id.bioguide}>
        <h5>
          {hit.name.first} {hit.name.last} -{' '}
          {hit.terms[hit.terms.length - 1].party[0]}
        </h5>
        <h5>
          {hit.terms[hit.terms.length - 1].state}{' '}
          {hit.terms[hit.terms.length - 1].type}
        </h5>
        <ul>
          <li>
            Has served {hit.terms.length}{' '}
            {hit.terms.length === 1 ? 'term' : 'terms'}
          </li>
          <li>
            <a
              href={`https://congress.gov/member/${hit.name.first}-${hit.name.last}/${hit.id.bioguide}`}
            >
              Official Website
            </a>
          </li>
          <li>
            <a
              href={`https://en.wikipedia.org/wiki/${hit.id.wikipedia.replace(/ /gi, '_')}`}
            >
              Wikipedia Page
            </a>
          </li>
          <li>
            <a
              href={`http://www.opensecrets.org/members-of-congress/summary?cid=${hit.id.opensecrets}`}
            >
              Where they get their money
            </a>
          </li>
        </ul>
      </div>
    )
  })

  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        {legislatorList}
      </div>
    </div>
  );
};

const CustomHits = connectHits(Hits)

export default CustomHits;

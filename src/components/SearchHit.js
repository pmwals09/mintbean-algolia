import React from 'react';
import PropTypes from 'prop-types';

const Hit = props => {
  const legislator = props.hit;
  return (
    <div>
      <h6>
        {legislator.name.first} {legislator.name.last} -{' '}
        {legislator.terms[legislator.terms.length - 1].party[0]} -{' '}
        {legislator.terms[legislator.terms.length - 1].state}{' '}
        {legislator.terms[legislator.terms.length - 1].type}
      </h6>
      <ul>
        <li>
          Has served {legislator.terms.length}{' '}
          {legislator.terms.length === 1 ? 'term' : 'terms'}
        </li>
        <li>
          <a
            href={`https://congress.gov/member/${legislator.name.first}-${legislator.name.last}/${legislator.id.bioguide}`}
          >
            Official Website
          </a>
        </li>
      </ul>
    </div>
  );
};

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;

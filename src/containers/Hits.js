import React from 'react'
import { connectHits } from 'react-instantsearch-dom'

import SearchHit from '../components/SearchHit'

const Hits = ({ hits }) => {
  const returnedHits = hits.map(hit => {
    return(
      <SearchHit
        hit={hit}
      />
    )
  })
  return (
    { returnedHits }
  )
}

const CustomHits = connectHits(Hits)

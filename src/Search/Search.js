import { useState } from "react";

function Search() {

  const [type, setType] = useState('')
  const [timesTypes, settimesTypes] = useState(['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'])

  return (
    
    <select >
      {timesTypes && timesTypes.map(timesType => <option value={timesType}>{timesType}</option>)}
    </select>
  )
}

export default Search
// onChange={e => handleChange}
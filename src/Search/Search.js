import './Search.css'
import { useState } from "react";

function Search({ setType }) {

  const [timesTypes, settimesTypes] = useState(['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'])

  const handleChange = (event) => {
    setType(event.target.value)
  }
 
  return (
    
    <select className='search' data-cy='search'onChange={(e) => handleChange(e)}>
      {timesTypes && 
        <>
        <option value="" selected disabled hidden>Choose Section</option>
       {timesTypes.map(timesType => <option value={timesType}>{timesType}</option>)}
        </>
      }
    </select>
  )
}

export default Search

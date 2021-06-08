import './Card.css'
import { Link } from 'react-router-dom'

function Card({ title, img, caption, authors, updated }) {
  console.log(title)

  const readableDate = new Date(updated).toDateString();
  
  return (
    <div className='card' data-cy='card'>
      <h3 className='title' data-cy='title'>{title}</h3>
      <img className='photo' data-cy='photo'src={img}/>
      <p className='caption' data-cy='caption'>{caption}</p>
      <p>{authors}</p>
      <div className='button-date-container'>
        <Link to={`/article/${title}`}>See More</Link>
        <p className='date' data-cy='date'>{readableDate}</p>
      </div>
    </div>
  )
}

export default Card
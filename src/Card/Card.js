import './Card.css'
import { Link } from 'react-router-dom'

function Card({ title, img, caption, authors, updated }) {
  console.log(title)

  const readableDate = new Date(updated).toDateString();
  
  return (
    <div className='card' data-cy='card'>
      <h3 className='card_title' data-cy='card_title'>{title}</h3>
      <img className='card_photo' data-cy='card_photo'src={img}/>
      <p className='card_caption' data-cy='card_caption'>{caption}</p>
      <p>{authors}</p>
      <div className='card_button-date-container'>
        <Link to={`/article/${title}`}>See More</Link>
        <p className='card_date' data-cy='card_date'>{readableDate}</p>
      </div>
    </div>
  )
}

export default Card
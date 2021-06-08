import './Card.css'
import { Link } from 'react-router-dom'

function Card({ title, img, caption, authors, updated }) {
  console.log(title)

  const readableDate = new Date(updated).toDateString();
  
  return (
    <div className='card' data-cy='card'>
      <h3>{title}</h3>
      <img src={img}/>
      <p>{caption}</p>
      <p>{authors}</p>
      <Link to={`/article/${title}`}>See More</Link>
      <p>{readableDate}</p>

    </div>
  )
}

export default Card
import './Card.css'

function Card({ title, img, caption, authors }) {
  console.log(title)
  return (
    <div className='card' data-cy='card'>
      <h3>{title}</h3>
      <img src={img}/>
      <p>{caption}</p>
      <p>{authors}</p>
      <button>See More</button>
    </div>
  )
}

export default Card
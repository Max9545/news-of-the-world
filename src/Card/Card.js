import './Card.css'

function Card({ title, img }) {
  console.log(title)
  return (
    <div className='card' data-cy='card'>
      <h3>{title}</h3>
      <img src={img}/>
    </div>
  )
}

export default Card
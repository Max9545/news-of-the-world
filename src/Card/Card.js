import './Card.css'

function Card({ article }) {
  console.log(article)
  return (
   <p>{article.title}</p>
  )
}

export default Card
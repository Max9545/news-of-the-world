import './CardDisplay.css'
import Card from '../../Card/Card'

function CardDisplay({ articlesToDisplay }) {
  console.log( articlesToDisplay );
  const makeCards = (currentArticles) => {
    console.log(currentArticles);
    return currentArticles.map(article => {
      return <Card article={article}/>
    })
  }
  return (
    <>
      <h2>Tech Today</h2>
      {articlesToDisplay && makeCards(articlesToDisplay)}
    </>
  )
}

export default CardDisplay
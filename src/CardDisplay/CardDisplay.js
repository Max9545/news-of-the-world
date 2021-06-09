import './CardDisplay.css'
import Card from '../../Card/Card'

function CardDisplay({ articlesToDisplay }) {

  const makeCards = (currentArticles) => {

    return currentArticles.map(article => {
      return <Card 
                title={article.title}
                img={article.multimedia[4].url}
                caption={article.multimedia[4].caption}
                authors={article.byline}
                updated={article.updated_date}
             />
    })
  }
  return (
    <>
      <h2>Tech Today</h2>
      <div className='card-display' data-cy='card-display'>
        {articlesToDisplay && makeCards(articlesToDisplay)}
      </div>
    </>
  )
}

export default CardDisplay
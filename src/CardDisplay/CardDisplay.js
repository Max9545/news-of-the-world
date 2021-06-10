import './CardDisplay.css'
import Card from '../Card/Card'

function CardDisplay({ articlesToDisplay, type }) {

  const makeCards = (currentArticles) => {

    return currentArticles.map(article => {
      return <Card 
                title={article.title.replaceAll('%','Percent')}
                img={article.multimedia[4].url}
                caption={article.multimedia[4].caption}
                authors={article.byline}
                updated={article.updated_date}
             />
    })
  }
  return (
    <>
      <h2 className='articles-type' data-cy='articles-type'>{`${type.charAt(0).toUpperCase() + type.slice(1)} Times`}</h2>
      <div className='card-display' data-cy='card-display'>
        {articlesToDisplay && makeCards(articlesToDisplay)}
      </div>
    </>
  )
}

export default CardDisplay
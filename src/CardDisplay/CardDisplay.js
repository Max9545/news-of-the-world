import './CardDisplay.css'
import Card from '../Card/Card'
import Search from '../Search/Search';

function CardDisplay({ articlesToDisplay, type, setType }) {

  const makeCards = (currentArticles) => {
  
    return currentArticles.map(article => {
      console.log(article)
      return <Card 
                title={article.title.replaceAll('%','Percent')}
                img={article.multimedia ? article.multimedia[4].url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/New_York_Times_logo_variation.jpg/750px-New_York_Times_logo_variation.jpg'}
                caption={article.multimedia ? article.multimedia[4].caption : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/New_York_Times_logo_variation.jpg/750px-New_York_Times_logo_variation.jpg'}
                authors={article.byline}
                updated={article.updated_date}
             />
    })
  }
  return (
    <>
      <div className='type-search-container'>
        <h2 className='articles-type' data-cy='articles-type'>{`${type.charAt(0).toUpperCase() + type.slice(1)} Times`}</h2>
        <Search setType={setType}/>
      </div>
      <div className='card-display' data-cy='card-display'>
        {articlesToDisplay && makeCards(articlesToDisplay)}
      </div>
    </>
  )
}

export default CardDisplay
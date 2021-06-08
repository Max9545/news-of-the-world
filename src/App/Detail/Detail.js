import './Detail.css'
import { useEffect, useState } from "react"

function Detail({ title, findArticle }) {

  const [currentArticle, setCurrentArticle] = useState()
  const [readableDate, setReadableDate] = useState()

  useEffect(() => {
    setCurrentArticle(findArticle(title))
  }, [])

  useEffect(() => {
    if(currentArticle) {
      const newReadableDate = new Date(currentArticle.updated_date).toDateString();
      setReadableDate(newReadableDate)
    }
  }, [currentArticle])

  const makeTopics = () => {
    return currentArticle.des_facet.map(topic => `${topic}  `)
  }
  

  return (
    <>
      {currentArticle &&
      
        <>
          <p>{currentArticle.title}</p>
          <p>{currentArticle.byline}</p>
          <p>{currentArticle.abstract}</p>
          <img className='detail_photo' data-cy='detail_photo'src={currentArticle.multimedia[0].url}/>
          <p className='detail_caption' data-cy='detail_card_caption'>{currentArticle.multimedia[0].caption}</p>
          <p>{makeTopics()}</p>
          <a href={currentArticle.url}>Go To NYT</a>
          <p>{`Section: ${currentArticle.section.charAt(0).toUpperCase() + currentArticle.section.slice(1)}`}</p>
          <p>{currentArticle.title}</p>
          <p>{readableDate}</p>
        </>
        
      }
      <p>'hilasdhflsdfhsdalfhsdlfkhsdflkhd'</p>
    </>
  )
}

export default Detail
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

  const showList = (list) => {
    if (list.length) {
      return list.map(topic => <p className='detail_list-element' data-cy='detail_list-element'>{`${topic}  `}</p>)
    }
    return 'None at this time'
  }
  

  return (
    <>
      {currentArticle &&
      
        <>
          <h3 className='detail_title' data-cy='detail_title'>{currentArticle.title}</h3>
          <p className='detail_authors' data-cy='detail_authors'>{currentArticle.byline}</p>
          <p className='detail_abstract' data-cy='detail_abstract'>{currentArticle.abstract}</p>
          <img className='detail_photo' data-cy='detail_photo'src={currentArticle.multimedia[0].url}/>
          <p className='detail_caption' data-cy='detail_caption'>{currentArticle.multimedia[0].caption}</p>
          <p className='detail_topics' data-cy='detail_topics'>{showList(currentArticle.des_facet)}</p>
          <a className='detail_link-to-NYT' data-cy='detail_link-to-NYT' href={currentArticle.url}>Go To NYT</a>
          <p>{`Section: ${currentArticle.section.charAt(0).toUpperCase() + currentArticle.section.slice(1)}`}</p>
          <p>{currentArticle.title}</p>
          <p>{readableDate}</p>
          <p>{`Relevant Organiztions: ${showList(currentArticle.org_facet)}`}</p>
          <p>{`Relevant People: ${showList(currentArticle.per_facet)}`}</p>
        </>
      }
    </>
  )
}

export default Detail
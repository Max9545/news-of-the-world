import './Detail.css'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

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

  const showTopics = (list) => {

    if (list.length) {
      return list.map(topic => <p className='detail_topic-element' data-cy='detail_topic-element'>{`${topic}`}</p>)
    }
    return <p className='detail_no-elements' data-cy='detail_no-elements'>None at this time</p>
  }

  const showRelevantList = (list) => {
    
    if (list.length) {
      console.log(list)
      return list.map(item => item)
      // return list.map(relevant => {
      //   return <p className='detail_list-element' data-cy='detail_list-element'>{`${relevant}`}</p>
      // })
    }
    return <p lassName='detail_no-elements' data-cy='detail_no-elements'>None at this time</p>
  }
  
  return (
    <>
      {!currentArticle && 
        <>
        <Link className='detail-to-home' data-cy='detail-to-home' style={{color:'black'}} to='/'> ⬅ Back</Link>
        <p>Sorry, Could Not Find The Details For This Article At This time</p>
        </>
        }

      {currentArticle &&
      
        <div className='detail'>
          <div className='detail_links-container'>
            <Link className='detail-to-home' data-cy='detail-to-home' to='/'> ⬅ Back</Link>
            <a className='detail_link-to-NYT' data-cy='detail_link-to-NYT' href={currentArticle.url}>Go To Full NYT Article</a>
          </div>
          <div className='detail_title-author-container'>
            <h3 className='detail_title' data-cy='detail_title'>{currentArticle.title}</h3>
            <p className='detail_authors' data-cy='detail_authors'>{currentArticle.byline}</p>
          </div>
          <div className='lower-half-container'>
            <div className='detail_abstract-photo-caption-container'>
              <p className='detail_abstract' data-cy='detail_abstract'>{currentArticle.abstract}</p>
              <img className='detail_photo' data-cy='detail_photo'src={currentArticle.multimedia[0].url}/>
              <p className='detail_caption' data-cy='detail_caption'>{currentArticle.multimedia[0].caption}</p>
            </div>
            <div className='detail_topics-sections-date-orgs-people-container'>
              <p className='detail_topics-container' data-cy='detail_topics-container'>Topics: {showTopics(currentArticle.des_facet)}</p>
              <p className='detail_news-sections' data-cy='detail_news-sections' >{`Sections: ${currentArticle.section.charAt(0).toUpperCase() + currentArticle.section.slice(1)}`}</p>
              <p className='detail_date' data-cy='detail_date'>{readableDate}</p>
              <p className='detail_relevant-orgs' data-cy='detail_relevant-orgs'>{`Relevant Organiztions: ${showRelevantList(currentArticle.org_facet)}`}</p>
              <p className='detail_relevant-people' data-cy='detail_relevant-people'>{`Relevant People: ${showRelevantList(currentArticle.per_facet)}`}</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Detail
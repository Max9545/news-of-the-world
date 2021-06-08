import { useEffect, useState } from "react"

function Detail({ title, findArticle }) {

  const [currentArticle, setCurrentArticle] = useState()
console.log(findArticle(title))
console.log(title)

  useEffect(() => {
    setCurrentArticle(findArticle(title))
  }, [])

  return (
    <>
      {title}
      <p>'hilasdhflsdfhsdalfhsdlfkhsdflkhd'</p>
    </>
  )
}

export default Detail
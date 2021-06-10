const NYT_API_KEY = process.env.REACT_APP_NYT_KEY

export const getTechArticles = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${NYT_API_KEY}`)
  .then((response) => {
    if(!response.ok) {
      throw Error(`Unable to get these articles at the moment, please refresh and/or try again later. Error ${response.error}`)
    }
    return response.json()
  })
}
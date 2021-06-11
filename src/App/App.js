import { useEffect, useState } from 'react';
import { getArticles } from '../apiCalls';
import './App.css';
import CardDisplay from '../CardDisplay/CardDisplay'

import Detail from '../Detail/Detail'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header';

function App() {

  const [articles, setArticles] = useState([])
  const [type, setType] = useState('technology')

  useEffect(() => {
    getArticles(type)
    // .then(d => console.log(d))
    .then(data => setArticles(data.results))
  },[type])
  console.log(articles)
  const findArticle = (title) => {
    return articles.find(article => {
      return article.title === title
    })
  }


  return (
    <div className="app">
        <Header/>
      <Switch>
        <Route exact path='/article/:title' render={({ match }) => <Detail title={match.params.title} findArticle={findArticle} />}/>
        {articles && 
          <Route exact path='/' render={() => <CardDisplay type={type} setType={setType} articlesToDisplay={articles}/>}/>}
      </Switch>
    </div>
  );
}

export default App;

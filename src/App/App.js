import { useEffect, useState } from 'react';
import { getTechArticles } from '../apiCalls';
import './App.css';
import CardDisplay from '../CardDisplay/CardDisplay'
import Search from '../Search/Search';
import Detail from '../Detail/Detail'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header';

function App() {

  const [techArticles, setTechArticles] = useState([])

  useEffect(() => {
    getTechArticles()
    // .then(data => console.log(data))
    .then(data => setTechArticles(data.results))
  },[])

  const findArticle = (title) => {
    return techArticles.find(article => {
      return article.title === title
    })
  }


  return (
    <div className="app">
        <Header/>
        <Switch>
          <Search></Search>
          <Route exact path='/article/:title' render={({ match }) => <Detail title={match.params.title} findArticle={findArticle} />}/>
          <Route exact path='/' render={() => <CardDisplay articlesToDisplay={techArticles}/>}/>
        </Switch>
    </div>
  );
}

export default App;

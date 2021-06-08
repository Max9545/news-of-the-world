import { useEffect, useState } from 'react';
import { getTechArticles } from '../apiCalls';
import './App.css';
import CardDisplay from './CardDisplay/CardDisplay'
import Detail from './Detail/Detail'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header';

function App() {

  const [techArticles, setTechArticles] = useState([])

  useEffect(() => {
    getTechArticles()
    .then(data => setTechArticles(data.results))
  },[])

  const findArticle = (title) => {
    return techArticles.find(article => {
      console.log(article.title)
      console.log(title)
      return article.title === title
    })
  }


  return (
    <div className="app">
      <header className="app-header">
         {/* {detail.length && 
        <Route exact path='/article/:title' render={() => <Detail/>}/> */}
        <Header/>
        <Switch>
          <Route exact path='/article/:title' render={({ match }) => <Detail title={match.params.title} findArticle={findArticle} />}/>
          <Route exact path='/' render={() => <CardDisplay articlesToDisplay={techArticles}/>}/>
        </Switch>
        {/* {techArticles.length && 
        <Route exact path='/' render={() => <CardDisplay articlesToDisplay={techArticles}/>}/>
        } */}
      </header>
    </div>
  );
}

export default App;

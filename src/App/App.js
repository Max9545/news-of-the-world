import { useEffect, useState } from 'react';
import { getTechArticles } from '../apiCalls';
import './App.css';
import CardDisplay from './CardDisplay/CardDisplay'
import Detail from './Detail/Detail'
import { Route, Switch } from 'react-router-dom'

function App() {

  const [techArticles, setTechArticles] = useState([])

  useEffect(() => {
    getTechArticles()
    .then(data => setTechArticles(data.results))
  },[])


  return (
    <div className="app">
      <header className="app-header">
         {/* {detail.length && 
        <Route exact path='/article/:title' render={() => <Detail/>}/> */}
        <Switch>
          <Route exact path='/article/:title' render={({ match }) => <Detail title={match.params.title}/>}/>
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

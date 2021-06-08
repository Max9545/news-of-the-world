import { useEffect, useState } from 'react';
import { getTechArticles } from '../apiCalls';
import './App.css';
import CardDisplay from './CardDisplay/CardDisplay'
import { Route } from 'react-router-dom'

function App() {

  const [techArticles, setTechArticles] = useState([])

  useEffect(() => {
    getTechArticles()
    .then(data => setTechArticles(data.results))
  },[])


  return (
    <div className="app">
      <header className="app-header">
        {techArticles.length && 
        <Route exact path='/' render={() => <CardDisplay articlesToDisplay={techArticles}/>}/>
        }
      </header>
    </div>
  );
}

export default App;

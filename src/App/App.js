import { useEffect, useState } from 'react';
import { getTechArticles } from '../apiCalls';
import './App.css';
import CardDisplay from './CardDisplay/CardDisplay'

function App() {

  const [techArticles, setTechArticles] = useState([])

  useEffect(() => {
    getTechArticles()
    .then(data => setTechArticles(data.results))
  },[])


  return (
    <div className="app">
      <header className="app-header">
        {techArticles.length && <CardDisplay articlesToDisplay={techArticles}/>}
      </header>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { getTechArticles } from './apiCalls';
import './App.css';

function App() {

  const [techArticles, setTechArticles] = useState([])

  useEffect(() => {
    getTechArticles()
    .then(data => setTechArticles(data.results))
    console.log(techArticles)
  },[])
  console.log(techArticles)

  return (
    <div className="app">
      <header className="app-header">
      
      </header>
    </div>
  );
}

export default App;

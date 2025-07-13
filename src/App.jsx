import { useState, useEffect } from 'react';
import Search from './components/Search';

const API_BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const API_KEY = import.meta.env.VITE_TMDB_API_TOKEN;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

const App = () => {
  const [searchTeam, setsearchTeam] = useState('sdsd');

  const fetchMovie = async () => {
    try {
      const endpoint = `${API_BASE_URL}?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      const data = await response.json();
      console.log(data); // ✅ You'll see data here now
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <header>
        <img src="./hero-img (1).png" alt="hero" />
        <h1>
          Find <span className="text-gradient">Movies</span> You’ll Love Without the Hassle
        </h1>
      </header>
      <Search searchTeam1={searchTeam} setsearchTeam1={setsearchTeam} />
      <h1>{searchTeam}</h1>
    </div>
  );
};

export default App;

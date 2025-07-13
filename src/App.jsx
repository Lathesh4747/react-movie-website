import { useState, useEffect } from 'react';
import Search from './components/Search';
import moviecart from './components/moviecart'
import Spinner1 from './components/Spinner';
// Your own Spinner (used for rendering movies)
// import { Spinner } from 'flowbite-react'; // Flowbite spinner for loading state


//API

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
  const [searchTeam, setsearchTeam] = useState('');
  const [erroMessage, seterrorMessage] = useState('');
  const [movieList , setmovieList ] =  useState([]);
  const [loding , setloding] = useState (false);
  
  const fetchMovie = async () => {
    setloding(true)
  seterrorMessage('')
  try {
    const endpoint = `${API_BASE_URL}?sort_by=popularity.desc`;
    const response = await fetch(endpoint, API_OPTIONS);

    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    const data = await response.json();
    if(data.response == false){
      seterrorMessage(  `Error Message  is ${data.Error || "Failed to Feacting movies"}
      `  )
      setmovieList([])
      return;
    }
   
   setmovieList(data.results || []); 
  } catch (error) {
    console.error('Fetch error:', error);
    seterrorMessage('Error Fetching movie please try again');
  }finally{
    setloding(false)
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
      <section className='allmovie pl-20 pr-20  '>
        {/* <h2 className='pl-20 mt-[40px]' >All movies</h2>
        {loding ? ( <p className='text-white' >Loading...</p>) : erroMessage ?  (  <p className='text-red-500' >{erroMessage}</p> ) : 
        (<div className='flex-auto ' >
          <p className=' w-100' >
            <ul>
              {movieList.map((objforMovie)=>(
                <Spinner movie={objforMovie} />
              ))}
            </ul>
        </p>
        </div>)}
         */}
        <section className='px-5'>
  <section className="px-5">
  <h2 className="text-xl font-semibold pl-5 mt-10 mb-6 text-white">All movies</h2>

  {loding ? (
     <Spinner key={movie.id} movie={movie} />
  ) : erroMessage ? (
    <p className="text-red-500 text-center">{erroMessage}</p>
  ) : (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {movieList.map((movie) => (
        <Spinner1  movie={movie} />
      ))}
    </ul>
  )}
</section>

</section>    
      </section>
    </div>
  );
};

export default App;


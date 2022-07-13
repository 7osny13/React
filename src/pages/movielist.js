// import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MovieCard from "../component/card";
import {useDispatch, useSelector} from "react-redux"
import { getMoviesList } from "../store/actions/movies";
import { LangContext } from "../context/langcontext";

function MovieList() {
  // const [movies, setMovies] = useState([]);

  // const [keyword, setKeyword] = useState();

  
  const movies =  useSelector((state) => state.movies.list)
  console.log(movies)
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getMoviesList())
    // axios
    //   .get("https://api.themoviedb.org/3/movie/popular",{
    //     params: {
          
    //       api_key: "9efadf88f7f987211341982a879818b1"
          
    //     }
    // })
    //   .then((res) =>setMovies(res.data.results) )
    //   .catch((err) => console.log(err));
  },[]);

  const {contextLang , setContext} = useContext(LangContext)

  return (
    <>
    
    <h1 className="mb-5 text-danger mb-5">Context Language Using Context : {contextLang}</h1>
      <div className="container-fluid  row row-col-1 row-cols-md-3 g-4 bg-dark mt-5"   >
          { movies.map((movies) => {
            // console.log(movie)
          
             return <MovieCard movies={movies}  />;
             
        })} 
         
           
       
            
        
      </div>
    </>
  );
}

export default MovieList;

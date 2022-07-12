


// import {axiosinstance} from "../../network/axiosinstance";
import axios from "axios";

export const getMoviesList = () => (dispatch) => {
    // return  axiosinstance.get("/users")
    return  axios.get("https://api.themoviedb.org/3/movie/popular",{
      params: {
        
        api_key: "9efadf88f7f987211341982a879818b1",
        
      }})
    .then((res)=> 
        dispatch({
            type: "GET_MOVIES_LIST",
            payload: res.data.results
        })
    )
    .catch((err) => console.log(err))
   

}

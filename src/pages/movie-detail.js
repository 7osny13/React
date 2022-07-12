// https://api.themoviedb.org/3/movie/880009?api_key={apiKey}


import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function UserDetails(){

    const userparams = useParams()
    // console.log(userparams.id);

    const [details, setDetails] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${userparams.id}`,{

            params: {
          
                api_key: "9efadf88f7f987211341982a879818b1"
                
              }
        })
        .then((res)=> setDetails(res.data))
        .catch((err)=> console.log(err))

    }, [])




    return (
        <>
        <div className="App">
        <h1 >Title: </h1>
        <h4>{details.title}</h4> 
        <h1>overview:</h1>
        <p>{details.overview}</p>
        <h1>status:</h1>
        <p>{details.status}</p>
        <h1>popularity:</h1>
        <p>{details.popularity}</p>
        <h1>release_date:</h1>
        <p>{details.release_date}</p>

        </div>
             
           
            
        </>

    )
}

export default UserDetails;

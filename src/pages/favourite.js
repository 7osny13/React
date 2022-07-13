import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState ,useContext } from "react";
import { useParams } from "react-router-dom";
import { LangContext } from "../context/langcontext";

function FavouriteP(){
    const {contextLang , setContext} = useContext(LangContext)

    return (<>
            <h1 className="mb-5 text-danger">Context Language Using Context : {contextLang}</h1>
            <button className="btn btn-info" onClick={ () => setContext (contextLang === "ar" ? "en" : "ar") }> Change Context </button>
            {/* <h1>this is favourite page</h1> */}

        </>

    )
}

export default FavouriteP;
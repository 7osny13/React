
import {combineReducers} from "redux";
import FavReducer from "./favouritereducer";
import MovieReducer from "./movieReducer";


export default combineReducers ({
        favCompine: FavReducer,
        movies:MovieReducer
        
})
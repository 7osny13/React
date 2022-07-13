import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './pages/movielist';
import UserDetails from './pages/movie-detail';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Navbar from './component/navbar';
import FavouriteP from './pages/favourite';
import { LangContext } from './context/langcontext';
import { useState } from 'react';

function App() {
  const [contextLang , setContext] = useState("en")
  return (
    <LangContext.Provider value={{contextLang , setContext}} >
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path={"/favourite"}   component={FavouriteP} />
        <Route exact path={"/movie"}   component={MovieList} />
        <Route exact path={"/movie-detail/:id"}  
             component={UserDetails} />
      </Switch> 
    </BrowserRouter>
    </LangContext.Provider>
  );
}

export default App;

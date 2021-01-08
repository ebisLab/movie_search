import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {fake} from  './mock'

function App() {
  const [movies, setMovies]=useState()

  console.log("mock--->",fake)

  useEffect(() => {
    setMovies(fake)
    // axios.get(fake)
    // .then(res=> console.log("hello world"))
    // .catch(err=>console.log(err))
  }, [])


  return (
    <div className="App">
      <Navigation/>
      <Switch>
      <Route exact path="/" render={()=><Home movies={movies}/>}/>
      <Route path="/checkout" component={Checkout}/>
      </Switch>
    </div>
  );
}

export default App;

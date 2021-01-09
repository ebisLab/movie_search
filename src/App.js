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
  const [checkout, setCheckout]=useState([])

  useEffect(() => {
    setMovies(fake)
    // axios.get(fake)
    // .then(res=> console.log("hello world"))
    // .catch(err=>console.log(err))
  }, [])

  const addItem=(item)=>{
    setCheckout([...checkout, item])
  }

  const removeItem=(item)=>{
    setCheckout(checkout.filter(movieitem=> item.id !== movieitem.id))
  }

  const confirmCheckout=()=>{
    console.log("im supposed to checkout")
  }




  return (
    <div className="App">
      <Navigation checkout={checkout}/>
      <Switch>
      <Route exact path="/" render={()=><Home movies={movies} addItem={addItem}/>}/>
      <Route path="/checkout" render={()=><Checkout checkout={checkout} removeItem={removeItem} confirmCheckout={confirmCheckout} />}/>
      </Switch>
    </div>
  );
}

export default App;

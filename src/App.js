import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies]=useState()
  const [checkout, setCheckout]=useState([])
  const [searchText, setSearchText]=useState()

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=wonder woman`)
    .then(res=> {
      setMovies(res.data.Search)
    })
    .catch(err=>console.log(err))
  }, [])

  const addItem=(item)=>{
    setCheckout([...checkout, item])
  }

  const removeItem=(item)=>{
    setCheckout(checkout.filter(movieitem=> item.imdbID !== movieitem.imdbID))
  }


  const changeHandler=(e)=>{
    setSearchText(e.target.value)
  }

  const submitHandler=(e)=>{
    e.preventDefault()
    setSearchText(e.target.value)
    axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchText}`)
    .then(res=> {
      setMovies(res.data.Search)
    })
    .catch(err=>console.log(err))
  }




  return (
    <div className="App">
      <Navigation checkout={checkout}/>
      <Switch>
      <Route exact path="/" render={()=><Home movies={movies} addItem={addItem} changeHandler={changeHandler} submitHandler={submitHandler} searchText={searchText}/>}/>
      <Route path="/checkout" render={()=><Checkout checkout={checkout} removeItem={removeItem}  />}/>
      </Switch>
    </div>
  );
}

export default App;

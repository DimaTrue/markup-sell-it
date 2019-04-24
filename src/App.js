import React from 'react';
import './App.scss';
import Login from './components/login/login';
import ProductList from './components/productList/productList';
import { BrowserRouter, Route } from "react-router-dom";


const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route path='/' exact component={Login} />
      <Route path='/productlist' component={ProductList} />
    </div>
  </BrowserRouter>
);

export default App;

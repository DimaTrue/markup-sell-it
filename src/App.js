import React from 'react';
import './App.scss';
import Login from './components/login/login';
import NoMatch from './components/NoMatch/NoMatch';

import ProductList from './components/productList/productList';
import { BrowserRouter, Switch, Route } from "react-router-dom";



const App = () => (
  <BrowserRouter>
    <Switch>
      <div className="App">
        <Route path='/login' exact component={Login} />
        <Route path='/' exact component={ProductList} />
        <Route component={NoMatch}/>
      </div>
    </Switch>
  </BrowserRouter>
);

export default App;

import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import history from './history';

import Login from './components/LoginPage/Login/Login';
import Profile from './containers/Profile';
import WrongPath from './components/WrongPath/WrongPath';
import ProductList from './containers/ProductList';
import ErrorBoundary from './components/CommonComponents/ErrorBoundary/ErrorBoundary';
import AddProductForm from './containers/AddProductForm';
import ProtectedRoute from './containers/ProtectedRoute';
import ProductItemPage from './containers/ProductItemPage';

import './styles/App.scss';


class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/login' component={() => <ErrorBoundary><Login /></ErrorBoundary>} />
          <ProtectedRoute path='/' exact component={() => <ErrorBoundary><ProductList /> </ErrorBoundary>} />
          <ProtectedRoute path='/product/:id' component={ProductItemPage} />
          <ProtectedRoute path='/add_product' component={() => <AddProductForm />} />
          <ProtectedRoute path='/profile' component={Profile} />
          <Route component={() => <ErrorBoundary><WrongPath /></ErrorBoundary>} />
        </Switch>
      </Router>
    )
  }
}

export default App; 

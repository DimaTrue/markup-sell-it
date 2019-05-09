import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import history from './history';

import Login from './components/LoginPage/Login/Login';
import Profile from './components/Profile/Profile';
import PostForm from './components/CommonComponents/AddProductForm/AddProductForm';
import WrongPath from './components/WrongPath/WrongPath';
import ProductList from './containers/ProductList';
import ErrorBoundary from './components/CommonComponents/ErrorBoundary/ErrorBoundary';
import ProductItemPage from './containers/ProductItemPage';
import ProtectedRoute from './components/CommonComponents/ProtectedRoute/ProtectedRoute';

import './styles/App.scss';


class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/login' component={() => <ErrorBoundary><Login /></ErrorBoundary>} />
          <ProtectedRoute path='/' exact component={() => <ErrorBoundary><ProductList /> </ErrorBoundary>} />
          <ProtectedRoute path='/product/:id' component={ProductItemPage} />
          <ProtectedRoute path='/add_product' component={() => <PostForm />} />
          <ProtectedRoute path='/profile' component={() => <Profile />} />
          <Route component={() => <ErrorBoundary><WrongPath /></ErrorBoundary>} />
        </Switch>
      </Router>
    )
  }
}

export default App; 

import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import history from './history';

import Profile from './containers/Profile';
import Loading from './components/CommonComponents/Loading/Loading';
import ProductList from './containers/ProductList';
import AddProductForm from './containers/AddProductForm';
import ProductItemPage from './containers/ProductItemPage';

import './styles/App.scss';

const Login = lazy(() => import('./components/LoginPage/Login/Login'));
const WrongPath = lazy(() => import('./components/WrongPath/WrongPath'));
const ErrorBoundary = lazy(() => import('./components/CommonComponents/ErrorBoundary/ErrorBoundary'));
const ProtectedRoute = lazy(() => import('./containers/ProtectedRoute'));


class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path='/login' component={() => <ErrorBoundary><Login /></ErrorBoundary>} />
            <ProtectedRoute path='/' exact component={() => <ErrorBoundary><ProductList /> </ErrorBoundary>} />
            <ProtectedRoute path='/product/:id' component={ProductItemPage} />
            <ProtectedRoute path='/add_product' component={() => <AddProductForm />} />
            <ProtectedRoute path='/profile' component={Profile} />
            <Route component={() => <ErrorBoundary><WrongPath /></ErrorBoundary>} />
          </Switch>
        </Suspense>
      </Router>
    )
  }
}

export default App; 

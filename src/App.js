import React from 'react';
import './styles/App.scss';
import Login from './components/LoginPage/Login/Login';
import Profile from './components/Profile/Profile';
import PostForm from './components/CommonComponents/AddProductForm/AddProductForm';
import WrongPath from './components/WrongPath/WrongPath';
import ProductList from './containers/ProductList';
import ProductItemPage from './containers/ProductItemPage';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundary from './components/CommonComponents/ErrorBoundary/ErrorBoundary';

class App extends React.Component {

  render() {
    return (
      // <Router history={history}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={() => <ErrorBoundary><Login /></ErrorBoundary>} />
          <Route path='/' exact component={() => <ErrorBoundary><ProductList /> </ErrorBoundary>} />
          <Route path='/product/:id' component={ProductItemPage} />
          <Route path='/post' component={() => <PostForm />} />
          <Route path='/profile' component={() => <Profile />} />
          <Route component={() => <ErrorBoundary><WrongPath /></ErrorBoundary>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App; 
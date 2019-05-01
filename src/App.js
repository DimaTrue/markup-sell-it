import React from 'react';
import './styles/App.scss';
import Login from './components/LoginPage/Login/Login';
import WrongPath from './components/WrongPath/WrongPath';
import ProductList from './containers/productList';
import ProductItemPage from './containers/productItemPage';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundary from './components/CommonComponents/ErrorBoundary/ErrorBoundary';


class App extends React.Component {
  state = {
    isLoading: false,
    isAuthentificated: false,
  }

  login = () => {
    this.setState({ isAuthentificated: true });
  };

  logout = () => {
    this.setState({ isAuthentificated: false });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={() => <ErrorBoundary><Login /></ErrorBoundary>} />
          <Route path='/' exact component={() => <ErrorBoundary><ProductList /> </ErrorBoundary>} />
          <Route path='/product/:id' component={ProductItemPage} />
          <Route component={() => <ErrorBoundary><WrongPath /></ErrorBoundary>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
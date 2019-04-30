import React, { Fragment } from 'react';
import './styles/App.scss';
import Login from './components/LoginPage/Login/Login';
import WrongPath from './components/WrongPath/WrongPath';
import ProductList from './components/ProductListPage/ProductList/ProductList';
import ProductItemPage from './components/ProductItemPage/ProductItemPage';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';
import ErrorBoundary from './components/CommonComponents/ErrorBoundary/ErrorBoundary';
import Loading from './components/CommonComponents/Loading/Loading';


class App extends React.Component {
  state = {
    isLoading: true,
    isAuthentificated: false,
    data: [],
  }

  async componentDidMount() {
    axios.get(`http://light-it-04.tk/api/posters/`, {
      params: {
        page: 1,
      }
    })
      .then(res => this.setState({ data: res.data.data, isLoading: false, }))
      .catch(error => console.log(error))
  }


  login = () => {
    this.setState({ isAuthentificated: true });
  };

  logout = () => {
    this.setState({ isAuthentificated: false });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <Fragment>
          <Loading />
        </Fragment>
      )
    } else {
      return (
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={() => <ErrorBoundary><Login login={this.login} /></ErrorBoundary>} />
            <Route path='/' exact component={() => <ErrorBoundary><ProductList logout={this.logout} {...this.state} /> </ErrorBoundary>} />
            <Route path='/product/:id' component={ProductItemPage} />
            <Route component={() => <ErrorBoundary><WrongPath /></ErrorBoundary>} />
          </Switch>
        </BrowserRouter>
      )
    }
  }
}

export default App;

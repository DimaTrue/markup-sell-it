import React, { Fragment } from 'react';
import './styles/App.scss';
import Login from './components/LoginPage/Login/Login';
import WrongPath from './components/WrongPath/WrongPath';
import ProductList from './components/ProductListPage/ProductList/ProductList';
import ProductItemPage from './components/ProductItemPage/ProductItemPage';
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import axios from 'axios';
import ErrorBoundary from './components/CommonComponents/ErrorBoundary/ErrorBoundary';
import Loading from './components/CommonComponents/Loading/Loading';
import { connect } from 'react-redux';
import {fetchProducts} from './actions.js';

class App extends React.Component {
  state = {
    isLoading: false,
    isAuthentificated: false,
    data: [],
  }

  async componentDidMount() {
    // axios.get(`http://light-it-04.tk/api/posters/`, {
    //   params: {
    //     page: 1,
    //   }
    // })
    //   .then(res => this.setState({ data: res.data.data, isLoading: false, }))
    //   .catch(error => console.log(error))
    this.props.fetchProducts();
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
            <Route path='/' exact component={() => <ErrorBoundary><ProductList logout={this.logout} data={this.props.data} /> </ErrorBoundary>} />
            <Route path='/product/:id' component={ProductItemPage} />
            <Route component={() => <ErrorBoundary><WrongPath /></ErrorBoundary>} />
          </Switch>
        </BrowserRouter>
      )
    }
  }
}

const mapStatetoProps = state => ({data: state.data});

const mapDispatchtoProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
})
export default connect(mapStatetoProps, mapDispatchtoProps)(App);

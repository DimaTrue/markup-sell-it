import axios from 'axios';
import { logOut } from '../actions/user';

export default {
  setupInterceptors: (store, history) => {
    axios.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      if (error.response.status === 401) {
        store.dispatch(logOut());
        history.push('/login');
      }
      if (error.response.status === 404) {
        history.push('/error_404_');
      }
      return Promise.reject(error);
    })
  }
}
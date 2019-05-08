export default ({
  setupInterceptors(store, history) {
    axios.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      if (error.response.status === 401) {
        //store.dispatch(logOut());
      }
      if (error.response.status === 404) {
        //history.push('/');
      }
      return Promise.reject(error);
    })
  }
})
import React from 'react';

import Loading from '../Loading/Loading';

const LoadingHoc = ({ component: Component, loadingProps: loading, ...props }) => {
  return loading? <Loading />: <Component {...props} />
}

export default LoadingHoc;
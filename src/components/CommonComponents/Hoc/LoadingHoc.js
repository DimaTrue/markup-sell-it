import React from 'react';

import Loading from '../Loading/Loading';

const LoadingHoc = ({ component: Component, loadingProps: loading, ...props }) => {
  console.log('Hoc', props)
  return loading? <Loading />: <Component {...props} />
}

export default LoadingHoc;
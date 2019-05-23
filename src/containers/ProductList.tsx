import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import ProductList from '../components/ProductListPage/ProductList/ProductList';

import { loadProductsRequest } from '../actions/products';
import { ApplicationState } from '../store/store';
import LoadingHoc from '../components/CommonComponents/Hoc/LoadingHoc';


interface StateProps {
  isLoading: boolean;
}

interface DispatchProps {
  loadProductsRequest(): void;
}

type Props = StateProps & DispatchProps

class Products extends React.Component<Props> {

  componentDidMount() {
    const { loadProductsRequest } = this.props;
    loadProductsRequest();
  }
  render() {
    const { isLoading } = this.props;
    return (
      <LoadingHoc loadingProps={isLoading} component={ProductList} {...this.props} />
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  data: state.products.data,
  isLoading: state.products.isLoading,
  error: state.products.error,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadProductsRequest: () => dispatch(loadProductsRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);

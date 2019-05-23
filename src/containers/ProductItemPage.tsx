import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import ProductItemPage from '../components/ProductItemPage/ProductItemPage';
import LoadingHoc from '../components/CommonComponents/Hoc/LoadingHoc';

import { loadProductItemRequest } from '../actions/products';
import { ApplicationState } from '../store/store';

interface RouterProps {
  computedMatch: any;
}

interface StateProps {
  isLoadingItem: boolean;
}

interface DispatchProps {
  loadProductItemRequest(index: number): void;
}

type Props = StateProps & DispatchProps & RouterProps

class ProductItem extends React.Component<Props> {

   componentDidMount() {
     const { loadProductItemRequest, computedMatch } = this.props;
    loadProductItemRequest(computedMatch.params.id);
  }

  render() {
    const { isLoadingItem } = this.props;
    return (<LoadingHoc loadingProps={isLoadingItem} component={ProductItemPage} {...this.props} />)
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  productItem: state.products.productItem,
  isLoadingItem: state.products.isLoadingItem,
  errorItem: state.products.errorItem,
});

// itemIndex is a value of this.props.match.params.id of current product

const mapDispatchToProps = (dispatch: Dispatch) => ({
 loadProductItemRequest: (itemIndex: number) => dispatch(loadProductItemRequest(itemIndex)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);

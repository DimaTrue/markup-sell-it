import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import search from '../../../img/search.png';

import style from './Search.module.scss';


class Search extends React.Component {

  handleInput = e => {
    const { searchProducts, history } = this.props;
    if (history.location.pathname !== '/') {
      history.push('/');
    }
    const value = e.target.value.toLowerCase();
    searchProducts(value);
  };

  render() {
    return (
      <div className={style.searchBlock}>
        <input className={style.input}
          onChange={this.handleInput}
          type="text"
          placeholder="Try to find something"
          autoFocus
          value={this.props.value}
        />
        <img className={style.img} src={search} alt="search" />
      </div>
    );
  }
}

Search.propTypes = {
  searchProducts: PropTypes.func.isRequired,
}

export default withRouter(Search);

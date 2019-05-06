import React from 'react';
import style from './Search.module.scss';
import search from '../../../img/search.png';
import PropTypes from 'prop-types';


class Search extends React.Component {

  handleInput = (e) => {
    const value = e.target.value.toLowerCase();
    this.props.searchProducts(value)
  }

  render() {
    return (
      <div className={style.searchBlock}>
        <input className={style.input} onChange={this.handleInput} type="text" placeholder="Try to find something" />
        <img className={style.img} src={search} alt="search" />
      </div>
    );
  }
}

Search.propTypes = {
  searchProducts: PropTypes.func.isRequired,
}

export default Search;


import React from 'react';
import search from '../../img/search.png';

const Search = () => (
  <div className="search-block">
    <input id="imp" className="search-block__input" type="text" placeholder="Try find something" />
    <img className="search-block__img" src={search} alt="search" />
  </div>
);


export default Search;
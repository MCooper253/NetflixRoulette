import React from 'react';

import SearchBar from './SearchBar.js';

import I18N from '../../../core/I18N.js';

//Container for the Search components.
const Search = () => {
  return (
    <div className="searchWrapper">
      <h1>{I18N[process.env.LANG].FIND_YOUR_MOIVE}</h1>
      <SearchBar />
    </div>
  );
};

export default Search;

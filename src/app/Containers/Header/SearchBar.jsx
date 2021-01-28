import React from 'react';

import Button from '../../Components/Button.jsx';
import TextInput from '../../Components/TextInput.jsx';

import I18N from '../../../core/I18N';

const onSearch = (e) => {
  e.preventDefault();
};

// Container for the search input and search button.
const SeacrhBar = () => (
  <div className="movie-search">
    <TextInput
      type="text"
      name="search-criteria"
      placeHolder={I18N[process.env.LANG].WHAT_DO_YOU_WANT_TO_WATCH}
    />
    <Button caption={I18N[process.env.LANG].SEARCH} onClick={onSearch} />
  </div>
);

export default SeacrhBar;

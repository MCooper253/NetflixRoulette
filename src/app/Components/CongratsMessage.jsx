import React from 'react';

import I18N from '../../core/I18N.js';

const AddMovieForm = () => (
  <>
    <p>{I18N[process.env.LANG].CONGRATS_MESS}</p>
  </>
);

export default AddMovieForm;

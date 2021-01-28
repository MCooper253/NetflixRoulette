import React from 'react';

import I18N from '../../core/I18N';

const CongratsMessage = () => <p>{I18N[process.env.LANG].CONGRATS_MESS}</p>;

export default CongratsMessage;

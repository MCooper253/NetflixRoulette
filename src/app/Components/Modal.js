import React from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from '../../../node_modules/focus-trap-react/dist/focus-trap-react.js';
import PropTypes from 'prop-types';

import Button from '../Components/Button.js'

const Modal = (props) => {

    return ReactDOM.createPortal(
        <FocusTrap>
            <>
                <h1>Hello, I'm Your Modal.</h1>
                <Button
                    onClick={props.closeModal}
                />
            </>
        </FocusTrap>,
        document.body
    );
};

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired
}

export default Modal
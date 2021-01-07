import React from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from '../../../node_modules/focus-trap-react/dist/focus-trap-react.js';
import PropTypes from 'prop-types';

import Button from '../Components/Button.js';
import Close from '../Images/close.png';
import Logo from '../Components/Logo.js';
import Footer from '../Containers/Footer.js'

const Modal = (props) => {

    return ReactDOM.createPortal(
        <div id='modal-container'>
            <Logo />
                <FocusTrap>
                    <aside className='modal'>
                        <Button
                            onClick={props.closeModal}
                            image={Close}
                        />
                        <h1>{props.title}</h1>
                        {props.innerComp}
                    </aside>
                </FocusTrap>
            <Footer />
        </div>,
        document.body
    );
};

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    innerComp: PropTypes.object,
    title: PropTypes.string
}

export default Modal
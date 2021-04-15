import React from 'react';
import { connect } from 'react-redux';

import ModalContainer from './AddMovieModalContainer.js'
import Logo from '../../Components/Logo.js';
import PropTypes from 'prop-types';
import Search from '../../Images/search.png';
import { closeFilmBody } from '../../Redux/actions.js'

const mapDispatchStateToProps = dispatch => ({
    showFilmBodyFunc: () => dispatch(closeFilmBody())
})

const TopBar = (props) => {

    return (
        <nav>
            {props.film ? <img src={Search} onClick={() => props.showFilmBodyFunc()} /> : <ModalContainer />}
            <Logo />
        </nav>
    )
};


TopBar.propTypes = {
    film: PropTypes.object.isRequired
}

export default connect(null, mapDispatchStateToProps)(TopBar);
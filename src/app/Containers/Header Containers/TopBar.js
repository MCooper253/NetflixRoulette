import React from 'react';
import { connect } from 'react-redux';

import ModalContainer from './AddMovieModalContainer.js'
import Logo from '../../Components/Logo/index';
import Search from '../../Images/search.png';
import { closeFilmBody } from '../../Redux/actions.js'

const mapDispatchStateToProps = dispatch => ({
    closeFilmBodyFunc: () => dispatch(closeFilmBody())
})

const TopBar = (props) => {

    return (
        <nav>
            {props.film ? <img src={Search} onClick={() => props.closeFilmBodyFunc()} /> : <ModalContainer />}
            <Logo />
        </nav>
    )
};

export default connect(null, mapDispatchStateToProps)(TopBar);
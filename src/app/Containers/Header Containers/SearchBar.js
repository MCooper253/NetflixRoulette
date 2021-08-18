import React from 'react';
import { connect } from 'react-redux'

import Button from '../../Components/Button/index.js';
import TextInput from '../../Components/TextInput.js'
import { getMovies } from '../../Redux/thunk.js'

const mapDipatchStateToProps = dispatch => ({
    getMoviesFunc: (displayGenre, sortCatagory, offset) => {dispatch(getMovies(displayGenre, sortCatagory, offset));},
})

//Container for the ssearch input and search button.
const SeacrhBar = (props) => {

    const onSearch = (e) => {
        e.preventDefault();
        const searchQuery = document.querySelector('.movie-search input').value;
    }

    return (
        <div className='movie-search'>
            <TextInput
                type='text'
                name='search-criteria'
                placeHolder='What do you want to watch?'
            />
            <Button
                caption="Search"
                onClick={onSearch}
            />
        </div>
    )
};

export default connect(null, mapDipatchStateToProps)(SeacrhBar);
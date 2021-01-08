import React from 'react';
import PropTypes from 'prop-types';

const EditMovieForm = (props) => {

    return (
        <form onSubmit={props.onSubmit}>
            <label>MOVIE ID</label><br />
            <p>MOVIEID#43895492305432</p><br />
            <label>TITLE</label><br />
            <input type='text' placeholder='Title' /><br />
            <label>RELEASE DATE</label><br />
            <input type='text' placeholder='Select date' /><br />
            <label>MOVIR URL</label><br />
            <input type='text' placeholder='Movie URL here' /><br />
            <label>GENRE</label><br />
            <select>
                <option>Action</option>
                <option>Crime</option>
            </select><br />
            <label>OVERVIEW</label><br />
            <input type='text' placeholder='Overview here' /><br />
            <label>RUNTIME</label><br />
            <input type='text' placeholder='Runtime here' /><br />
            <input type='submit' value='CONFIRM' /> 
            <input type='button' value='RESET' />
        </form>
    )
}

EditMovieForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default EditMovieForm;
import React from 'react';
import PropTypes from 'prop-types';

const AddMovieForm = (props) => {

    return (
        <form onSubmit={props.onSubmit}>
            <label>TITLE</label><br />
            <input type='text' placeholder='Film title here' /><br />
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

AddMovieForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default AddMovieForm;
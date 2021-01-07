import React from 'react';

const AddMovieForm = () => {

    return (
        <form onSubmit={e=>{e.preventDefault()}}>
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

export default AddMovieForm;
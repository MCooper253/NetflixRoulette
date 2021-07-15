import React, { useEffect } from 'react'
import PropTypes from 'prop-types';

const NavBar = ({ setDisplayGenre, handleOnSelect, selectedGenre }) => {
    useEffect(()=>{
        toggleNavStyle()
    })

    const toggleNavStyle = () => {
        document.querySelectorAll('.navBarWrapper li').forEach(input => {input.classList.remove('active')})
        document.querySelector(`.navBarWrapper li[name = ${selectedGenre}]`).classList.add('active')
    }

    return(
        <section className='navBarWrapper'>
            <ul>
                <li key='all' name='all' className='catagory active' onClick={setDisplayGenre}>ALL</li>
                <li key='documentary' name='documentary' className='catagory' onClick={setDisplayGenre}>DOCUMENTARY</li>
                <li key='comedy' name='comedy' className='catagory' onClick={setDisplayGenre}>COMEDY</li>
                <li key='horror' name='horror' className='catagory' onClick={setDisplayGenre}>HORROR</li>
                <li key='crime' name='crime' className='catagory' onClick={setDisplayGenre}>CRIME</li>
                <li key='select' name='select'>
                    <select onChange={handleOnSelect}>
                        <option>RELEASE DATE</option>
                        <option>BUDGET</option>
                        <option>RUNTIME</option>
                        <option>RATING</option>
                    </select>
                </li>
                <li key='sort' name='sort'>SORT BY</li>
            </ul>
        </section>
    )
};

NavBar.propTypes = {
    setDisplayGenre: PropTypes.func.isRequired,
    selectedGenre: PropTypes.string.isRequired,
    handleOnSelect: PropTypes.func.isRequired
}

export default NavBar
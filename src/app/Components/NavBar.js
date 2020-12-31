import React from 'react'

const NavBar = () => {
    return(
        <section className='navBarWrapper'>
            <ul>
                <li key='all' name='all'><a>ALL</a></li>
                <li key='documentary' name='documentary'>DOCUMENTARY</li>
                <li key='comedy' name='comedy'>COMEDY</li>
                <li key='horror' name='horror'>HORROR</li>
                <li key='crime' name='crime'>CRIME</li>
                <li key='select' name='select'>
                    <select>
                        <option>RELEASE DATE</option>
                    </select>
                </li>
                <li key='sort' name='sort'>SORT BY</li>
            </ul>
        </section>
    )
};

export default NavBar
import React from 'react'

const NavBar = () => {
    return(
        <section className='navBarWrapper'>
            <ul>
                <li key='all' name='all' className='catagory'><a>ALL</a></li>
                <li key='documentary' name='documentary' className='catagory'><a>DOCUMENTARY</a></li>
                <li key='comedy' name='comedy' className='catagory'><a>COMEDY</a></li>
                <li key='horror' name='horror' className='catagory'><a>HORROR</a></li>
                <li key='crime' name='crime' className='catagory'><a>CRIME</a></li>
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
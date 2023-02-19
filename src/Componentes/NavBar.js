import React, { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import getCategories from '../service/getCategories'

export default function NavBar() {  
    const [categories, setCategories] = useState([])
    const navDropdownStyle = {margin: '15px 50px', fontFamily: 'IBM Plex Mono', color: 'orange'}

    useEffect(() => {
        getCategories().then(res => setCategories(res))
    }, [])

    return(
        <>
            <nav>
                <div id="icon"></div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <NavDropdown title='Games' style={navDropdownStyle}>
                        {
                        categories.map(category => {
                            return(
                            <div className="dropDownItemStyle">
                                <Link to={`/category/${category}`} className='dropDownLinkStyle' >{category}</Link>
                                <br />
                            </div>
                            )
                        })
                        }
                    </NavDropdown>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </nav>
        </>
    )
}



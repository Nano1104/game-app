import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {  
    const styles = {margin: '15px 50px', fontFamily: 'IBM Plex Mono', color: 'orange'}

    return(
        <>
            <nav>
                <div id="icon"></div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    {/* <li><Link to="/products">Games</Link></li> */}
                    <NavDropdown title='Games' style={styles}>
                        
                    </NavDropdown>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </nav>
        </>
    )
}


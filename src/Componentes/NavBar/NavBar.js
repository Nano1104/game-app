import React, { useState, useEffect, useContext } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';
import { CartContext } from '../Context/Context';
import getCategories from '../../service/getCategories'

import { FaShoppingCart } from "react-icons/fa";


export default function NavBar() {  
    const [categories, setCategories] = useState([])
    const [cartHover, setCartHover] = useState(false) ////???????
    const navDropdownStyle = {margin: '15px 50px', fontFamily: 'IBM Plex Mono', color: 'orange'}
    const { cartQuantity } = useContext(CartContext)

    useEffect(() => {
        getCategories().then(res => setCategories(res))
    }, [])

    return(
        <>
            <nav>
                <div id="icon"></div>
                <Link to="/cart">
                    <div className='shopping-cart-container d-flex justify-content-end'>
                        <FaShoppingCart className="shopping-cart-container__icon" />
                        <span className="shopping-cart-container__count">{cartQuantity()}</span>
                    </div>
                </Link>
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
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </nav>
        </>
    )
}



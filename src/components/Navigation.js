import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import "./Navigation.css";

function Navigation() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closedMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="NavBar">
                <div className="navigation">
                    <Link to="/" className="navBar">
                        <img src="./imh/logo1.png" alt="logo.png" className="nav-logo" />
                    </Link>
                    <div className="nav-menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menus active' : 'nav-menus'}>
                        <li className="nav-items">
                            <Link to='/' className='nav-item-link' onClick={closedMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/features' className='nav-item-link' onClick={closedMenu}>
                                FEATURES
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/about-us' className='nav-item-link' onClick={closedMenu}>
                                ABOUT US
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/register' className='nav-item-btn' onClick={closedMenu}>
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                    {button && <Button to='/register' buttonStyle='btn--out'>REGISTER</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navigation

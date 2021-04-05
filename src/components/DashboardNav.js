import React from 'react'
import { Link } from 'react-router-dom'
import './DashboardNav.css'

function DashboardNav() {

    return (
        <>
            <nav className='dashNavBar'>
                <div className="dashnavigation">
                    <Link className="dashnavBar">
                        <img src="./imh/logo1.png" alt="logo.png" className="dash-logo dash-logo-one" /><img src="./imh/icon.png" alt="logo.png" className="dash-logo dash-logo-two" />
                    </Link>

                    <ul className='dash-menus'>
                        <li className="dash-items">
                            <Link>
                                <i className="fas fa-home"></i>
                            </Link>
                        </li>
                        <li className="dash-items">
                            <Link>
                                <i className="fas fa-comment-alt"></i>
                            </Link>
                        </li>
                        <li className="dash-items">
                            <Link>
                                <i className="fas fa-bell"></i>
                            </Link>
                        </li>
                        <li className="dash-items">
                            <Link>
                                <i className="fas fa-cog"></i>
                            </Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default DashboardNav

import React from 'react'
import './styles/NavBar.css'

// import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div id="nav">
                <div className="logo">
                    <div className="logo">
                        <h3>logo</h3>
                    </div>
                </div>

                <div className="logo">
                    <div className="logoHome">
                        <h3>Home</h3>
                    </div>
                </div>

                <div className="logo">
                    <div className="logoPlante">
                        <h3>plantes</h3>
                    </div>
                </div>

                <div className="logo">
                    <div className="logoMessage">
                        <h3>Mssg</h3>
                    </div>
                </div>

                <div className="logo">
                    <div className="logoProfil">
                        <h3>Profil</h3>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

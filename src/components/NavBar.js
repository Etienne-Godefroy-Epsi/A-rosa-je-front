import React from 'react'
import '../styles/NavBar.css'

import { NavLink } from 'react-router-dom'

const userId = localStorage.getItem('userId')

const NavBar = () => {
    return (
        <nav>
            <div id="nav">
                <div className="logo">
                    <NavLink exact="true" to="/">
                        <div className="logo">
                            <h3>logo</h3>
                        </div>
                    </NavLink>
                </div>
                {userId ? (
                    <div className="logo">
                        <NavLink exact="true" to="/plantes">
                            <div className="logoPlante">
                                <h3>plantes</h3>
                            </div>
                        </NavLink>
                    </div>
                ) : null}
                {userId ? (
                    <div className="logo">
                        <div className="logoMessage">
                            <h3>Mssg</h3>
                        </div>
                    </div>
                ) : null}
                {userId ? (
                    <div className="logo">
                        <div className="logoProfil">
                            <h3>Profil</h3>
                        </div>
                    </div>
                ) : (
                    <div className="logo">
                        <NavLink exact="true" to="/Log">
                            <div className="logoProfil">
                                <h3>Se connecter</h3>
                            </div>
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar

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
                        <div className="logoArosaje">
                            <h3>
                                <img
                                    src=".\img\icons8-growing-plant-48.png"
                                    title="LogoArosaje"
                                    alt="LogoArosaje"
                                />
                            </h3>
                        </div>
                    </NavLink>
                </div>
                {userId ? (
                    <div className="logo">
                        <NavLink exact="true" to="/Plante">
                            <div className="logoPlante">
                                <h3>
                                    <img
                                        src=".\img\icons8-potted-plant-50.png"
                                        title="MesPlantes"
                                        alt="MesPlantes"
                                    />
                                </h3>
                            </div>
                        </NavLink>
                    </div>
                ) : null}
                {userId ? (
                    <div className="logo">
                        <NavLink exact="true" to="/Contrats">
                            <div className="logoMessage">
                                <h3>
                                    <img
                                        src=".\img\icons8-agreement-50.png"
                                        title="MesContrats"
                                        alt="MesContrats"
                                    />
                                </h3>
                            </div>
                        </NavLink>
                    </div>
                ) : null}
                {userId ? (
                    <div className="logo">
                        <NavLink exact="true" to="/Profil">
                            <div className="logoProfil">
                                <h3>
                                    <img
                                        src=".\img\icons8-male-user-50.png"
                                        title="MonProfil"
                                        alt="MonProfil"
                                    />
                                </h3>
                            </div>
                        </NavLink>
                    </div>
                ) : (
                    <div className="logo">
                        <NavLink exact="true" to="/Log">
                            <div className="logoProfil">
                                <h3>
                                    <img
                                        src=".\img\icons8-login-50.png"
                                        title="SeConnecter"
                                        alt="SeConnecter"
                                    />
                                </h3>
                            </div>
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar

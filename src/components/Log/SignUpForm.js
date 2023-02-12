import React, { useState } from 'react'
import axios from 'axios'
import SignInForm from './SignInForm'

const SignUpForm = () => {
    const [formSubmit, setFormSubmit] = useState(false)
    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [adresse, setAdresse] = useState('')
    const [password, setPassword] = useState('')
    const [controlPassword, setControlPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()
        const passwordConfirmError = document.querySelector(
            '.password-confirm.error'
        )

        const usersInfo = await axios.get('http://localhost:8080/users/1')
        passwordConfirmError.innerHTML = ''

        console.log(usersInfo)

        if (password !== controlPassword) {
            passwordConfirmError.innerHTML =
                'Les mots de passe ne correspondent pas'
        } else {
            await axios({
                method: 'post',
                url: 'http://localhost:8080/users/client/inscription',
                data: {
                    prenom,
                    nom,
                    adresse,
                    email,
                    password,
                },
            })
                .then(() => {
                    setFormSubmit(true)
                })
                .catch((err) => console.log(err))
        }
    }

    return (
        <>
            {formSubmit ? (
                <>
                    <SignInForm />
                    <span></span>
                    <h4 className="success">
                        Enregistrement réussi, veuillez-vous connecter
                    </h4>
                </>
            ) : (
                <form action="" onSubmit={handleRegister} id="sign-up-form">
                    <label htmlFor="prenom">Prénom</label>
                    <br />
                    <input
                        type="text"
                        name="prenom"
                        id="prenom"
                        onChange={(e) => setPrenom(e.target.value)}
                        value={prenom}
                    />
                    <div className="prenom error"></div>
                    <br />
                    <label htmlFor="nom">Nom</label>
                    <br />
                    <input
                        type="text"
                        name="nom"
                        id="nom"
                        onChange={(e) => setNom(e.target.value)}
                        value={nom}
                    />
                    <div className="nom error"></div>
                    <br />
                    <label htmlFor="adresse">Adresse</label>
                    <br />
                    <input
                        type="text"
                        name="adresse"
                        id="adresse"
                        onChange={(e) => setAdresse(e.target.value)}
                        value={adresse}
                    />
                    <br />
                    <br />
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <div className="email error"></div>
                    <br />
                    <label htmlFor="password">Mot de passe</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <div className="password error"></div>
                    <br />
                    <label htmlFor="password-conf">
                        Confirmer mot de passe
                    </label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="password-conf"
                        onChange={(e) => setControlPassword(e.target.value)}
                        value={controlPassword}
                    />
                    <div className="password-confirm error"></div>
                    <br />
                    <input type="submit" value="Valider inscription" />
                </form>
            )}
        </>
    )
}

export default SignUpForm

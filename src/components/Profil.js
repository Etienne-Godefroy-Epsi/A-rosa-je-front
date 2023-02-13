import React from 'react'
import { useState, useEffect } from 'react'


const Profil = () => {

    const [datas, setDatas] = useState([])


    const userId = localStorage.getItem('userId');

    useEffect(() => {
        fetch(`http://localhost:8080/users/${userId}`)
            .then((response) => response.json())
            .then((json) => setDatas(json))
    }, [])

    console.log(datas, "dataprofil")

    const handleLogout = () => {
        localStorage.clear();
        window.location = '/';
    }



    return (

        <div>

            <h1>Mon Profil</h1> <br/>
            <h3>Nom : {datas.nom}</h3>
            <h3>Prenom : {datas.prenom}</h3>
            <h3>Ville : {datas.adresse}</h3>
            <h3>Mail : {datas.email}</h3>
            <button onClick={handleLogout}>Se deconnecter</button>
        </div>


    )
}

export default Profil

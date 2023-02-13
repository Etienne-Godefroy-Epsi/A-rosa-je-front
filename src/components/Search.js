import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Search.css'
import axios from 'axios'

function Search() {
    const [datas, setDatas] = useState([])
    const [searchTerm, setSearchTerm] = useState([])
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        fetch('http://localhost:8080/users/gardien/disponible')
            .then((response) => response.json())
            .then((json) => setDatas(json))
    }, [])

    const handleSearchTerm = (e) => {
        let value = e.target.value
        setSearchTerm(value)
    }

    // const handleContrat = () => {
    
    //     axios
    //     .post(
    //         `http://localhost:8080/contrats/demande?idClient=3&idGardien=5`,
    //         {
    //             email,
    //             password,
    //         }
    //     )
    //     .then((res) => {
    //         console.log(res)
    //         if (res.data.errors) {
    //             emailError.innerHTML = res.data.errors.email
    //             passwordError.innerHTML = res.data.errors.password
    //         } else {
    //             localStorage.setItem('userId', res.data.id)
    //             window.location = '/'
    //         }
    //     })
    //     .catch((err) => {
    //         console.log('erreur signIN', err)
    //     })
    // }

    console.log(datas)

    

    return (
        <div>
            <div className="searchBar">
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Recherche ta ville"
                    onChange={handleSearchTerm}
                />
            </div>
            <div className="search__results">
                {datas
                    .filter((val) => {
                        return val.adresse.toLowerCase().includes(searchTerm)
                    })
                    .map((val) => {
                        return (
                            <div className="gardienDispo">
                                <div className="search__result" key={val.id}>
                                    <div> {val.id}</div>
                                    <div> {val.nom} </div>
                                    <div>{val.adresse} </div>
                                    {userId ? (
                                        
                                        <button>Demander un gardiennage</button>
                                    
                                    ) : null}
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Search

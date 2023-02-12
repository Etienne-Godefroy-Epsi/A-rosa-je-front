import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Search.css'

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

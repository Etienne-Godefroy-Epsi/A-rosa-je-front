import './styles/App.css'
import React from 'react'

const App = () => {
    const getLocation = () => {
        // Get the location from the user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError)
        } else {
            alert('Geolacation is not supported by this browser.')
        }
    }

    const showPosition = (position) => {
        const ifameData = document.getElementById('iframeId')
        let lat = position.coords.latitude
        let long = position.coords.longitude
        ifameData.src = `https://maps.google.com/maps?q=${lat},${long}&hl=es;&output=embed`
        console.log(lat, long, 'loc')
    }

    const showError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert('User denied the request for Geolocation.')
                break

            case error.PERMISSION_UNAVAILABLE:
                alert('Location information is unavailable.')
                break

            case error.TIMEOUT:
                alert('The request to get user location timed out.')
                break

            case error.UNKNOWN_ERROR:
                alert('An unknown error occured.')
                break

            default:
                alert('An unknown error occured.')
        }
    }

    return (
        <div className="App">
            <h1>Recherche ton gardien</h1>
            <button id="button" onClick={getLocation}>
                Get Location
            </button>

            <iframe id="iframeId" height="200px" width="100%"></iframe>

            <div className="date">
                <h2>Dates</h2>
                <div className="datededebut">
                    <label for="start">Start date:</label>

                    <input
                        type="date"
                        id="start"
                        name="trip-start"
                        min="2023-02-02"
                        max="2025-12-31"
                    ></input>
                </div>
                <div className="datedefin">
                    <label for="end">End date:</label>

                    <input
                        type="date"
                        id="end"
                        name="trip-end"
                        min="2023-02-03"
                        max="2025-12-31"
                    ></input>
                </div>
            </div>
            <div className="plantes">
                <h2>Vos plantes</h2>
                <label for="choix_bieres">Indiquez vos plantes à garder</label>
                <br />
                <input list="bieres" type="text" id="choix_bieres"></input>
                <datalist id="bieres">
                    <option value="menthe"></option>
                    <option value="cactus"></option>
                    <option value="fraisier"></option>
                    <option value="palmier"></option>
                </datalist>
            </div>
            <button>Rechercher</button>
        </div>
    )
}

export default App

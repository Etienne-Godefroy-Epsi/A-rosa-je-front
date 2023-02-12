import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import reportWebVitals from './reportWebVitals'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './components/Search'
import Log from './components/Log'
import Profil from './components/Profil'
import Contrats from './components/Contrats'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Search />} />
                <Route path="/search" element={<Search />} />
                <Route path="/Log" element={<Log />} />
                <Route path="/Profil" element={<Profil />} />
                <Route path="/Contrats" element={<Contrats />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

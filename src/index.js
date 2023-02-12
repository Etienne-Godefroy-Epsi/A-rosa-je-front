import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import NavBar from './components/NavBar'
import Gardiens from './Gardiens'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './components/Search'
import Log from './components/Log'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Search />} />
                <Route path="/search" element={<Search />} />
                <Route path="/Log" element={<Log />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import App from './App'
import About from './pages/about'
import Error from './pages/error'
import RentalPage from './pages/rentalPage'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="rental" element={<RentalPage />}>
                <Route path=":rentalId" element={<RentalPage />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)

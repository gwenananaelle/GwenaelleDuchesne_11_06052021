import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import About from './routes/about'
import Error from './routes/error'
import reportWebVitals from './reportWebVitals'
import RentalPage from './routes/rentalPage'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="rental" element={<RentalPage />}>
                <Route path=":rentalId" element={<RentalPage />} />
            </Route>
            {/* <Route path=":rentalId" element={<RentalPage />} /> */}
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

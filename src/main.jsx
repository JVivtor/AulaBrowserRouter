import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/Home'
import Oferta from './Oferta'
import Produto from '../src/Produto'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
<Route path="/" element={<Home />}/>
<Route path="/Oferta" element={<Oferta />}/>
<Route path="/produtos" element={<Produto/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)




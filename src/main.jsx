import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import NavBarMatriz from './NavBarMatriz'
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import Login from './Login'
import Ptar from './Ptar'
import Register from './Register'
import { BrowserRouter } from 'react-router-dom'
import MapaRiesgos from './MapaRiesgos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Login/>
  </BrowserRouter>    
  
)

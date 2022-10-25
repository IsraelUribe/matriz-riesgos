import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import NavBarMatriz from './NavBarMatriz'
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import Login from './Login'
import Ptar from './Ptar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

    <script
      src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
      crossorigin></script>

    <script
      src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossorigin></script>

    <script>var Alert = ReactBootstrap.Alert;</script>
    <Login/>
  </React.StrictMode>
)

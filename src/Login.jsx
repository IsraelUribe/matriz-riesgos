import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import NavBarMatriz from './NavBarMatriz';
import './App.css'
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from '../components/Input';
function Login(){
    return(
        <>
            <head>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
            </head>
            <div class="sidenav">
                <div class="login-main-text">
                    <h2>Bienvenido a<br/> la Matríz de Riesgos</h2>
                    <p>Login or register from here to access.</p>
                </div>
            </div>
            <div class="main">
                <div class="col-md-6 col-sm-12">
                    <div>
                    <form style={mystyle}>
                        <div class="form-group">
                            <label>Usuario</label>
                            <Input type="text" style={cajas} placeholder="abcdefghij@iteshu.edu.mx"/>
                        </div>
                        <div class="form-group">
                            <label>Cotraseña</label>
                            <Input type="password" placeholder="Password"/>
                        </div>
                        <div className='col-md-2'>
                       
                            <a  class="btn btn-primary float-right" href="/App">Login</a>
                           
                          
                            <button class="boton-registro">Register</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            
            <NavBarMatriz/>
            <BrowserRouter>
                <Routes>
                    <Route path="/App" element={<App></App>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
const mystyle={
    marginTop: '50px',
    color: 'black',
    width: '150px',
    alignVertical: 'center'
}

const cajas={
    width: '200px',
    background: 'white',
    borderColor: 'black',
    borderRadius: '10px',
    padding: '5px'

}

export default Login;
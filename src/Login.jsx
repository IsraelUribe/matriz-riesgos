import { useState } from "react";
import Button from 'react-bootstrap/Button';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';


function Login(){
    const [miLogin, setLogin] = useState('false');
    const [registro, setResgitro] = useState('false');
    function iniciarSesion(e){
        e.preventDefault();
        setLogin('true');
        document.getElementById("login").style.display = 'none';
    }
    function irRegistro(e){
        e.preventDefault();
        setResgitro('true');
        document.getElementById("login").style.display = 'none';
    }

    return(
        <>
        <head>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
        </head>
        <div id="login">
            <div className="sidenav">
                <div className="login-main-text">
                    <h2>Bienvenido a<br/> la Matríz de Administración de Riesgos Institucionales</h2>
                    <p>Instituto Tecnológico Superior de Huichapan</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div>
                    <form style={mystyle}>
                        <div className="form-group">
                            <label>Usuario</label>
                            <input type="text"  style={cajas} placeholder="abcdefghij@iteshu.edu.mx" required/>
                        </div>
                        <div className="form-group">
                            <label>Cotraseña</label>
                            <input type="password" style={cajas}placeholder="Password" required/>
                        </div>
                        <div className='columns-2'>
                            <Button  className="btn btn-primary float-right" onClick={iniciarSesion}>Login</Button>
                            <p></p>
                            <Button className="btn btn-primary float-left ml-12" onClick={irRegistro}>Register</Button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/App" element={<App></App>}/> 
                    <Route path="/Register" element={<Register></Register>}/>
                </Routes>
            </BrowserRouter> */} 
            </div>
            {miLogin === 'true' && <App/>}
            {registro === 'true' && <Register/>}
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
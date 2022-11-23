import React from 'react'
import './register.css'
import { Input } from "../components/Input"
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Login from './Login';

function Register(){
	const [login, setLogin] = useState('false');
	function irLogin(e){
        e.preventDefault();
        setLogin('true');
        document.getElementById("registro").style.display = 'none';
    }
    return(
        <>
		    <head>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
            </head>
            <div id="registro" className="container">
			<div className="row main">
				<div className="panel-heading">
	               <div className="panel-title text-center">
	               		<h1 className="title">ITESHU</h1>
	               		<hr />
	               	</div>
	            </div> 
				<div className="main-login main-center">
					<form className="form-horizontal" method="post" action="#">
						
						<div className="form-group">
							<label for="name" className="cols-sm-2 control-label">Nombre</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="name" id="name"  placeholder="Enter your Name"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="email" className="cols-sm-2 control-label">Email</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="email" id="email"  placeholder="abcdefg@iteshu.edu,mx"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="username" className="cols-sm-2 control-label">Nombre de usuario</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="username" id="username"  placeholder="Enter your Username"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="password" className="cols-sm-2 control-label">Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="confirm" className="cols-sm-2 control-label">Confirmar Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="confirm" id="confirm"  placeholder="Confirm your Password"/>
								</div>
							</div>
						</div>

						<div className="form-group ">
							<button type="button" className="btn btn-primary btn-lg btn-block login-button">Registrar</button>
						</div>
						<div className="login-register">
				            <Button onClick={irLogin} className="btn btn-primary float-left ml-12">Iniciar sesión</Button>
				         </div>
					</form>
				</div>
			</div>
		</div>
		{login === 'true' && <Login/>}
		<script type="text/javascript" src="assets/js/bootstrap.js"></script>
        </>
    )
}

export default Register;
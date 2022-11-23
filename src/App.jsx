import React from 'react'
import { useState } from 'react';
import './App.css'
import {Link, Routes, Route } from "react-router-dom";
import {Navbar, Nav, Container} from 'react-bootstrap';
import Ptar from './Ptar';
import Avance from './Avance';
import MapaRiesgos from './MapaRiesgos';
import './index.css'
import MatrizRiesgos from './MatrizRiesgos';

function App() {
  const [matrizR, setMatrizR] = useState('');
  const [mapa, setMapa] = useState('');
  const [ptar, setPtar] = useState('');
  const [avance, setAvance] = useState('');
  function linkMatriz(e){
    e.preventDefault();
    setMatrizR('1');
    setMapa('0');
    setPtar('0');
    setAvance('0');
    document.getElementById('matriz').style.display = 'none';
  }
  function linkMapaRiesgos(e){
    e.preventDefault();
    setMatrizR('0');
    setMapa('1');
    setPtar('0');
    setAvance('0');
    document.getElementById('matriz').style.display = 'none';
  }

  function linkPtar(e){
    e.preventDefault();
    setMatrizR('0');
    setMapa('0');
    setPtar('1');
    setAvance('0');
    document.getElementById('matriz').style.display = 'none';
  }

  function linkAvance(e){
    e.preventDefault();
    setMatrizR('0');
    setMapa('0');
    setPtar('0');
    setAvance('1');
    document.getElementById('matriz').style.display = 'none';
  }

  return (
    <>  
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/public/favicon.ico"></link>
        <tittle>Matríz de Administración de Riesgos Institucional</tittle>
      </head>  
        <Navbar expand='lg' bg="primary" variant="dark" fixed="top" >
          <Container>
          <Navbar.Brand>
            <img src="./src/assets/iteshu.png"
              width="full"
              height="full"
              className="d-inline-block align-top"
              alt='ITESHU'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link onClick={linkMatriz}>Matríz de Riesgos</Nav.Link>
                  <Nav.Link onClick={linkMapaRiesgos}>Mapa de Riesgos</Nav.Link>
                  <Nav.Link onClick={linkPtar}>PTAR</Nav.Link>
                  <Nav.Link onClick={linkAvance}>Avance</Nav.Link>
                </Nav>
                <Nav>   
                  <Nav.Link >Cerrar sesión</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>

      <div id="matriz" className="bg-white">
        {/* <MatrizRiesgos/>  */}
        <h1>Bienvenido</h1>
      </div>
      {matrizR === '1' && <MatrizRiesgos/>}
      {mapa === '1' && <MapaRiesgos/>}
      {ptar === '1' && <Ptar/>}
      {avance === '1' && <Avance/>}
        <Routes>
          <Route path="/MatrizRiesgos" element={<MatrizRiesgos/>}/>
          <Route path="/MapaRiesgos" element={<MapaRiesgos></MapaRiesgos>}/>
          <Route path="/Ptar" element={<Ptar></Ptar>}/>
          <Route path="/Avance" element={<Avance></Avance>}/>
        </Routes>

  </>
  )
}

export default App

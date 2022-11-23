import React from 'react'
import './App.css'
import './index.css'
import './Ptar.css'
import { Input } from "../components/Input"

function Ptar(){
    return(
        <>
            <head>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
            </head>
            <div className="Ptar">
                <h1>Ptar</h1>
                <div className="row clearfix">
                    <div className="col-md-12 table-responsive">
                        <table className="table table-bordered table-hover table-sortable" >
                            <thead>
                                <tr>
                                    <th>No. Riesgo</th>
                                    <th>Descripción del Riesgo</th>
                                    <th>Clasificación del Riesgo</th>
                                    <th>Valor del impacto</th>
                                    <th>Valor de Probabilidad</th>
                                    <th>Cuadrante</th>
                                    <th>Estrategia</th>
                                    <th>No. Factor de Riesgo</th>
                                    <th>Factor de Riesgo</th>
                                    <th>Desripción de la Acción de control</th>
                                    <th>Unidad Administrativa</th>
                                    <th>Responsable</th>
                                    <th>Fecha de inicio</th>
                                    <th>Fecha de Término</th>
                                    <th>Medios de Verificación</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Input type="text" placeholder="No.Riesgo"></Input>
                                    </td>
                                    <td>
                                        <Input type="text" placeholder="De"></Input>
                                    </td>
                                    <td>
                                        <Input type="text" placeholder="No.Riesgo"></Input>
                                    </td>
                                    <td>
                                        <Input type="text" placeholder="No.Riesgo"></Input>
                                    </td>
                                    <td>
                                        <Input type="text" placeholder="No.Riesgo"></Input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ptar
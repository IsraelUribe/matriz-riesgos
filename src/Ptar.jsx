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
                <div className="row clearfix">
                    <div className="col-md-12 table-responsive">
                        <table className="table table-bordered table-hover table-sortable" >
                            <thead>
                                <tr>
                                    <td>No. Riesgo</td>
                                    <td>Descripción del Riesgo</td>
                                    <td>Clasificación del Riesgo</td>
                                    <td>Valor del impacto</td>
                                    <td>Valor de Probabilidad</td>
                                    <td>Cuadrante</td>
                                    <td>Estrategia</td>
                                    <td>No. Factor de Riesgo</td>
                                    <td>Factor de Riesgo</td>
                                    <td>Desripción de la Acción de control</td>
                                    <td>Unidad Administrativa</td>
                                    <td>Responsable</td>
                                    <td>Fecha de inicio</td>
                                    <td>Fecha de Término</td>
                                    <td>Medios de Verificación</td>
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
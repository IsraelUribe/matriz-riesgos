import React from 'react'
import './App.css'
import './index.css'
import { Input } from "../components/Input"
function MapaRiesgos(){
    return(
        <>
            <head>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
            </head>
            <div className="MapaRiesgos">
                <h1>Mapa de Riesgos</h1>
                <div className="row clearfix">
                    <div className="col-md-12 table-responsive">
                        <table className="table table-bordered table-hover table-sortable" >
                            <thead>
                                <tr>
                                    <th rowSpan="3">No. de Riesgo</th>
                                    <th rowSpan="3">Riesgo</th>
                                    <th rowSpan="3">Clasificación del Riesgo</th>
                                    <th colSpan="2">III. VALORACIÓN DE RISGOS VS.CONTROLES</th>
                                </tr>
                                <tr> 
                                    <th colSpan="2">Valoración final</th>
                                </tr>
                                <tr>
                                    <th>Grado de impacto</th>
                                    <th>Probabilidad de Ocurencia</th>
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

export default MapaRiesgos;
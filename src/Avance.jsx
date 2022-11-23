import React from 'react'
import './App.css'
import './index.css'
import { Input } from "../components/Input"

function Avance(){
    return(
        <>
            <head>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
            </head>
            <div className="Avance">
                <h1 className='mt-6 mb-4 text-3xl xl:text-4xl font-bold text-gray-800'>Avance</h1>
                <div className="row clearfix">
                    <div className="col-md-12 table-responsive">
                        <table className="table table-bordered table-hover table-sortable" >
                            <thead>
                                <tr>
                                    <th>No. Riesgo</th>
                                    <th>Descripción del Riesgo</th>
                                    <th>Clasificación del Riesgo</th>
                                    <th>No. Factor de Riesgo</th>
                                    <th>Factor de Riesgo</th>
                                    <th>Descripción de la acción de Control</th>
                                    <th>Unidad Administrativa</th>
                                    <th>Responsable</th>
                                    <th>Fecha de inicio</th>
                                    <th>Fecha de termino</th>
                                    <th>Medios de Verificación</th>
                                    <th>1er. Trimestre</th>
                                    <th>2do. Trimestre</th>
                                    <th>3er. Trimestre</th>
                                    <th>4to. Trimestre</th>
                                    <th>Avance Acumulado</th>
                                    <th> Actividades realizadas</th>
                                    <th>Descripción</th>
                                    <th>Unidad de Medida</th>
                                    <th>Meta Absoluta (Anual)</th>
                                    <th>Meta Alcanzada</th>
                                    <th>Porcentaje de cumplimiento</th>
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

export default Avance
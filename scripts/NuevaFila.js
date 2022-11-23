function NuevaFila(){
    var tabla = document.getElementById("tabla-mr")
    var fila = document.getElementById('filaRegistro').cloneNode(true)
    var tr = document.createElement("tr");
    
    tr.appendChild(fila);
    tabla.appendChild(tr);

}

export default NuevaFila
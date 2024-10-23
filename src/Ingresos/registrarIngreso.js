function anadirIngreso(ingreso){
    return ingreso;
}

function anadirFecha(fecha){
    const formatoFecha = /^\d{2}\/\d{2}\/\d{2}$/;  

    if (formatoFecha.test(fecha)) {
        return fecha;
}
}

export {anadirIngreso, anadirFecha};
class RegistroIngreso {

    constructor(ingreso, fecha, descripcion){
        this.ingreso = 0
        this.fecha = ""
        this.descripcion = ""
    }

    anadirIngreso(ingreso) {
        this.ingreso=ingreso
        return this.ingreso; 
    }

    anadirFecha(fecha) {
        const formatoFecha = /^\d{2}\/\d{2}\/\d{2}$/;  

        if (formatoFecha.test(fecha)) {
            this.fecha = fecha;  
            return this.fecha;   
        } else {
            throw new Error("Formato de fecha inválido. Usa 'dd/mm/yy'.");
        }
    }
}

export default RegistroIngreso;




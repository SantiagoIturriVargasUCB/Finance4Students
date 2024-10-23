class RegistroIngreso {

    constructor(monto = 0, fecha = "", descripcion = "") {
        this.monto = monto;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }

    anadirMonto(monto) {
        this.monto=monto
        return this.monto; 
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

    anadirDescripcion(descripcion) {
        if (!descripcion || descripcion.trim() === "") {
            throw new Error("La descripción no puede estar vacía.");
        }
        this.descripcion = descripcion; 
        return this.descripcion; 
    }

    anadirIngreso(monto, fecha, descripcion) {
        if (typeof monto !== 'number' || monto <= 0) {
            throw new Error("El monto debe ser un número positivo");
        }

        const formatoFecha = /^\d{2}\/\d{2}\/\d{2}$/;
        if (!formatoFecha.test(fecha)) {
            throw new Error("La fecha debe tener el formato dd/mm/aa");
        }

        if (typeof descripcion !== 'string' || descripcion.trim() === "") {
            throw new Error("La descripción no puede estar vacía");
        }

        this.anadirMonto(monto);
        this.anadirFecha(fecha);
        this.anadirDescripcion(descripcion);

        return { monto: this.monto, fecha: this.fecha, descripcion: this.descripcion };
    }
}


export default RegistroIngreso;




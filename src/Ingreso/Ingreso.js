export class Ingreso {

    constructor(monto = 0, fecha = "", descripcion = "") {
        this.monto = monto;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.totalIngresos= 0;
        this.historialIngresos = [];
    }

    anadirMonto(monto) {
        if (monto <= 0) {
            return { message: "El monto debe ser un número positivo." };
        }
        this.monto=monto
        return this.monto; 
    }

    anadirFecha(fecha) {
        if (!fecha) {
            return { message: "La fecha no puede estar vacía." };
        }
        this.fecha = fecha; 
        return this.fecha; 
    }

    anadirDescripcion(descripcion) {
        if (!descripcion) {
            return { message: "La descripción no puede estar vacía." };
        }
        this.descripcion = descripcion; 
        return this.descripcion;
    }

    anadirIngreso(monto, fecha, descripcion) {
        if (monto <= 0) {
            return { message: "El monto debe ser un número positivo" };
        }

        if (!fecha) {
            return { message: "La fecha no puede estar vacía" };
        }

        if (!descripcion) {
            return { message: "La descripción no puede estar vacía" };
        }   
        this.monto = monto;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.totalIngresos += monto;

        this.historialIngresos.push({
            monto: this.monto,
            fecha: this.fecha,
            descripcion: this.descripcion
        });

        return {monto: this.monto, fecha: this.fecha, descripcion: this.descripcion};
    }

    getTotalIngresos(){
        return this.totalIngresos
    }

    getHistorialIngresos() {
        return this.historialIngresos; 
    }


}






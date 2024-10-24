class RegistroIngreso {

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
const amount = document.querySelector("#monto");
const date = document.querySelector("#fecha");
const description = document.querySelector("#descripcion");
const form = document.querySelector("#ingreso-form");
const div = document.querySelector("#ingreso-div");
const historialButton = document.querySelector("#ver-historial");
const historialLista = document.querySelector("#historial-lista");

const registro = new RegistroIngreso();

const historial = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const monto = Number(amount.value);  
    const fecha = date.value;
    const descripcion = description.value;

    const nuevoIngreso = registro.anadirIngreso(monto, fecha, descripcion);

    historial.push(nuevoIngreso);

    div.innerHTML = `
        <p><strong>Monto:</strong> ${nuevoIngreso.monto}</p>
        <p><strong>Fecha:</strong> ${nuevoIngreso.fecha}</p>
        <p><strong>Descripción:</strong> ${nuevoIngreso.descripcion}</p>
    `;
    // div.innerHTML = "<p>Monto: " + nuevoIngreso.monto + " - Fecha: " + nuevoIngreso.fecha + " - Descripción: " + nuevoIngreso.descripcion + "</p>";

});

    historialButton.addEventListener("click", () => {
        historialLista.innerHTML = "";

        historial.forEach((ingreso, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <p><strong>Ingreso ${index + 1}:</strong></p>
                <p><strong>Monto:</strong> ${ingreso.monto}</p>
                <p><strong>Fecha:</strong> ${ingreso.fecha}</p>
                <p><strong>Descripción:</strong> ${ingreso.descripcion}</p>
            `;
            historialLista.appendChild(listItem);
        });

});



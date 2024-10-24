class Ingreso {

    constructor(monto = 0, fecha = "", descripcion = "") {
        this.monto = monto;
        this.fecha = fecha;
        this.descripcion = descripcion;

        this.totalIngresos = JSON.parse(localStorage.getItem('totalIngresos')) || 0;
        this.historialIngresos = JSON.parse(localStorage.getItem('historialIngresos')) || [];
    }

    anadirMonto(monto) {
        if (monto <= 0) return { message: "El monto debe ser un número positivo." };
    
        this.monto = monto;
        return this.monto;
    }

    anadirFecha(fecha) {
        if (!fecha) return { message: "La fecha no puede estar vacía." };
        
        this.fecha = fecha;
        return this.fecha;
    }

    anadirDescripcion(descripcion) {
        if (!descripcion) return { message: "La descripción no puede estar vacía." };

        this.descripcion = descripcion;
        return this.descripcion;
    }

    anadirIngreso(monto, fecha, descripcion) {
        if (monto <= 0) return { message: "El monto debe ser un número positivo" };

        if (!fecha) return { message: "La fecha no puede estar vacía" };

        if (!descripcion) return { message: "La descripción no puede estar vacía" };
        

        this.monto = monto;
        this.fecha = fecha;
        this.descripcion = descripcion;

        this.totalIngresos += monto;
        this.historialIngresos.push({ monto: this.monto, fecha: this.fecha, descripcion: this.descripcion });

        localStorage.setItem('totalIngresos', JSON.stringify(this.totalIngresos));
        localStorage.setItem('historialIngresos', JSON.stringify(this.historialIngresos));

        return { monto: this.monto, fecha: this.fecha, descripcion: this.descripcion };
    }

    getTotalIngresos() {
        return this.totalIngresos;
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
const totalIngresosSpan = document.querySelector("#total-ingresos-valor");

const registro = new Ingreso();

function actualizarTotalIngresos() {
  const totalIngresos = registro.getTotalIngresos();
  totalIngresosSpan.textContent = totalIngresos.toFixed(2);  
}

document.addEventListener("DOMContentLoaded", actualizarTotalIngresos);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const monto = Number(amount.value);
  const fecha = date.value;
  const descripcion = description.value;

  const nuevoIngreso = registro.anadirIngreso(monto, fecha, descripcion);

  div.innerHTML = `
    <p><strong>Monto:</strong> Bs. ${nuevoIngreso.monto}</p>
    <p><strong>Fecha:</strong> ${nuevoIngreso.fecha}</p>
    <p><strong>Descripción:</strong> ${nuevoIngreso.descripcion}</p>
  `;

  actualizarTotalIngresos();

  form.reset();
});

historialButton.addEventListener("click", () => {
  historialLista.innerHTML = "";

  const historialIngresos = registro.getHistorialIngresos();

  historialIngresos.forEach((ingreso, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <p><strong>Ingreso ${index + 1}:</strong></p>
      <p><strong>Monto:</strong> Bs. ${ingreso.monto}</p>
      <p><strong>Fecha:</strong> ${ingreso.fecha}</p>
      <p><strong>Descripción:</strong> ${ingreso.descripcion}</p>
    `;
    historialLista.appendChild(listItem);
  });
});
import RegistroIngreso from "./registrarIngreso";

const amount = document.querySelector("#monto");
const date = document.querySelector("#fecha");
const description = document.querySelector("#descripcion");
const form = document.querySelector("#ingreso-form");
const div = document.querySelector("#ingreso-div");

const registro = new RegistroIngreso();

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const monto = Number(amount.value);  
    const fecha = date.value;
    const descripcion = description.value;

    const nuevoIngreso = registro.anadirIngreso(monto, fecha, descripcion);

    // Solo mostramos los valores directamente
    div.innerHTML = "<p>Monto: " + nuevoIngreso.monto + " - Fecha: " + nuevoIngreso.fecha + " - Descripción: " + nuevoIngreso.descripcion + "</p>";
});

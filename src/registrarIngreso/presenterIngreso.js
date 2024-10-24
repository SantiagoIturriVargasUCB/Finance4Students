import RegistroIngreso from "./registrarIngreso";

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



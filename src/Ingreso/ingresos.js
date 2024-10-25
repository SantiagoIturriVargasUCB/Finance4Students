import { Ingreso } from "./Ingreso.js";

const fechaInput = document.querySelector("#fecha");
const descripcionInput = document.querySelector("#descripcion");
const montoInput = document.querySelector("#monto");
const form = document.querySelector("#ingreso-form");
const resultadoDiv = document.querySelector("#ingreso-div");
const mostrarIngresosButton = document.querySelector("#ver-historial");
const listaIngresosDiv = document.querySelector("#historial-lista");
const totalIngresosSpan = document.querySelector("#total-ingresos-valor");

// Cargar el historial de ingresos desde LocalStorage
const historialIngresos = JSON.parse(localStorage.getItem('historialIngresos')) || [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fecha = fechaInput.value;
  const descripcion = descripcionInput.value;
  const monto = Number.parseFloat(montoInput.value);

  if (isNaN(monto) || monto <= 0) {
    alert("Por favor, introduce un monto válido.");
    return;
  }

  const nuevoIngreso = new Ingreso(fecha, descripcion, monto);
  const ingresoRegistrado = nuevoIngreso.registrarIngreso();

  // Guardar el nuevo ingreso en LocalStorage y actualizar el saldo
  historialIngresos.push(ingresoRegistrado);
  localStorage.setItem('historialIngresos', JSON.stringify(historialIngresos));

  resultadoDiv.innerHTML = `
    <p>Último ingreso registrado:</p>
    <p>Fecha: ${ingresoRegistrado.fecha}</p>
    <p>Descripción: ${ingresoRegistrado.descripcion}</p>
    <p>Monto: ${ingresoRegistrado.monto}</p>
  `;

  form.reset();
});

mostrarIngresosButton.addEventListener("click", () => {
  listaIngresosDiv.innerHTML = "";

  if (historialIngresos.length === 0) {
    listaIngresosDiv.innerHTML = "<p>No hay ingresos registrados.</p>";
    return;
  }

  let listaHTML = "<h3>Lista de Todos los Ingresos Registrados:</h3><ul>";

  historialIngresos.forEach((ingreso) => {
    listaHTML += `
      <li>
          Fecha: ${ingreso.fecha}, Descripción: ${ingreso.descripcion}, Monto: ${ingreso.monto}
      </li>
    `;
  });

  listaHTML += "</ul>";
  const ingresoTotal = Ingreso.devolverIngresoTotal();

  listaHTML += `
    <div style="margin-top: 20px; font-weight: bold;">
      <h3>Ingreso Total: Bs. ${ingresoTotal}</h3>
    </div>
  `;

  listaIngresosDiv.innerHTML = listaHTML;
});

import { Gasto } from "./Gasto.js";

const fechaInput = document.querySelector("#fecha");
const descripcionInput = document.querySelector("#descripcion");
const montoInput = document.querySelector("#monto");
const form = document.querySelector("#registro-gasto-form");
const resultadoDiv = document.querySelector("#resultado-div");
const mostrarGastosButton = document.querySelector("#mostrar-gastos-button");
const listaGastosDiv = document.querySelector("#lista-gastos-div");

// Cargar el historial de gastos desde LocalStorage
const historialGastos = JSON.parse(localStorage.getItem('gastos')) || [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fecha = fechaInput.value;
  const descripcion = descripcionInput.value;
  const monto = Number.parseFloat(montoInput.value);

  if (isNaN(monto) || monto <= 0) {
    alert("Por favor, introduce un monto válido.");
    return;
  }

  const nuevoGasto = new Gasto(fecha, descripcion, monto);
  const gastoRegistrado = nuevoGasto.registrarGasto();

  // Guardar el nuevo gasto en LocalStorage y actualizar el saldo
  historialGastos.push(gastoRegistrado);
  localStorage.setItem('gastos', JSON.stringify(historialGastos));

  resultadoDiv.innerHTML = `
    <p>Último gasto registrado:</p>
    <p>Fecha: ${gastoRegistrado.fecha}</p>
    <p>Descripción: ${gastoRegistrado.descripcion}</p>
    <p>Monto: ${gastoRegistrado.monto}</p>
  `;

  form.reset();
});

mostrarGastosButton.addEventListener("click", () => {
  listaGastosDiv.innerHTML = "";

  if (historialGastos.length === 0) {
    listaGastosDiv.innerHTML = "<p>No hay gastos registrados.</p>";
    return;
  }

  let listaHTML = "<h3>Lista de Todos los Gastos Registrados:</h3><ul>";

  historialGastos.forEach((gasto) => {
    listaHTML += `
        <li>
            Fecha: ${gasto.fecha}, Descripción: ${gasto.descripcion}, Monto: ${gasto.monto}
        </li>
    `;
  });

  listaHTML += "</ul>";
  const gastoTotal = Gasto.devolverGastoTotal();

  listaHTML += `
    <div style="margin-top: 20px; font-weight: bold;">
      <h3>Gasto Total: Bs. ${gastoTotal}</h3>
    </div>
  `;

  listaGastosDiv.innerHTML = listaHTML;
});

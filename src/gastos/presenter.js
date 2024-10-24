import { Gasto } from "./gastos.js";

const fechaInput = document.querySelector("#fecha");
const descripcionInput = document.querySelector("#descripcion");
const montoInput = document.querySelector("#monto");
const form = document.querySelector("#registro-gasto-form");
const resultadoDiv = document.querySelector("#resultado-div");
const mostrarGastosButton = document.querySelector("#mostrar-gastos-button");
const listaGastosDiv = document.querySelector("#lista-gastos-div");

// Evento para registrar un gasto
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

  resultadoDiv.innerHTML = `
    <p>Último gasto registrado:</p>
    <p>Fecha: ${gastoRegistrado.fecha}</p>
    <p>Descripción: ${gastoRegistrado.descripcion}</p>
    <p>Monto: ${gastoRegistrado.monto}</p>
  `;
});

mostrarGastosButton.addEventListener("click", () => {
  console.log("Botón mostrar gastos clickeado");
  const gastos = Gasto.obtenerGastos();
  console.log("Gastos obtenidos:", gastos);

  if (gastos.length === 0) {
      listaGastosDiv.innerHTML = "<p>No hay gastos registrados.</p>";
      return;
  }

  let listaHTML = "<h3>Lista de Todos los Gastos Registrados:</h3><ul>";

  gastos.forEach((gasto) => {
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

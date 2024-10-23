import Gasto from "/src/gastos/gastos.js";  


const fechaInput = document.querySelector("#fecha");
const descripcionInput = document.querySelector("#descripcion");
const montoInput = document.querySelector("#monto");
const form = document.querySelector("#registro-gasto-form");
const resultadoDiv = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fecha = fechaInput.value;
  const descripcion = descripcionInput.value;
  const monto = Number.parseFloat(montoInput.value);


  const nuevoGasto = new Gasto(fecha, descripcion, monto);

  const gastoRegistrado = nuevoGasto.registrarGasto();

  resultadoDiv.innerHTML = `
    <p>Fecha: ${gastoRegistrado.fecha}</p>
    <p>Descripción: ${gastoRegistrado.descripcion}</p>
    <p>Monto: ${gastoRegistrado.monto}</p>
  `;
});

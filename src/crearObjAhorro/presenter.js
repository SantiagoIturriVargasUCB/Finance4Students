import { Objetivo } from "./objAhorro.js";

const objetivoManager = new Objetivo();

const form = document.querySelector("#obj-form");
const nameInput = document.querySelector("#objName");
const mountInput = document.querySelector("#objMount");
const dateInput = document.querySelector("#objDate");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();


  const objName = nameInput.value;
  const objMount = mountInput.value;
  const objDate = dateInput.value;

  const nuevoObjetivo = objetivoManager.crearObjetivo(objName, objMount, objDate);

  div.innerHTML = "<p> Nombre del Objetivo: " + nuevoObjetivo.objName + " - Monto: " + nuevoObjetivo.mount + " - Fecha: " + nuevoObjetivo.date + "</p>";
});
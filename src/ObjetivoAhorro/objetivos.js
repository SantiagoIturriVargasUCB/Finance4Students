class ObjetivoAhorro{
  constructor() {
      this.objs = []
  }

  crearObjetivo(objName = "Vacaciones", mount = 1000, date = "01/11/2025") {
      // Verifica si el primer parámetro es un objeto, en cuyo caso lo desestructura
      let newObj;
      if (typeof objName === 'object') newObj = objName;
      else {
      newObj = {
          objName: objName,
          mount: mount,
          date: date
      };
      }

      this.objs.push(newObj);
      return newObj;
  }   

  showObj(){
      return this.objs;
  }
}


const objetivoManager = new ObjetivoAhorro();

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
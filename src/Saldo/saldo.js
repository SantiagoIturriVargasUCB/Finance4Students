import { Gasto } from "../Gasto/Gasto";
import { Ingreso } from "../Ingreso/ingreso";




const registroIngresos = new Ingreso();
const totalIngresos = registroIngresos.getTotalIngresos();

const totalGastos = Gasto.devolverGastoTotal();

const saldoTotalDisponible = totalIngresos - totalGastos;

const saldoDiv = document.querySelector("#saldo-total");

saldoDiv.innerHTML = `<h2>Saldo Total Disponible: Bs. ${saldoTotalDisponible}</h2>`;

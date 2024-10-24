import { Gasto } from "../gastos/gastos";
import RegistroIngreso from "../registrarIngreso/registrarIngreso";



const registroIngresos = new RegistroIngreso();
const totalIngresos = registroIngresos.getTotalIngresos();

const totalGastos = Gasto.devolverGastoTotal();

const saldoTotalDisponible = totalIngresos - totalGastos;

const saldoDiv = document.querySelector("#saldo-total");

saldoDiv.innerHTML = `<h2>Saldo Total Disponible: Bs. ${saldoTotalDisponible}</h2>`;

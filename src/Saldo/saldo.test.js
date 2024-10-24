import { Ingreso } from "../Ingreso/Ingreso.js";
import { Gasto } from "../Gasto/Gasto.js";

// Mock manual de localStorage
const localStorageMock = (function() {
    let store = {};

    return {
        getItem(key) {
            return store[key] ? JSON.parse(store[key]) : null;
        },
        setItem(key, value) {
            store[key] = JSON.stringify(value);
        },
        removeItem(key) {
            delete store[key];
        },
        clear() {
            store = {};
        }
    };
})();

global.localStorage = localStorageMock;

// Función para calcular y mostrar el saldo total disponible
function cargarSaldoTotal() {
    // Obtener ingresos y gastos desde LocalStorage
    const ingresos = JSON.parse(localStorage.getItem('historialIngresos')) || [];
    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];

    // Calcular el total de ingresos sumando los montos
    const totalIngresos = ingresos.reduce((total, ingreso) => total + parseFloat(ingreso.monto), 0);

    // Calcular el total de gastos sumando los montos
    const totalGastos = gastos.reduce((total, gasto) => total + parseFloat(gasto.monto), 0);

    // Calcular el saldo total disponible
    const saldoTotalDisponible = totalIngresos - totalGastos;

    // Mostrar el saldo en la página
    const saldoDiv = document.querySelector("#saldo-total");
    saldoDiv.innerHTML = `<h2>Saldo Total Disponible: Bs. ${saldoTotalDisponible.toFixed(2)}</h2>`;
}

// Tests
describe("Cálculo de Saldo Total Disponible", () => {
  beforeEach(() => {
    // Limpiar el mock de localStorage y configurar el DOM antes de cada prueba
    localStorage.clear();
    document.body.innerHTML = '<div id="saldo-total"></div>';
  });

  it("debería calcular el saldo total cuando no hay ingresos ni gastos", () => {
    cargarSaldoTotal();
    expect(document.querySelector("#saldo-total").innerHTML).toBe("<h2>Saldo Total Disponible: Bs. 0.00</h2>");
  });

  it("debería calcular el saldo correctamente con ingresos y gastos", () => {
    const ingreso1 = new Ingreso(1000, "2024-01-01", "Salario");
    const gasto1 = new Gasto("2024-01-02", "Compra", 200);

    // Registrar los ingresos y gastos
    ingreso1.anadirIngreso(1000, "2024-01-01", "Salario");
    gasto1.registrarGasto();

    // Ejecutar la función que calcula el saldo
    cargarSaldoTotal();

    // Comprobar que el saldo total es correcto
    expect(document.querySelector("#saldo-total").innerHTML).toBe("<h2>Saldo Total Disponible: Bs. 800.00</h2>");
  });
});

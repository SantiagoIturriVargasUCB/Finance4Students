import { Gasto } from "../Gasto/Gasto.js";
import { Ingreso } from "../Ingreso/ingreso.js";

describe("Cálculo de Saldo Total Disponible", () => {
  beforeEach(() => {
    // localStorage.clear();
  });

  it("debería calcular el saldo total cuando no hay ingresos ni gastos", () => {
    document.body.innerHTML = '<div id="saldo-total"></div>';
    cargarSaldoTotal();
    expect(document.querySelector("#saldo-total").innerHTML).toBe("<h2>Saldo Total Disponible: Bs. 0.00</h2>");
  });

  it("debería calcular el saldo correctamente con ingresos y gastos", () => {
    const ingreso1 = new Ingreso(1000, "2024-01-01", "Salario");
    const gasto1 = new Gasto("2024-01-02", "Compra", 200);
    ingreso1.anadirIngreso(1000, "2024-01-01", "Salario");
    gasto1.registrarGasto();

    document.body.innerHTML = '<div id="saldo-total"></div>';
    cargarSaldoTotal();
    expect(document.querySelector("#saldo-total").innerHTML).toBe("<h2>Saldo Total Disponible: Bs. 800.00</h2>");
  });
});

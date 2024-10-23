import Gasto from "./gastos.js";

describe("Registro de Gastos", () => {
  it("deberia devolver el monto 100", () => {
    const gasto = new Gasto("25/11/2023", "Compra comida", 100);
    expect(gasto.monto).toEqual(100);
  });

  it("deberia devolver la fecha, descripcion y monto adecuados", () => {
    const gasto = new Gasto("25/11/2023", "Compra comida", 100);
    expect(gasto.registrarGasto()).toEqual({'fecha': "25/11/2023", 'descripcion': "Compra comida", 'monto': 100});
  });
});

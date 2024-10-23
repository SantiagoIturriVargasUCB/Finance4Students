import Gasto from "./gastos.js";

describe("Registro de Gastos", () => {
  it("deberia devolver el monto 100", () => {
    const gasto = new Gasto("25/11/2023", "Compra comida", 100);
    expect(gasto.monto).toEqual(100);
  });

  it("deberia devolver la fecha 31/01/2020", () => {
    const gasto = new Gasto("31/01/2020", "Compra libros", 300);
    expect(gasto.fecha).toEqual("31/01/2020");
  });

  it("deberia devolver la fecha, descripcion y monto adecuados", () => {
    let fecha = "25/11/2023";
    let desc = "Compra comida";
    let monto = 100;
    const gasto = new Gasto(fecha, desc, monto);
    expect(gasto.registrarGasto()).toEqual({
      'fecha': "25/11/2023", 
      'descripcion': "Compra comida", 
      'monto': 100});
  });

  it("debería devolver una fecha distinta", () => {
    let fecha = "01/01/2024";
    let desc = "Compra bebida";
    let monto = 50;
    const gasto = new Gasto(fecha, desc, monto);
    expect(gasto.registrarGasto()).toEqual({
      'fecha': "01/01/2024", 
      'descripcion': "Compra bebida", 
      'monto': 50
    });
  });
});

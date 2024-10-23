import registrarGasto from "./gastos.js";

describe("Registro de Gastos", () => {
  it("deberia devolver el monto 100", () => {
    expect(registrarGasto("25/11/2023", "Compra comida", 100).monto).toEqual(100);
  });

  it("deberia devolver la fecha, descripcion y monto adecuados", () => {
    expect(registrarGasto("25/11/2023", "Compra comida", 100)).toEqual({'fecha': "25/11/2023", 'descripcion': "Compra comida", 'monto': 100});
  });
});


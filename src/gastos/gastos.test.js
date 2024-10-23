import registrarGasto from "./gastos.js";

describe("Registro de Gastos", () => {
  it("deberia devolver el gasto de 100", () => {
    expect(registrarGasto(100)).toEqual(100);
  });
  it("Deberia devolver el valor que sea ingresado", () => {
    expect(registrarGasto(50)).toEqual(50);
  });

  
});


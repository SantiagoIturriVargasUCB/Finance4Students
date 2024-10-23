import registrarGasto from "./gastos.js";

describe("Gasto de 100", () => {
  it("deberia devolver el gasto de 100", () => {
    expect(registrarGasto()).toEqual(100);
  });
});

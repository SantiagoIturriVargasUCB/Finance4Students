import anadirIngreso from "././registrarIngreso.js";

describe("Ingreso", () => {
    it("Se debe añadir un ingreso", () => {
    expect(anadirIngreso(50)).toEqual(50);
});
});

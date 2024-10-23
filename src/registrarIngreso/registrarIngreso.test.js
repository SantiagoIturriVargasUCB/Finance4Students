import RegistroIngreso from "./registrarIngreso";

describe("Ingresos", () => {
    it("Se debe añadir un ingreso", () => {
        let ingreso = new RegistroIngreso()
    expect(ingreso.anadirIngreso(60)).toEqual(60);
});

});

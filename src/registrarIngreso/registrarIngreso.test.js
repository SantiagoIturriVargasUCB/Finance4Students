import RegistroIngreso from "./registrarIngreso";

describe("Ingresos", () => {
    it("Se debe añadir un ingreso", () => {
        let ingreso = new RegistroIngreso()
    expect(ingreso.anadirIngreso(60)).toEqual(60);
});


it("Se debe añadir una fecha", () => {
    let ingreso = new RegistroIngreso()
expect(ingreso.anadirFecha("25/12/12")).toEqual("25/12/12");
});

});

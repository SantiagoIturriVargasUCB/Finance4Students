import RegistroIngreso from "./registrarIngreso";

describe("Ingresos", () => {

    let ingreso = new RegistroIngreso()

    it("Se debe añadir un ingreso", () => {
    expect(ingreso.anadirIngreso(60)).toEqual(60);
});


it("Se debe añadir una fecha", () => {
expect(ingreso.anadirFecha("25/12/12")).toEqual("25/12/12");
});

it("Se debe añadir una descripcion", () => {
    const descripIngreso = "Paga del mes"
expect(ingreso.anadirDescripcion(descripIngreso)).toEqual("Paga del mes");
});

});

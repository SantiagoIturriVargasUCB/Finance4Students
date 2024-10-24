import RegistroIngreso from "./registrarIngreso";

describe("Ingresos", () => {

    let registro; 

    beforeEach(() => {
        registro = new RegistroIngreso();
    });

    it("Se debe añadir un monto", () => {
    expect(registro.anadirMonto(60)).toEqual(60);
});

    it("Se debe añadir una fecha", () => {
    expect(registro.anadirFecha("25/12/12")).toEqual("25/12/12");
});

    it("Se debe añadir una descripcion", () => {
    const descripIngreso = "Paga del mes"
    expect(registro.anadirDescripcion(descripIngreso)).toEqual("Paga del mes");
});

    it("Se debe añadir un ingreso con monto, fecha y descripcion", () => {
        const newIngreso = registro.anadirIngreso(100, "27/10/23", "Compra de libros");
        expect(newIngreso).toEqual({
            monto: 100,
            fecha: "27/10/23",
            descripcion: "Compra de libros"
    });
});


});

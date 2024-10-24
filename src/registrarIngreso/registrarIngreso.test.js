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

it("Debe almacenar los ingresos en el historial", () => {
    registro.anadirIngreso(100, "27/10/23", "Compra de libros");
    registro.anadirIngreso(200, "28/10/23", "Venta de servicios");
    
    expect(registro.getHistorialIngresos()).toEqual([
        { monto: 100, fecha: "27/10/23", descripcion: "Compra de libros" },
        { monto: 200, fecha: "28/10/23", descripcion: "Venta de servicios" }
    ]);
});

});

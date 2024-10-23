import {anadirIngreso, anadirFecha} from "././registrarIngreso.js";

describe("Ingresos", () => {
    it("Se debe añadir un ingreso", () => {
    expect(anadirIngreso(50)).toEqual(50);
});

it("Se debe añadir un fecha", () => {
    expect(anadirFecha("27/10/20")).toEqual("27/10/20");
});


});

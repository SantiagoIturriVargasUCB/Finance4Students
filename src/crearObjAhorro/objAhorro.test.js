import { crearObjetivo } from "./objAhorro";

describe("Objetivo de Ahorro", () => {
    it("Debería devolver un objetivo con valores por defecto", () => {
        expect(crearObjetivo()).toEqual({
            objName: "Vacaciones",
            mount: 1000,
            date: "01/11/2025"
        });
    });

    it("Debería devolver un objetivo con parámetros variables", () => {
        expect(crearObjetivo("Vacaciones", 1000, "01/11/2025")).toEqual({
            objName: "Vacaciones",
            mount: 1000,
            date: "01/11/2025"
        });
    });

    it("Debería devolver un objetivo en formato de objeto", () => {
        expect(crearObjetivo("Vacaciones", 1000, "01/11/2025")).toEqual({
            objName: "Vacaciones",
            mount: 1000,
            date: "01/11/2025"
        });
    });
});


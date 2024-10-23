import { crearObjetivo } from "./objAhorro";

describe("Objetivo de Ahorro", () => {
    it("Debería devolver un objetivo fijo", () => {
        expect(crearObjetivo()).toEqual(["Vacaciones", 1000, "01/11/2025"]);
    });
});

describe("Objetivo de Ahorro", () => {
    it("Debería devolver un objetivo parametros variables", () => {
        expect(crearObjetivo("Vacaciones", 1000, "01/11/2025")).toEqual(["Vacaciones", 1000, "01/11/2025"]);
    });
});

import { Objetivo } from "./objAhorro";

describe("Objetivo de Ahorro", () => {
    it("Debería devolver un objetivo con valores por defecto", () => {
        const obj = new Objetivo();
        expect(obj.crearObjetivo()).toEqual({
            objName: "Vacaciones",
            mount: 1000,
            date: "01/11/2025"
        });
    });

    it("Debería devolver un objetivo con parámetros variables", () => {
        const obj = new Objetivo();
        expect(obj.crearObjetivo("Vacaciones", 1000, "01/11/2025")).toEqual({
            objName: "Vacaciones",
            mount: 1000,
            date: "01/11/2025"
        });
    });

    it("Debería devolver un objetivo en formato de objeto", () => {
        const obj = new Objetivo();
        expect(obj.crearObjetivo("Vacaciones", 1000, "01/11/2025")).toEqual({
            objName: "Vacaciones",
            mount: 1000,
            date: "01/11/2025"
        });
    });

    it("Deberia devolver un objetivo dado un objeto", () => {
        const objs = new Objetivo();
        const newObj = {
            objName: "Vacaciones",
            mount: 1000,
            date: "01/11/2025"
        };

        objs.crearObjetivo(newObj);

        let objCreated = objs.showObj();
        expect(objCreated).toEqual(objs.showObj());
    })
});


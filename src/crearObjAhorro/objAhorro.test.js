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

    it("Debería devolver un objetivo dado un objeto", () => {
        const obj = new Objetivo();
        const newObj = {
            objName: "Viaje",
            mount: 2000,
            date: "10/01/2026"
        };
        expect(obj.crearObjetivo(newObj)).toEqual(newObj);
    });

    it("Debería almacenar y mostrar los objetivos creados", () => {
        const objs = new Objetivo();
        const newObj = {
            objName: "Vacaciones",
            mount: 1000,
            date: "01/11/2025"
        };

        objs.crearObjetivo(newObj);

        const storedObjs = objs.showObj(); 
        expect(storedObjs).toEqual([newObj]);
    });

    it("Deberia poder crear y mostrar varios objetivos", () => {
        const objs = new Objetivo();
        const objNavidad = {
            objName: "Navidad",
            mount: 10000,
            date: "12/25/2024"
        };
        objs.crearObjetivo(objNavidad); 
        
        const objCumple = {
            objName: "Cumple",
            mount: 2000,
            date: "11/14/2024"
        };
        objs.crearObjetivo(objCumple);
        
        const storedObjs = objs.showObj()
        expect(storedObjs).toEqual([objNavidad, objCumple])
    })
});


import { Ingreso } from "./Ingreso";

// Mock manual de localStorage
const localStorageMock = (function() {
    let store = {};

    return {
        getItem(key) {
            return store[key] ? JSON.parse(store[key]) : null;
        },
        setItem(key, value) {
            store[key] = JSON.stringify(value);
        },
        removeItem(key) {
            delete store[key];
        },
        clear() {
            store = {};
        }
    };
})();

global.localStorage = localStorageMock;

describe("Ingresos", () => {

    beforeEach(() => {
        // Limpia el mock de localStorage antes de cada prueba
        localStorage.clear();
    });

    it("Debe crear un nuevo ingreso con la información proporcionada", () => {
        const ingreso = new Ingreso("2023-10-27", "Venta de libros", 150);
        expect(ingreso).toEqual({
            fecha: "2023-10-27",
            descripcion: "Venta de libros",
            monto: 150
        });
    });

    it("Debe registrar un nuevo ingreso y guardarlo en localStorage", () => {
        const ingreso = new Ingreso("2023-10-27", "Venta de libros", 150);
        const ingresoRegistrado = ingreso.registrarIngreso();

        expect(ingresoRegistrado).toEqual({
            fecha: "2023-10-27",
            descripcion: "Venta de libros",
            monto: 150
        });

        const historial = JSON.parse(localStorage.getItem('historialIngresos'));
        expect(historial).toEqual([{
            fecha: "2023-10-27",
            descripcion: "Venta de libros",
            monto: 150
        }]);
    });

    it("Debe calcular correctamente el total de ingresos", () => {
        const ingreso1 = new Ingreso("2023-10-27", "Venta de libros", 150);
        ingreso1.registrarIngreso();

        const ingreso2 = new Ingreso("2023-10-28", "Venta de comida", 200);
        ingreso2.registrarIngreso();

        const totalIngresos = Ingreso.devolverIngresoTotal();
        expect(totalIngresos).toEqual(350);
    });

    it("Debe almacenar y devolver correctamente múltiples ingresos en el historial", () => {
        const ingreso1 = new Ingreso("2023-10-27", "Venta de libros", 150);
        ingreso1.registrarIngreso();

        const ingreso2 = new Ingreso("2023-10-28", "Venta de comida", 200);
        ingreso2.registrarIngreso();

        const historial = JSON.parse(localStorage.getItem('historialIngresos'));
        expect(historial).toEqual([
            { fecha: "2023-10-27", descripcion: "Venta de libros", monto: 150 },
            { fecha: "2023-10-28", descripcion: "Venta de comida", monto: 200 }
        ]);
    });

    it("Debe devolver el historial de ingresos registrado correctamente", () => {
        const ingreso1 = new Ingreso("2023-10-27", "Venta de libros", 150);
        ingreso1.registrarIngreso();

        const ingreso2 = new Ingreso("2023-10-28", "Venta de comida", 200);
        ingreso2.registrarIngreso();

        const historial = Ingreso.devolverIngresoTotal();
        expect(historial).toEqual(350);
    });
});

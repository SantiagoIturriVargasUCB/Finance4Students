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

    let registro;

    beforeEach(() => {
        // Limpia el mock de localStorage antes de cada prueba
        localStorage.clear();
        registro = new Ingreso();
    });

    it("Se debe añadir un monto", () => {
        const monto = 60;
        expect(registro.anadirMonto(monto)).toEqual(monto);
    });

    it("Se debe añadir una fecha", () => {
        const fecha = "25/12/12";
        expect(registro.anadirFecha(fecha)).toEqual(fecha);
    });

    it("Se debe añadir una descripcion", () => {
        const descripIngreso = "Paga del mes";
        expect(registro.anadirDescripcion(descripIngreso)).toEqual(descripIngreso);
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

    it("Debe sumar correctamente el total de los ingresos", () => {
        registro.anadirIngreso(100, "27/10/23", "Compra de libros");
        registro.anadirIngreso(200, "28/10/23", "Venta de servicios");

        expect(registro.getTotalIngresos()).toEqual(300);
    });

    it("Debe inicializar correctamente el total de ingresos y el historial vacío", () => {
        expect(registro.getTotalIngresos()).toEqual(0);
        expect(registro.getHistorialIngresos()).toEqual([]);
    });

});

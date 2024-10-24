import { Gasto } from './Gasto';

describe('Clase Gasto', () => {
  
  it('debería registrar un gasto correctamente', () => {
    const gasto = new Gasto("2024-01-10", "Supermercado", 150);
    const resultado = gasto.registrarGasto();

    // Verificar que el gasto se haya registrado correctamente
    expect(resultado).toEqual({
      fecha: "2024-01-10",
      descripcion: "Supermercado",
      monto: 150
    });
  });

  it('debería devolver un mensaje de error si el monto es negativo', () => {
    const gasto = new Gasto("2024-01-10", "Supermercado", -150);
    const resultado = gasto.registrarGasto();

    // Verificar que se devuelva un mensaje de error
    expect(resultado).toEqual({ message: "El monto debe ser un número positivo." });
  });

  it('debería devolver un mensaje de error si el monto no es un número', () => {
    const gasto = new Gasto("2024-01-10", "Supermercado", "abc");
    const resultado = gasto.registrarGasto();

    // Verificar que se devuelva un mensaje de error
    expect(resultado).toEqual({ message: "El monto debe ser un número positivo." });
  });

  it('debería calcular correctamente el total de gastos', () => {
    const gasto1 = new Gasto("2024-01-10", "Supermercado", 150);
    const gasto2 = new Gasto("2024-01-15", "Alquiler", 500);
    
    const gastos = [gasto1.registrarGasto(), gasto2.registrarGasto()];

    // Verificar que el total de los gastos sea correcto
    const totalGastos = Gasto.devolverGastoTotal(gastos);
    expect(totalGastos).toBe(650);
  });

  it('debería devolver 0 si no hay gastos registrados', () => {
    const gastos = [];

    // Verificar que el total sea 0 cuando no hay gastos
    const totalGastos = Gasto.devolverGastoTotal(gastos);
    expect(totalGastos).toBe(0);
  });
});

import { Gasto } from "../Gasto/Gasto";
import { Ingreso } from "../Ingreso/ingreso";


describe('Saldo Total Disponible', () => {
  it('debería calcular correctamente el saldo total disponible', () => {
    const registroIngresos = new Ingreso();
    const totalIngresos = registroIngresos.getTotalIngresos();
    
    const totalGastos = Gasto.devolverGastoTotal();
    
    const saldoTotalDisponible = totalIngresos - totalGastos;
    
    expect(saldoTotalDisponible).toBeGreaterThanOrEqual(0);
  });
});
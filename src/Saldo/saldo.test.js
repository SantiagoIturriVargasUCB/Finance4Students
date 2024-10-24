import { Gasto } from "../gastos/gastos";
import RegistroIngreso from "../registrarIngreso/registrarIngreso";

describe('Saldo Total Disponible', () => {
  it('debería calcular correctamente el saldo total disponible', () => {
    const registroIngresos = new RegistroIngreso();
    const totalIngresos = registroIngresos.getTotalIngresos();
    
    const totalGastos = Gasto.devolverGastoTotal();
    
    const saldoTotalDisponible = totalIngresos - totalGastos;
    
    expect(saldoTotalDisponible).toBeGreaterThanOrEqual(0);
  });
});

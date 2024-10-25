// Código modificado del archivo `Ingreso.js` para que siga la lógica de `Gasto.js`
export class Ingreso {
    constructor(fecha, descripcion, monto) {
      this.fecha = fecha;
      this.descripcion = descripcion;
      this.monto = monto;
    }
  
    registrarIngreso() {
      const nuevoIngreso = {
        fecha: this.fecha,
        descripcion: this.descripcion,
        monto: this.monto,
      };
  
      const ingresos = JSON.parse(localStorage.getItem('historialIngresos')) || [];
      ingresos.push(nuevoIngreso);
      localStorage.setItem('historialIngresos', JSON.stringify(ingresos));
  
      return nuevoIngreso;
    };
  
    static devolverIngresoTotal() {
      const ingresos = JSON.parse(localStorage.getItem('historialIngresos')) || [];
      return ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);
    };
  }
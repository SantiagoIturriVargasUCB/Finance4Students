export class Gasto {
  constructor(fecha, descripcion, monto) {
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.monto = monto;
  }

  registrarGasto() {
    const nuevoGasto = {
      fecha: this.fecha,
      descripcion: this.descripcion,
      monto: this.monto,
    };

    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];

    gastos.push(nuevoGasto);

    localStorage.setItem('gastos', JSON.stringify(gastos));

    return nuevoGasto;
  }

  static devolverGastoTotal() {
    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];
    return gastos.reduce((total, gasto) => total + gasto.monto, 0);
  }
}


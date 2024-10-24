class Gasto {
  constructor(fecha, descripcion, monto) {
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.monto = monto;
  }

  static gastoTotal = 0;

  registrarGasto() {

    Gasto.gastoTotal += this.monto;
    return {
      'fecha': this.fecha,
      'descripcion': this.descripcion,
      'monto': this.monto
    };
  }

  static devolverGastoTotal() {
    return Gasto.gastoTotal;
  }

}

export default Gasto;

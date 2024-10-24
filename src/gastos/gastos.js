class Gasto {
  constructor(fecha, descripcion, monto) {
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.monto = monto;
  }

  static gastoTotal = 200;

  registrarGasto() {

    return {
      'fecha': this.fecha,
      'descripcion': this.descripcion,
      'monto': this.monto
    };
  }

  static devolverGastoTotal() {
    return 200;
  }

}

export default Gasto;

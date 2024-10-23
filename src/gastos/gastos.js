class Gasto {
  constructor(fecha, descripcion, monto) {
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.monto = monto;
  }

  registrarGasto() {
    return {
      'fecha': this.fecha,
      'descripcion': this.descripcion,
      'monto': this.monto
    };
  }
}

export default Gasto;

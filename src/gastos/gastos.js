export class Gasto {
  constructor(fecha, descripcion, monto) {
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.monto = monto;
  }

  static gastoTotal = 0;

  static listaDeGastos = [];

  registrarGasto() {

    Gasto.listaDeGastos.push(this);
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

  static obtenerGastos() {
    return Gasto.listaDeGastos;
  }

}



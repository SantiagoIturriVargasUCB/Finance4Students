export class Gasto {
  constructor(fecha, descripcion, monto) {
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.monto = monto;
  }

  // Método para registrar un nuevo gasto y guardarlo en LocalStorage
  registrarGasto() {
    if (this.monto <= 0 || isNaN(this.monto)) {
      console.warn("El monto debe ser un número positivo.");
      return { message: "El monto debe ser un número positivo." };
    }

    const nuevoGasto = {
      fecha: this.fecha,
      descripcion: this.descripcion,
      monto: this.monto
    };




    return nuevoGasto;
  }

  static devolverGastoTotal() {
    return gastos.reduce((total, gasto) => total + parseFloat(gasto.monto), 0);
  }
}

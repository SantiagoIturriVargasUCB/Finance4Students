
// Función para calcular y mostrar el saldo total disponible
function cargarSaldoTotal() {
    // Obtener ingresos y gastos desde LocalStorage
    const ingresos = JSON.parse(localStorage.getItem('historialIngresos')) || [];
    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];

    // Calcular el total de ingresos sumando los montos
    const totalIngresos = ingresos.reduce((total, ingreso) => total + parseFloat(ingreso.monto), 0);

    // Calcular el total de gastos sumando los montos
    const totalGastos = gastos.reduce((total, gasto) => total + parseFloat(gasto.monto), 0);

    // Calcular el saldo total disponible
    const saldoTotalDisponible = totalIngresos - totalGastos;

    // Mostrar el saldo en la página
    const saldoDiv = document.querySelector("#saldo-total");
    saldoDiv.innerHTML = `<h2>Saldo Total Disponible: Bs. ${saldoTotalDisponible.toFixed(2)}</h2>`;
}

// Llamar a la función cuando la página cargue
document.addEventListener('DOMContentLoaded', cargarSaldoTotal);

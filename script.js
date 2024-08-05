document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const resumenTabla = document.querySelector('tbody');
    const totalPresupuesto = document.getElementById('total-presupuesto');
    let total = 0;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const tipoAbertura = document.getElementById('tipo-abertura').value;
        const alto = document.getElementById('alto').value;
        const ancho = document.getElementById('ancho').value;
        const linea = document.getElementById('linea').value;
        const tipoVidrio = document.getElementById('tipo-vidrio').value;
        const herrajes = document.getElementById('herrajes').checked ? 'Sí' : 'No';
        const cantidad = document.getElementById('cantidad').value;
        const precioUnitario = document.getElementById('precio-unitario').value;
        const observaciones = document.getElementById('observaciones').value;

        // Calcular el total de la abertura
        const totalAbertura = cantidad * precioUnitario;

        // Crear una nueva fila en la tabla de resumen
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${tipoAbertura}</td>
            <td>${alto} x ${ancho}</td>
            <td>${linea}</td>
            <td>${tipoVidrio}</td>
            <td>${herrajes}</td>
            <td>${cantidad}</td>
            <td>${precioUnitario}</td>
            <td>${totalAbertura}</td>
            <td>${observaciones}</td>
        `;

        // Agregar la fila al cuerpo de la tabla
        resumenTabla.appendChild(fila);

        // Actualizar el total general del presupuesto
        total += totalAbertura;
        totalPresupuesto.textContent = `$${total.toFixed(2)}`;

        // Limpiar el formulario
        form.reset();
    });
});

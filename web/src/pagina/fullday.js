
// Establecer la fecha mínima para el input de fecha
const today = new Date();
const formattedDate = today.toISOString().split('T')[0];
document.getElementById('depart-date').setAttribute('min', formattedDate);
document.getElementById('return-date').setAttribute('min', formattedDate);

function calculateDuration() {
    const departDate = new Date(document.getElementById('depart-date').value);
    const returnDate = new Date(document.getElementById('return-date').value);
    const duration = Math.ceil((returnDate - departDate) / (1000 * 60 * 60 * 24));

    // Cálculo del precio: 4000 soles a partir de 39 días
    const price = duration >= 39 ? 4000 : duration * 100;

    // Mostrar resultados
    document.getElementById('duration-result').textContent = `Duración: ${duration} días`;
    document.getElementById('price-result').textContent = `Monto: ${price} soles`;
}

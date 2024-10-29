// Crear el mapa
var map = L.map('map-Valledetenza').setView([5.1, -73.3], 8); // Coordenadas del Valle de Tenza
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Marcador en un punto de interés del Valle de Tenza
L.marker([5.125, -73.316]).addTo(map)
    .bindPopup(`
        <div>
            <p><strong>📍 Ubicación:</strong> Boyacá, Colombia</p>
            <ul>
              <li><strong>📸 Puntos de interés cercanos:</strong> Cascadas de Garagoa, Embalse La Esmeralda, Minas de Esmeraldas en Somondoco.</li>
                <li><strong>✨ Recomendación:</strong> No olvides visitar el pueblo colonial de Guateque para conocer su historia y cultura local. 🏘️</li>
            </ul>
        </div>
    `)
    .openPopup();


// Grafico de Visitas
var ctx = document.getElementById('tourismChart').getContext('2d');
var tourismChart = new Chart(ctx, {
    type: 'line',  // Tipo de gráfico: línea
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],  // Años
        datasets: [{
            label: 'Número de Turistas',
            data: [5000, 5500, 6000, 7000, 8500, 6000, 7000, 9000, 10000],  // Datos de turistas
            backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Color de fondo
            borderColor: 'rgba(54, 162, 235, 1)',  // Color del borde
            borderWidth: 2,  // Grosor de la línea
            fill: true,  // Rellenar debajo de la línea
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true  // Asegura que el eje Y comience en 0
            }
        },
        responsive: true,  // Asegura que el gráfico sea responsivo
        plugins: {
            legend: {
                display: true,  // Mostrar leyenda
                position: 'top'  // Posición de la leyenda
            }
        }
    }
});

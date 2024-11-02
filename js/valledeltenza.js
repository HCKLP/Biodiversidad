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
              <li><strong>✨ Recomendación:</strong> No olvides visitar el pueblo colonial de Guateque para conocer su historia y cultura local. 🏘️</li>
            </ul>
        </div>
    `)
    .openPopup();

// Crear el mapa centrado en un punto
var map = L.map('mapGuatavita').setView([4.82, -73.8], 8); // Coordenadas de la Laguna de Guatavita

// Añadir el tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Añadir un marcador en la ubicación de la Laguna de Guatavita
var marker = L.marker([4.8196, -73.745]).addTo(map).bindPopup("<b>Laguna de Guatavita</b><br>" +
                 "<p>🌿 La Laguna de Guatavita es un lugar sagrado para los antiguos Muiscas, y el epicentro de la leyenda de <i>El Dorado</i>.</p>" +
                 "<a href='https://www.youtube.com/watch?v=negQYb3YIgs' target='_blank'>Más información</a>").openPopup();


                        
                
                
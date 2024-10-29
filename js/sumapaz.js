// Mapa Interactivo con Leaflet.js
var map = L.map('map-sumapaz').setView([4.288, -74.0], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker([4.2875, -74.0008]).addTo(map).bindPopup(`
    <div style="font-family: Arial, sans-serif; font-size: 12px; line-height: 1.5;">
        <p><strong>Altitud:</strong> 3,200 - 4,000 metros sobre el nivel del mar</p>
        <p>🌿 El <strong>Páramo de Sumapaz</strong> es el páramo más grande del mundo.🌍</p>
        <p>🐻 Alberga especies emblemáticas como el <strong>oso de anteojos</strong> y el <strong>frailejón</strong>.</p>
        <a href="https://www.youtube.com/watch?v=xWb_WkAOYBU" target="_blank" style="color: #27ae60; text-decoration: none;">Más información</a>
    </div>
`);

// Test interactivo
document.getElementById('submit-quiz').addEventListener('click', function() {
    // Obtener las respuestas seleccionadas
    var question1 = document.querySelector('input[name="question1"]:checked');
    var question2 = document.querySelector('input[name="question2"]:checked');
    var question3 = document.querySelector('input[name="question3"]:checked');
    var question4 = document.querySelector('input[name="question4"]:checked');
    var question5 = document.querySelector('input[name="question5"]:checked');
    var question6 = document.querySelector('input[name="question6"]:checked');
    
    // Validar si se respondieron todas las preguntas
    if (!question1 || !question2 || !question3 || !question4 || !question5 || !question6) {
        document.getElementById('quiz-result').innerHTML = "<p style='color:red;'>⚠️ Por favor, responde todas las preguntas.</p>";
        return;  // Salir de la función si faltan preguntas por responder
    }

    // Calcular el puntaje
    var score = 0;
    if (question1.value === "correcto") score++;
    if (question2.value === "correcto") score++;
    if (question3.value === "correcto") score++;
    if (question4.value === "correcto") score++;
    if (question5.value === "correcto") score++;
    if (question6.value === "correcto") score++;

    // Mostrar el resultado en el div "quiz-result"
    var resultText = "🎉 ¡Has acertado " + score + " de 6 preguntas! 🎉";
    document.getElementById('quiz-result').innerHTML = "<p style='color:green;'>" + resultText + "</p>";
});
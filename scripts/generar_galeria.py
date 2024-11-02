import requests

def obtener_observaciones_colombia(pagina=1, resultados_por_pagina=8):
    url = "https://api.inaturalist.org/v1/observations"
    params = {
        "place_id": 68623,
        "view":"species",
        "iconic_taxa":"Aves",        
        "quality_grade": "research",  
        "has": "photos",              
        "page": pagina,
        "per_page": resultados_por_pagina
    }
    response = requests.get(url, params=params)

    if response.status_code == 200:
        datos = response.json()
        observaciones = []
        for resultado in datos["results"]:
            nombre_cientifico = resultado["taxon"]["name"]
            # Cambia la URL a la versión de alta resolución
            url_imagen = resultado["photos"][0]["url"].replace("square", "original")
            observaciones.append({
                "nombre": nombre_cientifico,
                "imagen": url_imagen
            })
        return observaciones
    else:
        print("Error en la solicitud:", response.status_code)
        return []

def generar_html_galeria(observaciones):
    html = "<div class='gallery-grid'>\n"
    
    for obs in observaciones:
        html += f"    <div class='gallery-item'>\n"
        html += f"        <img src='{obs['imagen']}' alt='Imagen de {obs['nombre']}'>\n"
        html += f"        <div class='gallery-text'>{obs['nombre']}</div>\n"
        html += "    </div>\n"
    
    html += "</div>\n"

    with open("galeria.html", "w", encoding="utf-8") as file:
        file.write(html)

# Ejecuta el código para obtener datos y generar la galería
observaciones_colombia = obtener_observaciones_colombia()
if observaciones_colombia:
    generar_html_galeria(observaciones_colombia)
    print("Galería generada exitosamente en galeria.html")
else:
    print("No se obtuvieron datos de la API.")

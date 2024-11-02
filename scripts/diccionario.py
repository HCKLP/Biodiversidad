animales = {}

def guardar_en_archivo():
    with open("animales.txt", "w") as archivo:
        for region, animales_region in animales.items():
            archivo.write(f"Región: {region}\n")
            for animal, dato in animales_region.items():
                archivo.write(f"  Animal: {animal} - Dato curioso: {dato}\n")
            archivo.write("\n")
    print("Datos guardados en 'animales.txt'.")


def añadir_animal():
    region = input("Ingrese la región (Guatavita, Páramo de Sumapaz, Valle de Tenza): ").strip()
    if region not in animales:
        animales[region] = {}

    animal = input("Ingrese el nombre del animal: ").strip()
    dato_curioso = input("Ingrese un dato curioso sobre el animal: ").strip()

    if animal in animales[region]:
        print(f"El animal {animal} ya está registrado en {region}.")
    else:
        animales[region][animal] = dato_curioso
        print(f"Animal añadido correctamente a {region}.")
        guardar_en_archivo() 


def eliminar_animal():
    region = input("Ingrese la región del animal: ").strip()
    if region in animales:
        animal = input("Ingrese el nombre del animal a eliminar: ").strip()
        if animal in animales[region]:
            del animales[region][animal]
            print(f"Animal {animal} eliminado correctamente de {region}.")
            guardar_en_archivo()  
        else:
            print(f"El animal {animal} no se encontró en {region}.")
    else:
        print(f"La región {region} no está registrada.")

# Función para listar todos los animales y sus datos curiosos por región
def listar_animales():
    if not animales:
        print("No hay datos de animales registrados.")
    else:
        for region, animales_region in animales.items():
            print(f"\nRegión: {region}")
            for animal, dato in animales_region.items():
                print(f"  Animal: {animal} - Dato curioso: {dato}")

# Menú principal
def diccionario():
    while True:
        print("\nMenú de Datos Curiosos de Animales")
        print("1. Añadir un dato curioso de un animal")
        print("2. Eliminar un animal")
        print("3. Listar todos los animales y sus datos curiosos")
        print("4. Salir")
        opcion = input("Seleccione una opción: ")

        if opcion == '1':
            añadir_animal()
        elif opcion == '2':
            eliminar_animal()
        elif opcion == '3':
            listar_animales()
        elif opcion == '4':
            print("Saliendo del programa.")
            break
        else:
            print("Opción no válida. Intente de nuevo.")

# Ejecutar el menú
diccionario()

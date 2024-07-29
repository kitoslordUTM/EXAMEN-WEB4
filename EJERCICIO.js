// Ejercicio 1: Filtro de Arreglos
function filtrarMayoresDeEdad(personas) {
    return personas.filter(persona => persona.edad >= 18);
}

// Ejemplo de uso
const personas = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Ana', edad: 15 },
    { nombre: 'Luis', edad: 22 },
    { nombre: 'María', edad: 17 }
];

console.log(filtrarMayoresDeEdad(personas));
// Resultado: [{ nombre: 'Juan', edad: 20 }, { nombre: 'Luis', edad: 22 }]




// Ejercicio 2: Transformar y Filtrar Arreglos
function transformarYFiltrar(numeros) {
    return numeros
        .map(num => num * num)
        .filter(cuadrado => cuadrado > 20);
}

// Ejemplo de uso
const numeros = [2, 3, 4, 5, 6];
console.log(transformarYFiltrar(numeros));
// Resultado: [25, 36]



// Ejercicio 3: Promesas y Asincronía
async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
}


// Ejemplo de uso
obtenerUsuarios();

// Ejercicio 4: Manipulación Compleja del DOM
document.getElementById('agregar').addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Nuevo ítem';
    
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        li.remove();
    });
    
    li.appendChild(botonEliminar);
    document.getElementById('lista').appendChild(li);
});



// Ejercicio 5: Algoritmos y Estructuras de Datos
function ordenarPorPropiedad(arr, propiedad) {
    return arr.slice().sort((a, b) => {
        if (a[propiedad] < b[propiedad]) {
            return -1;
        } else if (a[propiedad] > b[propiedad]) {
            return 1;
        } else {
            return 0;
        }
    });
}

// Ejemplo de uso
const objetos = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Ana', edad: 15 },
    { nombre: 'Luis', edad: 22 },
    { nombre: 'María', edad: 17 }
];

console.log(ordenarPorPropiedad(objetos, 'edad'));
// Resultado: [{ nombre: 'Ana', edad: 15 }, { nombre: 'María', edad: 17 }, { nombre: 'Juan', edad: 20 }, { nombre: 'Luis', edad: 22 }]

let listaDeTareas = [];

let agregarMas = true;

while (agregarMas) {
    let nuevaTarea = prompt("Ingresa una nueva tarea:");
    
    if (nuevaTarea !== null && nuevaTarea.trim() !== "") {
        listaDeTareas.push(nuevaTarea.trim());

        agregarMas = confirm("Deseas agregar otra tarea?");
    } else {
        alert("Por favor, ingresa una tarea valida.");
    }
}

//Mostrar la lista
console.log("=== Lista de Tareas Pendientes ===");

for (let i = 0; i < listaDeTareas.length; i++) {
    console.log(`${i + 1}. ${listaDeTareas[i]}`);
}
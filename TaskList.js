const readline = require('readline');

// Crea una instancia de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lista de tareas
const tasks = [];

// Función para añadir una tarea
function addTask() {
  rl.question('Indicador de tarea: ', (indicator) => {
    rl.question('Descripción de tarea: ', (description) => {
      const task = {
        indicator,
        description,
        completed: false
      };
      tasks.push(task);
      console.log('Tarea añadida con éxito');
      showMenu();
    });
  });
}

// Función para eliminar una tarea
function deleteTask() {
  if (tasks.length === 0) {
    console.log('No hay tareas para eliminar');
    showMenu();
    return;
  }

  rl.question('Índice de tarea a eliminar: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      console.log('Tarea eliminada con éxito');
    } else {
      console.log('Índice de tarea inválido');
    }
    showMenu();
  });
}

// Función para completar una tarea
function completeTask() {
  if (tasks.length === 0) {
    console.log('No hay tareas para completar');
    showMenu();
    return;
  }

  rl.question('Índice de tarea a completar: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      console.log('Tarea completada con éxito');
    } else {
      console.log('Índice de tarea inválido');
    }
    showMenu();
  });
}

// Muestra el menú de opciones
function showMenu() {
  console.log('==== Lista de Tareas ====');
  tasks.forEach((task, index) => {
    const status = task.completed ? 'Completada' : 'Pendiente';
    console.log(`[${index}] ${task.indicator}: ${task.description} (${status})`);
  });
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('0. Salir');

  rl.question('Seleccione una opción: ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        deleteTask();
        break;
      case '3':
        completeTask();
        break;
      case '0':
        rl.close();
        break;
      default:
        console.log('Opción inválida');
        showMenu();
    }
  });
}

// Ejecuta el programa
showMenu();

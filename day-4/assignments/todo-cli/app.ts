import readlineSync from "readline-sync";
import chalk from "chalk";

interface Todo {
  id: number;
  name: string;
  checked: boolean;
  createdDate: number;
}

const todos: Todo[] = [];

function addTodo() {
  const name = readlineSync.question("Enter a todo item: ");
  const now = new Date();
  todos.push({
    name,
    checked: false,
    id: todos.length,
    createdDate: now.getTime(),
  });
  console.log(`Added "${name}" to the list.`);
}

function completeTodo() {
  const index = readlineSync.questionInt(
    "Enter the index of the todo item to complete: "
  );
  if (index >= 0 && index < todos.length) {
    todos[index].checked = true;
    console.log(`Completed "${todos[index].name}".`);
  } else {
    console.log("Invalid index.");
  }
}

function listTodos() {
  if (todos.length < 1) console.log("Empty list.");
  for (let i = 0; i < todos.length; i++) {
    const prefix = todos[i].checked ? chalk.green('✅') : '◻️';
    console.log(`${prefix} id: ${i} -> ${todos[i].name}`);
  }
}

function updateTodo() {
  const index = readlineSync.questionInt(
    "Enter the index of the todo item to update: "
  );
  if (index >= 0 && index < todos.length) {
    todos[index].name = readlineSync.question(
      `Enter a new name for "${todos[index].name}": `
    );
    console.log(`Updated "${todos[index].name}".`);
  } else {
    console.log("Invalid index.");
  }
}

function deleteTodo() {
  const index = readlineSync.question(
    "Enter the index of the todo item to delete: "
  );
  if (isNaN(parseInt(index))) {
    console.log("Invalid index.");
    return;
  }
  const todoIndex = parseInt(index);
  if (todoIndex < 0 || todoIndex >= todos.length) {
    console.log("Index out of range.");
    return;
  }
  const deletedTodo = todos.splice(todoIndex, 1)[0];
  console.log(`Deleted "${deletedTodo.name}".`);
}

function main() {
  console.log("Welcome to the Todo CLI app!");
  while (true) {
    const input = readlineSync.question(
      "Enter a command (add, complete, list, update, delete, quit): "
    );
    switch (input) {
      case "add":
        addTodo();
        break;
      case "complete":
        completeTodo();
        break;
      case "list":
        listTodos();
        break;
      case "update":
        updateTodo();
        break;
      case "delete":
        deleteTodo();
        break;
      case "quit":
        console.log("Goodbye!");
        return;
      default:
        console.log("Invalid command.");
    }
  }
}

main();

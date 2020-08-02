document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  let tasks = document.getElementById('tasks') 
  let newToDo = document.getElementById('new-task-description');
  form.addEventListener('submit', function(event) {
   event.preventDefault();
   let toDo = newToDo.value;
   let toDoItem = document.createElement('li');
   let toDoItemText = document.createTextNode(toDo);
   toDoItem.appendChild(toDoItemText);
   tasks.appendChild(toDoItem);
   newToDo.value = "";
});
});

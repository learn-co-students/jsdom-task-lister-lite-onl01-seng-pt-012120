document.addEventListener("DOMContentLoaded", () => {




document.getElementById("submit").addEventListener("click", function(e){
  e.preventDefault();

  if (document.getElementById("new-task-description").value != "") {
  let task = document.createElement("LI");
  let content = document.createTextNode(document.getElementById("new-task-description").value);
  task.appendChild(content);
  document.getElementById("tasks").appendChild(task);
  }


})

});
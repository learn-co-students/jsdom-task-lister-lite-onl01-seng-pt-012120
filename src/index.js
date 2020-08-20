document.addEventListener("DOMContentLoaded", () => {
  let tasks = document.getElementById("tasks");

  document.getElementById("submit").addEventListener("click", function(event) {
    let input = document.getElementById("new-task-description").value;
    let task = document.createElement("li");
    task.innerText = input;

    event.preventDefault();
    tasks.append(task);
  });
});

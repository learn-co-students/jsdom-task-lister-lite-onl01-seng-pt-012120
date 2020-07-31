document.addEventListener("DOMContentLoaded", () => {

  document.getElementById('create-task-form').addEventListener("submit", function(event) {
    event.preventDefault();
    let userInput = document.getElementById("new-task-description").value;
    document.getElementById("create-task-form").reset();
    let base = document.getElementById("tasks");
    let item = document.createElement("li"); 
    item.innerHTML = `${userInput}<button data-description="${userInput}" id="delete">X</button>`;
    base.appendChild(item);
    }, false);

  
});

const form = document.getElementById("create-task-form");


document.addEventListener("DOMContentLoaded", () => {
  // your code here

});

form.addEventListener('submit', function() {
  let item = document.createElement("li");
  let input = document.createTextNode(document.getElementById("new-task-description").value);

  item.appendChild(input);
  document.getElementById("list").appendChild(item);

  event.preventDefault();

});

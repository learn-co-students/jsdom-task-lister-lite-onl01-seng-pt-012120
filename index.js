
document.querySelector("#create-task-form").addEventListener("submit", function(event) {
  let inputValue = document.getElementById("new-task-description").value;
         document.getElementById("list").innerHTML += ("</br>" + inputValue + "</br>");
         event.preventDefault();
}, false);



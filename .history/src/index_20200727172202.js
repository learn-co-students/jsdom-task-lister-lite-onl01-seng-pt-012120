document.addEventListener("DOMContentLoaded", () => {
  //list element of the document ~My ToDos~ When the document is created it creates a new list
  const tasks = document.getElementById('#tasks');

  //form element that will be listening to for the submit 
  const task_form = document.getElementById('#create_task_form');
  function addToDoTask() {
        console.log('hi')
  }





  task_form.addEventListener('submit', function (event) {
    addToDoTask();
    event.preventDefault();
  });




  document.querySelector

});

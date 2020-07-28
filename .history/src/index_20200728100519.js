document.addEventListener("DOMContentLoaded", () => {
  //list element of the document ~My ToDos~ When the document is created it creates a new list
  const tasks = document.getElementById('#tasks');

  //form element that will be listening to for the submit 
  const task_form = document.getElementById('#create_task_form');

  /// add task element ti the tasks table
  let addToDoTask = (task) => {
    if (task) {
      let li = document.createElement('li');
      li.innerText = task;
      tasks.appendChild(li);  
    };
  }


  
  
  task_form.addEventListener('submit', function (event) {
    event.preventDefault();
    // let t = document.querySelector('#new-task-description');
    // addToDoTask(t.innerHTML);
  });




  document.querySelector

});

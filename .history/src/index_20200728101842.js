document.addEventListener("DOMContentLoaded", () => {
  //list element of the document ~My ToDos~ When the document is created it creates a new list
  const tasks = document.getElementById('#tasks');

  //form element that will be listening to for the submit 
  let tf = document.getElementById('#create-task-form');

  /// add task element ti the tasks table
  let addToDoTask = (task) => {
    if (task) {
      let li = document.createElement('li');
      li.innerText = task;
      tasks.appendChild(li);  
    };
  }


  
  /// cancel submit and add task to list
  tf.addEventListener('submit', function (event) {
    event.preventDefault();
    let t = document.querySelector('#new-task-description');
    addToDoTask(t.innerHTML);
  });




  document.querySelector

});

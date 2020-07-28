document.addEventListener("DOMContentLoaded", () => {
  //list element of the document ~My ToDos~ When the document is created it creates a new list
  const tasks = document.getElementById('#tasks');

  //form element that will be listening to for the submit 
  let tf = document.getElementById('#create-task-form');
  /// cancel submit and get new task send it to function to add a list item
  tf.addEventListener('submit', function (event) {
    event.preventDefault();
    let t = document.querySelector('#new-task-description');
    addToDoTask(t.innerHTML);
  });


  /// add task element ti the tasks table
  let addToDoTask = (task) => {
    if (task) {
      debugger;
      let li = document.createElement('li');
      li.innerText = task;
      tasks.appendChild(li);  
    };
  };

});

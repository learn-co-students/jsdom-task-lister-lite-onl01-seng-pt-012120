document.addEventListener("DOMContentLoaded", () => {
  //list element of the document ~My ToDos~ When the document is created it creates a new list
  const tasks = document.querySelector('#tasks');

  //form element that will be listening to for the submit 
  let tf = document.querySelector('#create-task-form');
  /// cancel submit and get new task send it to function to add a list item
  tf.addEventListener('submit', function (event) {
    event.preventDefault();
    let t = document.querySelector('#new-task-description');
    addToDoTask(t.value);
    t.value = "";
  });

  /// add task element ti the tasks table
  let addToDoTask = (task) => {
    if (task) {
      let li = document.createElement('li');
      li.innerHTML = task + ' <button data-description='+task+'>X</button>';
      tasks.appendChild(li);  
    };
  };

  // need event listener for the new x button to check task off
  let li_list = document.getElementsByTagName('li');
  console.log(li_list);
  

});

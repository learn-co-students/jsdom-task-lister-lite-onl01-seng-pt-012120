document.addEventListener("DOMContentLoaded", () => {
  //list element of the document ~My ToDos~ When the document is created it creates a new list
  const taskList = [];
  //form element that will be listening to for the submit 
  const tf = document.querySelector('#create-task-form');
  const td = document.querySelector('#new-task-description');
  
  const tasksUl = document.getElementById('tasks');


  /// cancel submit and get new task send it to function to add a list item
  tf.addEventListener('submit', function (event) {
    event.preventDefault();
    addToDoTask(td.value);
    td.value = "";
  });

  /// add task element ti the tasks table
  let addToDoTask = (task) => {
    if (task) {
      taskList.push('<li>' + task + ' <button data-description='+task+'> X </button>')
      taskUl.innerHTML = taskList.join("");
    };
  };

  // need event listener for the new x button to check task off
  tasksUl.addEventListener('click',  (e) => {
    if (e.target.nodeName === "BUTTON") {
      
    }
    let li_list = document.getElementsByTagName('button');
    
    for (let i = 0; i < li_list.length; i++) {
      const element = li_list[i];
      let this_li = element.parentElement
      element.addEventListener('click', this_li.remove())
    };
    
  });



  

});

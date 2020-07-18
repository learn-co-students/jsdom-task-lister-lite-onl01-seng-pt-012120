document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

// =====================================================

function addTask(input, inputField) {
  // create and li
  let task = document.createElement('li')
  // set text and button based on input
  task.innerHTML = input + ` <button id="${input}">delete</button>`
  // add li to ul
  ul.appendChild(task)
  // reset the input field
  inputField.value = ""
}

function removeItem() {
  this.parentNode.remove()
}

function setListeners() {
  let buttons = document.querySelectorAll('button')
  for (let i = 0; i < buttons.length; i++) {
    // buttons[i].removeEventListener('click', removeItem())
    buttons[i].removeEventListener('click', removeItem)
    buttons[i].addEventListener('click', removeItem)
  }
}

const submit = document.querySelector('input[type=submit]');
const ul = document.getElementById('tasks');

submit.addEventListener("click", function(event) {
  event.preventDefault();

  let inputField = document.getElementById('new-task-description');
  let input = inputField.value

  if (input === "") {
    alert("You must type something!")
  } else {
    addTask(input, inputField)
    setListeners()
  }  
});
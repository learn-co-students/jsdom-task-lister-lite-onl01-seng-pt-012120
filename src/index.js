document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // have the user input
    const newTask = document.querySelector("#new-task-description").value
    // slap it on the document
    taskList.innerHTML += `
    <li> ${newTask} </li>
    <button data-action="delete">X</button>
    `
    taskForm.reset()
  })

  taskList.addEventListener("click", (e) => {
    console.log(e.target)
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove()
    }
  })
});

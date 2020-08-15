document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('[type=submit]').addEventListener('click', function(e) {
    e.preventDefault();
    let li = document.createElement('li');
    let newTask = document.createTextNode(e.target.previousElementSibling.value);
    li.appendChild(newTask);
    document.querySelector('#tasks').append(li);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  
});

document.querySelectorAll('input')[1].addEventListener("click", function(e) {
  e.preventDefault();
  let i = document.querySelector('input').value;
  let newLi = document.createElement('li');
  let butt = document.createElement('button');
  butt.id = i;
  butt.onclick = function() {cb(this)};
  butt.innerHTML = "Remove";
  newLi.id = i;
  newLi.innerHTML = i;
  document.querySelector('input').value = "";
  document.querySelector('ul#tasks').appendChild(newLi);
  document.querySelector('ul#tasks').appendChild(butt)
}, false);


function cb(button) {
  let a = button.id;
  document.querySelector(`li#${a}`).remove();
  document.querySelector(`button#${a}`).remove();
}
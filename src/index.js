document.addEventListener("DOMContentLoaded", () => {
});
  // your code here
  var newTaskForm = document.getElementById("create-task-form" ).addEventListener("submit",function(e){
     if(!isValid){
         e.preventDefault();    
   }
  });
 

// document.querySelector("create-task-form").addEventListener("submit", function(e){
//   if(!isValid){
//       e.preventDefault();    //stop form from submitting
//   }
// });




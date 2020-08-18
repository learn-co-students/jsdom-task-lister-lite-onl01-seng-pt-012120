document.addEventListener("DOMContentLoaded", () => {
  // todos management
  let myTodos = {
    todos: [],
    addTodo: function(description, priority) {
      this.todos.push({
        description: description,
        priority: priority
      });
      view.displayTodo();
    },
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
      view.displayTodo();
    }
  };

  // form data
  let formHandler = {
    addTodo: function() {
      const todoDescription = document.getElementById('new-task-description');
      const todoPriority = document.getElementById('priority');
      
      if (todoDescription.value.trim()) {
          myTodos.addTodo(todoDescription.value, parseInt(todoPriority.value));
      } else {
          alert('your input should not be empty')
          
      };
      todoDescription.value = '' ;
    }
  };

  // handling event and display todo
  let view = {
    displayTodo: function() {
      let ul = document.getElementById('tasks');
      ul.innerHTML = '';
      let sortedTodos = myTodos.todos.sort((a, b) => a.priority - b.priority);
      
      sortedTodos.forEach((todo, index)=> {
        const li = document.createElement('li');
        const br = document.createElement('br');
        li.id = index;
        li.innerHTML = todo.description;
        ul.appendChild(li);
        ul.appendChild(br);

        const deleteButton = this.addButtons('delete');
        
        if (todo.priority === 1) {
          li.style.backgroundColor = '#ff6347';
        } else if(todo.priority === 2) {
          li.style.backgroundColor = '#ffffe0';
        } else {
          li.style.backgroundColor = '#ADFF2F';
        };
        this.appendButtons(li);
      }, this);
      
    },

  childrenButtons: [],

  addButtons: function(classname) {
      const button = document.createElement('button');
      button.className = classname;
      button.textContent = classname;
      this.childrenButtons.push(button);
      return button;
  },
  appendButtons: function(element) {
      this.childrenButtons.forEach(button => {
          element.appendChild(button);
      });
      this.childrenButtons = [];
  },
    setUpEventListeners: function() {
      let form = document.getElementById('create-task-form');
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        formHandler.addTodo();
      });
      let ul = document.querySelector('ul');
      ul.addEventListener('click', function(event) {
        let elementClicked = event.target,
        position = parseInt(elementClicked.parentNode.id);
    
        if (elementClicked.className === 'delete') {
            if (confirm('would you like to delete that todo?')) {
                myTodos.deleteTodo(position);
            };
        } 
      })
    }
    };
    view.setUpEventListeners();
});

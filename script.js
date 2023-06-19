var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");
var tasks = [];

function addTask() {
  var taskText = taskInput.value;

  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    updateTaskList();
  }
}

function updateTaskList() {
  taskList.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    var buttonContain = document.createElement("div");
    buttonContain.classList.add("div-one");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function(index) {
      return function() {
        tasks[index].completed = this.checked;
        updateTaskList();
      };
    }(i));

    var span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) {
      span.classList.add("completed");
    }

    var buttonContainer = document.createElement("div");

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Deletar";
    deleteButton.classList.add("btn", "btn-danger", "ms-2");
    deleteButton.addEventListener("click", function(index) {
      return function() {
        tasks.splice(index, 1);
        updateTaskList();
      };
    }(i));

    var editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.classList.add("btn", "btn-primary", "ms-2");
    editButton.addEventListener("click", function(index) {
      return function() {
        var newText = prompt("Editar tarefa:", tasks[index].text);
        if (newText) {
          tasks[index].text = newText;
          updateTaskList();
        }
      };
    }(i));

    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(editButton);

    buttonContain.appendChild(checkbox);
    buttonContain.appendChild(span);

    listItem.appendChild(buttonContain);
    listItem.appendChild(buttonContainer);

    taskList.appendChild(listItem);
  }
}

function toggleTheme() {
  var body = document.body;
  var h1 = document.querySelector("h1");
  var formControl = document.querySelector(".form-control");
  var btnSuccess = document.querySelector(".btn-success");
  var btnPrimary = document.querySelector(".btn-primary");
  var taskList = document.getElementById("taskList");
  var listItems = taskList.getElementsByClassName("list-group-item");

  body.classList.toggle("dark-theme");
  h1.classList.toggle("dark-theme");
  formControl.classList.toggle("dark-theme");
  btnSuccess.classList.toggle("dark-theme");
  btnPrimary.classList.toggle("dark-theme");
  taskList.classList.toggle("dark-theme");

  for (var i = 0; i < listItems.length; i++) {
    listItems[i].classList.toggle("dark-theme");
  }
}

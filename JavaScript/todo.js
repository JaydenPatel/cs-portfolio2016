// Check browser support
var saveButton = document.getElementById("save");
saveButton.addEventListener("click", function() {
  if (typeof(Storage) !== "undefined") {
    // Store
    console.log("function Start");
    var incomplete = document.getElementById("incomplete-tasks");
    var complete = document.getElementById("completed-tasks");
    console.log(incomplete.innerHTML);
    console.log(complete.innerHTML);
    localStorage.setItem("incomplete-save", incomplete.innerHTML);
    localStorage.setItem("complete-save", complete.innerHTML);
  }
});
var retrieveButton = document.getElementById("retrieveButton");
retrieveButton.addEventListener("click", function() {
  //console.log(localStorage.getItem("lastname"))
  document.getElementById("incomplete-tasks").innerHTML = localStorage.getItem("incomplete-save");
  document.getElementById("completed-tasks").innerHTML = localStorage.getItem("complete-save");
});



var input = document.getElementById("new-task"); 
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasks = document.getElementById("incomplete-tasks");
var completedTasks = document.getElementById("completed-tasks");
var createNewTaskElement = function(taskString) {
  var listItem = document.createElement("li"); 
  var checkbox = document.createElement("input"); 
  var label = document.createElement("label"); 
  var editMode = document.createElement("input"); 
  var editButton = document.createElement("button"); 
  var deleteButton = document.createElement("button");

  //Modify each element
  checkbox.type = "checkbox"; 
  editMode.type = "text"; 
  editButton.innerText = "Edit"; 
  editButton.className = "edit"; 
  deleteButton.innerText = "Delete"; 
  deleteButton.className = "delete"; 
  label.innerText = taskString;


  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editMode);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem; 
}

var addTask = function() { 
  var listItem = createNewTaskElement(input.value);
  incompleteTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  input.value = "";
}



var editTask = function() { 
  var listItem = this.parentNode;

  var inputEditMode = listItem.querySelector("input[type=text]")
  var label = listItem.querySelector("label");

  var editClass = listItem.classList.contains("editMode");
  if (editClass) {
    label.innerText = inputEditMode.value;
  }
  else {
    inputEditMode.value = label.innerText;
  }
  listItem.classList.toggle("editMode");
}



var deleteTask = function() {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}

var taskCompleted = function() { 
  var listItem = this.parentNode;
  completedTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

var taskIncomplete = function() {
  var listItem = this.parentNode; 
  incompleteTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  // console.log("test")
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  editButton.onclick = editTask; 
  deleteButton.onclick = deleteTask; 
  checkBox.onchange = checkBoxEventHandler;
}

addButton.addEventListener("click", addTask);

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



var input = document.getElementById("new-task"); // Anything with the id of "new-task" now becomes the varibale "taskInput". 
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasks = document.getElementById("incomplete-tasks");
var completedTasks = document.getElementById("completed-tasks");
var createNewTaskElement = function(taskString) {
  var listItem = document.createElement("li"); //Creates new list item
  var checkbox = document.createElement("input"); //Makes the checkbox a variable/input.
  var label = document.createElement("label"); //Labels
  var editMode = document.createElement("input"); //Creates an edit mode
  var editButton = document.createElement("button"); //Activated edit mode
  var deleteButton = document.createElement("button"); //Creates a delete button
  // var importantTasks = document.getElementById("importantTasks");
  //Modify each element
  checkbox.type = "checkbox"; //Defines the input as "checkbox"
  editMode.type = "text"; //Defines the type of input as "text"
  editButton.innerText = "Edit"; //Names the button/text
  editButton.className = "edit"; // Used to style edit button.
  deleteButton.innerText = "Delete"; //Names the button/text 
  deleteButton.className = "delete"; //Used to style delete button
  label.innerText = taskString;
  // starImportant.type = "checkbox"; //Defines the input as "checkbox"


  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editMode);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem; //Lists the items
}

/* document.onkeyup = function(e) {
  var e = e || window.event; // for IE to cover IEs window object
  if (e.ctrlKey && e.which == 66) {
  }
} */



var addTask = function() { //Adds a new task
  var listItem = createNewTaskElement(input.value);
  incompleteTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  input.value = "";
}



var editTask = function() { // Edits an already made task
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

var taskCompleted = function() { // Shows that the task is complete
  var listItem = this.parentNode;
  completedTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

var taskIncomplete = function() {
  var listItem = this.parentNode; //Activates when the checkbox is really checked
  incompleteTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

/* var taskImportant = function() {
  var listItem = this.parentNode; //Activates when the checkbox is really checked
  incompleteTasks.appendChild(listItem);
  bindTaskEvents(listItem, importantTask);
} */


var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  // console.log("test")
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  // var checkBox2 = taskListItem.querySelector("importantTasks");

  editButton.onclick = editTask; //connects edit task to the edit button
  deleteButton.onclick = deleteTask; //connectes delete task to the delete button
  checkBox.onchange = checkBoxEventHandler;
}

addButton.addEventListener("click", addTask);

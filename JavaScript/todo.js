var input = document.getElementById("new-task"); // Anything with the id of "new-task" now becomes the varibale "taskInput". 
var addButton = document.getElementsByTagName("button")[0];
var finishedButton = document.getElementById("incomplete-tasks");
var completedTasks = document.getElementById("completed-tasks");
var createNewTaskElement = function(taskString) {
var listItem = document.createElement("li"); //Creates new list item
var checkbox = document.createElement("input"); //Makes the checkbox a variable/input.
var label = document.createElement("label"); //Labels
var editMode = document.createElement("input"); //Creates an edit mode
var editButton = document.createElement("button"); //Activated edit mode
var deleteButton = document.createElement("button"); //Creates a delete button

  //Modify each element
  checkbox.type = "checkbox"; //Defines the input as "checkbox"
  editMode.type = "text"; //Defines the type of input as "text"
  editButton.innerText = "Edit"; //Names the button/text
  editButton.className = "edit"; // Used to style edit button.
  deleteButton.innerText = "Delete"; //Names the button/text 
  deleteButton.className = "delete"; //Used to style delete button
  label.innerText = taskString;


  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editMode);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem; //Lists the items
}

var addTask = function() { //Adds a new task
  var listItem = createNewTaskElement(input.value);
  finishedButton.appendChild(listItem);
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

var taskCompleted = function() { // SHows that the task is complete
  var listItem = this.parentNode;
  completedTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

var taskIncomplete = function() {
  var listItem = this.parentNode; //Activates when the checkbox is really checked
  finishedButton.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  // console.log("test")
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  editButton.onclick = editTask; //connects edit task to the edit button
  deleteButton.onclick = deleteTask; //connectes delete task to the delete button
  checkBox.onchange = checkBoxEventHandler;
}

addButton.addEventListener("click", addTask);

for (var i = 0; i < finishedButton.children.length; i++) {
  bindTaskEvents(finishedButton.children[i], taskCompleted);
}
for (var i = 0; i < completedTasks.children.length; i++) {
  bindTaskEvents(completedTasks.children[i], taskIncomplete);
}

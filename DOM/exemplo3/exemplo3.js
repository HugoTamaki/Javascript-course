// criar uma TODO list

var todoList = ["Fazer dever de casa", "tomar banho", "limpar a casa"];

function fillTodoList() {
  var todoHtml = "";
  for (var i=0;i<todoList.length;i++) {
    todoHtml += "<li>" + todoList[i] + "</li>"
  }

  document.getElementById('todo-list').innerHTML = todoHtml;
}

function fillSelect() {
  var selectHtml = "<option value='--'>--</option>";
  for (var i=0;i<todoList.length;i++) {
    selectHtml += "<option value='" + i + "'>" + todoList[i] + "</option>"
  }

  document.getElementById('select').innerHTML = selectHtml;
}

function addAction() {
  var action = document.getElementById('action').value;
  if (action !== "") {
    todoList.push(action);
    fillTodoList();
    fillSelect();
    document.getElementById('action').value = "";
  }
}

// function doAction() {
//   todoList.shift();
//   fillTodoList();
// }

function doAction() {
  var select = document.getElementById('select');
  var position = select.selectedIndex;

  if (position > 0) {
    todoList.splice(position - 1, 1);
    fillTodoList();
    fillSelect();    
  }
}
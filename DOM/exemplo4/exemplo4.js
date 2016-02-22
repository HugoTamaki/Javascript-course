// criar uma TODO list usando objetos (mais parametros)

var todoList = [
  {
    text: 'Limpar a casa',
    date: new Date(),
    dificulty: 3
  },
  {
    text: 'Fazer dever',
    date: new Date(),
    dificulty: 2
  },
  {
    text: 'Programar',
    date: new Date(),
    dificulty: 1
  }
];

function fillTodoList() {
  var todoHtml = "";
  for (var i=0;i<todoList.length;i++) {
    todoHtml += "<tr>";
    todoHtml += "<td>" + todoList[i].text + "</td>";
    todoHtml += "<td>" + formatDate(todoList[i].date) + "</td>";
    todoHtml += "<td>" + todoList[i].dificulty + "</td>";
    todoHtml += "</tr>";
  }

  document.getElementById('todo-list').innerHTML = todoHtml;
}

function formatDate(date) {
  return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes();
}

function addAction() {
  var action = document.getElementById('action').value;
  var dificulty = document.getElementById('dificulty').value;
  obj = {
    text: action,
    date: new Date(),
    dificulty: dificulty
  }
  todoList.push(obj);
  fillTodoList();
}

function doAction() {
  todoList.shift();
  fillTodoList();
}
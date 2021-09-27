var newTask = document.getElementById("newTask");
var savebtn = document.getElementById("savebtn");
var data = [];

if (localStorage.getItem("Task") != null) {
    window.onload = function () {
        data = JSON.parse(localStorage.getItem('Task'));
    }    
  }
// console.log((localStorage.getItem('Task')));


function createTodo(title,date,status) {
    this.title = title;
    this.date = date;
    this.status = status;
}

savebtn.addEventListener('click',function() {
    let today = new Date().toLocaleDateString()
    let todo_object = new createTodo(newTask.value,today,false);
    data.push(todo_object);
    // console.log(data);
    // console.log(data);
    localStorage.setItem("Task",JSON.stringify(data));
    window.location.href = "./index.html"
});







 
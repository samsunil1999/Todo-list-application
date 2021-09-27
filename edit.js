window.onload = function () {
    var todo_content = document.getElementById("todo_content");
    var editTask = document.getElementById("editTask");
    var updatebtn = document.getElementById("updatebtn");
    var data = [];
}


data = JSON.parse(localStorage.getItem('Task'));


var url_string = window.location.href;
var url = new URL(url_string);
var index = url.searchParams.get("index");



// console.log(index);

todo_content.innerHTML +=
    `<div class="text-input">
        <input id="editTask" type="text" placeholder=" Enter Todo Title..." value="${data[index].title}">
    </div>

    <div class="btns">
        <div class="save-button">
            <button id="updatebtn">UPDATE</button>
        </div>

        <div class="delete-button">
            <button><a href="./index.html">CANCEL</a></button>
        </div>
    </div>`;



updatebtn.addEventListener('click', function () {
    let today = new Date().toLocaleDateString()
    data[index].title = editTask.value;
    // console.log(data);
    localStorage.setItem("Task",JSON.stringify(data));
    window.location.href ='./index.html';
});






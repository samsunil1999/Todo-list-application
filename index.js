var todo_content = document.getElementById("todo_content");
var todo_list= [];
window.onload = function (){
    todo_list = JSON.parse(localStorage.getItem('Task'));
    console.log(todo_list);
    

    for(var i=0;i<todo_list.length;i++){
        
        todo_content.innerHTML +=`<div class="entry">
        <div class="left">
        <div class="checkbox">
        <input id="checkbox_${i}" type="checkbox" onclick="changeStatus(${i})"> 
        </div>
        <div class="details">
        <p id="text">${todo_list[i].title}</p>
        <p id="date">${todo_list[i].date}</p>
        </div>
        </div>
        
        <div class="right">
        <img src="./img/more.svg" alt="">
        <div class="dropdown-content">
        <div class="drop-opt-1">
        <a href="./edit.html?index=${i}">Edit</a>
        </div>
        <div class="drop-opt-2">
        <a onclick="deleteEntry(${i})">Delete</a>
        </div>
        </div>
        </div>
        </div>`;
        if(todo_list[i].status == true)
            document.getElementById('checkbox_'+i).setAttribute('checked','checked');
        
    }

};

function changeStatus(index) {
    if(todo_list[index].status == false){
        todo_list[index].status = true;
    }else {
        todo_list[index].status = false;
    }
    localStorage.setItem("Task",JSON.stringify(todo_list));
    // console.log(todo_list);
}

function deleteEntry(index) {
    todo_list.splice(index,1);
    // console.log(todo_list);
    localStorage.setItem("Task",JSON.stringify(todo_list));
    location.reload();
}


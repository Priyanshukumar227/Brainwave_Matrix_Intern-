function AddTodo(){

    const todoinput=document.getElementById("inputbtn");
    const trimtext=todoinput.value.trim();

    if(trimtext===""){
        alert("Enter a task..");
        return;
    }

        const emptylist=document.createElement("li");
        emptylist.textContent=trimtext;

        const todolistitems=document.getElementById("todolistitems");

        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            todolistitems.removeChild(emptylist);
        };


        emptylist.appendChild(deleteButton);
        todolistitems.appendChild(emptylist);

        todoinput.value="";
}

document.getElementById("inputbtn").addEventListener("keydown",function(event){
    if(event.key=== 'Enter'){
        AddTodo();
    }
})



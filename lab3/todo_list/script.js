

function logHistory(action){
    let historyList = document.getElementById("historyList");
    let historyItem = document.createElement("li");
    historyItem.innerText = action;
    historyList.appendChild(historyItem);
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function () {
        li.classList.toggle("done", checkbox.checked);
    };
    
    let span = document.createElement("span");
    span.textContent = taskText;

    checkbox.onchange = function () {
        span.classList.toggle("done", checkbox.checked);
        logHistory('Task done');
    };
    
    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function () {
        li.remove();
        logHistory('Task deleted');
    };
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    logHistory('Task added');
    taskInput.value = "";
    
}
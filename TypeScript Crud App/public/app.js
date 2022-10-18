"use strict";
let inputTaskElement = document.getElementById("input-task");
let addTaskBtn = document.getElementById("add-btn");
let ulElement = document.getElementById("list-container");
// let tasks: TasksType[] = [];
// type TasksType = {
//   content: string;
// };
let taskButtonAction = "add";
let taskID = "";
addTaskBtn.onclick = () => {
    if (taskButtonAction === "add") {
        addTask();
    }
    else {
        addUpdatedTask(taskID);
    }
};
function addTask() {
    if (inputTaskElement.value) {
        let createTODOList = document.createElement("li");
        createTODOList.id = Math.random().toString(36).slice(2, -1);
        let todoUpdateBtn = document.createElement("button");
        todoUpdateBtn.setAttribute("onclick", "updateTask(this)");
        let updateBtnText = document.createTextNode("Update");
        todoUpdateBtn.appendChild(updateBtnText);
        let todoDeleteBtn = document.createElement("button");
        todoDeleteBtn.setAttribute("onclick", "deleteList(this)");
        let deleteBtnText = document.createTextNode("Delete");
        todoDeleteBtn.appendChild(deleteBtnText);
        createTODOList.append(inputTaskElement.value, todoUpdateBtn, todoDeleteBtn);
        ulElement.prepend(createTODOList);
        // tasks.unshift({content:inputTaskElement.value})
        inputTaskElement.value = "";
    }
}
function addUpdatedTask(id) {
    let listElement = document.getElementById(id);
    listElement.firstChild.nodeValue = inputTaskElement.value;
    inputTaskElement.value = "";
    taskButtonAction = "add";
    addTaskBtn.innerText = "Add";
    taskID = "";
}
function deleteList(elem) {
    var _a;
    (_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
}
function updateTask(elem) {
    inputTaskElement.value = elem.parentNode.firstChild.nodeValue;
    taskButtonAction = "update";
    addTaskBtn.innerText = "Update";
    taskID = elem.parentElement.id;
    //   elem!.parentElement!.firstChild!.nodeValue = "klhorrrro";
}

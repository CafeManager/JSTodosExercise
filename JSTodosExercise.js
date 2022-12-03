const form = document.querySelector("#myform");
const todoList = document.querySelector("#todo");

if (localStorage.getItem("html")) {
    todoList.innerHTML = localStorage.getItem('html');
    for (let x = 0; x < todoList.children.length; x++) {
        const removeToAddButton = document.createElement('button');
        const removeTarget = todoList.children[x].children[0];
        removeToAddButton.innerText = 'remove';
        removeTarget.addEventListener('click', function (e) {
            removeTarget.parentElement.remove();
            localStorage.setItem(`html`, todoList.innerHTML);
        })
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // create a todo to add
    const newTodoValue = e.target[0].value;
    const newTodo = document.createElement('li');

    //remove
    const removeButton = document.createElement('button')
    newTodo.innerText = newTodoValue;
    removeButton.innerText = 'remove';
    removeButton.addEventListener('click', function (e) {
        removeButton.parentElement.remove();
        localStorage.setItem(`html`, todoList.innerHTML);
    })
    //append remove to new todo
    newTodo.append(removeButton);

    //append new todo to website
    todoList.append(newTodo);
    localStorage.setItem(`html`, todoList.innerHTML);

})

todoList.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.id == "todo") {
        return
    }
    if (e.target.style.textDecoration == "line-through") {
        e.target.style.textDecoration = "none";
    } else {
        e.target.style.textDecoration = "line-through";
    }
    localStorage.setItem(`html`, todoList.innerHTML);
})


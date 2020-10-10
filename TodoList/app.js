//Selectors
const todo_input = document.querySelector(".todo-input");
const todo_button = document.querySelector(".todo-button");
const todo_list = document.querySelector(".todo-list");
const filterOption = document.querySelector(".todo-filter");
//Event Listener
document.addEventListener("DOMContentLoaded", getTodos);
todo_button.addEventListener("click", addTodo);
todo_list.addEventListener("click", delete_Check);
filterOption.addEventListener("click", filterTodo);
//Functions
function addTodo(e) {
    //console.log("hello") funktioniert nicht, da per default die Seite neu geladen wird, daher:
    e.preventDefault();
    //console.log("Hello")
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todo_input.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo); //stopft das newTodo in das div
    //add todo to local storage
    saveLocalTodos(todo_input.value);
    //Mark Button
    const completedButton = document.createElement("Button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>"; //wichtig: innerHTML, nicht Text
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Trash Button
    const trashButton = document.createElement("Button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>"; //wichtig: innerHTML, nicht Text
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to the correct list (sonst wuerde unser div einfach ans ende des html kommen)
    todo_list.appendChild(todoDiv);

    //clear todo input value
    todo_input.value = "";
}

function delete_Check(e) {
    //console.log(e.target)//sollte immer ein erster Schritt sein, damit man weiß, worauf man hier eig. clickt, hier: -> das <i> icon element
    const item = e.target;
    //delete
    if (item.classList[0] === "trash-btn") {
        //item.remove(); wuerde lediglich den Button removen
        const todo = item.parentElement;
        //um die Loesch-Animation schoener zu machen:
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function() {
            todo.remove()
        });
    }
    //check
    if (item.classList[0] === "complete-btn") {
        //item.remove(); wuerde lediglich den Button removen
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

//
function filterTodo(e) {
    const todos = todo_list.childNodes;
    //console.log(todos)
    todos.forEach(function(todo) {
        //der value hier wird sein, was in dem value der options im Select (s. html) steht.
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "none";
                } else {
                    todo.style.display = "flex";
                }
                break;
        }
    });
}



//save the todos to the local storage

function saveLocalTodos(todo) {
    let todos;
    //check
    if (localStorage.getItem("todos")===null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem("todos")===null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //create LI
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo); //stopft das newTodo in das div
        //Mark Button
        const completedButton = document.createElement("Button");
        completedButton.innerHTML = "<i class='fas fa-check'></i>"; //wichtig: innerHTML, nicht Text
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //Trash Button
        const trashButton = document.createElement("Button");
        trashButton.innerHTML = "<i class='fas fa-trash'></i>"; //wichtig: innerHTML, nicht Text
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        //Append to the correct list (sonst wuerde unser div einfach ans ende des html kommen)
        todo_list.appendChild(todoDiv);
    })
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos")===null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    //console.log(todo); //mal wieder um zu sehen, was man hier eig als input kriegt. -> in diesem Fall <div class="todo fall">
    //console.log(todo.children[0].innerText); //gibt wieder, was wir wollen, den Text des Elements
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1); //die 1 steht fuer 1 gespliced (entfernt) Element
    localStorage.setItem("todos", JSON.stringify(todos));
}
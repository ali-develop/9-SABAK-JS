const input = document.querySelector("#input-todo");
const add = document.getElementById("add");
const ulTag = document.querySelector(".list");

add.onclick = () => {
    const todoText = input.input.value;
    input.value = "";
    //  addTodo()
}

function addTodo(todoText) {
    const liTag = document.createElement("li");
    liTag.innerHTML =todoText;
    ulTag.appendChild(liTag);

    const done = document.createElement("dutton");
    liTag.appendChild(done);
    done.
    innerHTML='done'

    
}
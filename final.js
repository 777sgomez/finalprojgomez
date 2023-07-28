let todo = [];
let deleteButton = document.createElement("button");
let checkButton = document.createElement("button");
let input = document.getElementById("todoInput");
const ul = document.querySelector("ul");

document.querySelector('form').addEventListener("submit", function(event) {
    event.preventDefault();
    let todoInput = input.value;
    if (todoInput) {
        let li = document.createElement("li");
        li.textContent = todoInput;
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        let checkButton = document.createElement("button");
        checkButton.innerText = "Check";
        checkButton.addEventListener("click", function() {
            document.querySelector("li").style.textDecoration = "line-through";
        });

        li.appendChild(checkButton);
        li.appendChild(deleteButton);
        ul.appendChild(li);
    };
});
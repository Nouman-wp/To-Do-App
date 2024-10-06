let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    if (inp.value.trim() === "") {
        alert("Please add a Task , Idiot");
        return;
    }

    let item = document.createElement("li");
    item.innerText = inp.value; 

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete Task";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = ""; 
}); 

ul.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    } 
});



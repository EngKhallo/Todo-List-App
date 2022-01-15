function addTodo() {
  const input = document.querySelector("input");
  const value = input.value;

  // form validation
  if (value == "") {
    return; // stop here!
  }

  // todo addition functionality
  let container = document.createElement("div");
  container.className = "flex justify-between items-center";

  let title = document.createElement("h3");
  title.className = "text-xl";
  title.textContent = value;

  let doneButton = document.createElement("button");
  doneButton.className = "bg-green-500 py-2 px-4 rounded font-semibold";
  doneButton.textContent = "Done";
  doneButton.onclick = markAsDone;

  container.appendChild(title);
  container.appendChild(doneButton);
  // container.appendChild(deleteButton);
  // container.deleteButton.className = 'hidden';

  const todosContainer = document.querySelector("#todosContainer");
  todosContainer.appendChild(container);

  input.value = "";
}

function markAsDone(event) {
  let clickedbtn = event.target;
  clickedbtn.className = "hidden";
//   deleteTodo();

  // console.log("The parent of this div is: ", clickedbtn.parentNode);

  let todoItems = clickedbtn.previousElementSibling;  
  todoItems.classList.add("line-through");
}

let deleteButton = document.createElement("button");
deleteButton.className = "bg-green-500 py-2 px-4 rounded font-semibold";
deleteButton.textContent = "Delete";
// deleteButton.classList.add("show");


function deleteTodo() {
 let delbtn = deleteButton();
 for(let i=0; i<delbtn.length; i++){
     delbtn[i].onclick = function(){
         this.parentElement.remove();
     }
 }
}

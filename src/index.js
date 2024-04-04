document.addEventListener("DOMContentLoaded", () => {
  // your code here 
 
const userInput = document.getElementById("new-task-description") 
const form = document.getElementById("create-task-form") 
const list = document.getElementById("tasks")  

form.addEventListener(`submit`,(e)=> handleSubmit(e)) 

function handleSubmit(e) { 
e.preventDefault() 
const li = document.createElement("li") 
li.textContent = userInput.value 

if (userInput.value !== ""){ 
  list.appendChild(li)
}

}















}); 

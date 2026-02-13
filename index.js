

const input = document.getElementById("myinput");
const buttons = document.getElementById("mybutton");
const List = document.getElementById("mylist");



buttons.addEventListener("click", ()=>{


    if(input.value.trim() === ""){
    window.alert("empty input!");
    return; 
}

    else{
        let li = document.createElement("li");
   let deletebtn = document.createElement("button");
   let editbtn = document.createElement("button");
      let span = document.createElement("span");
   let container = document.createElement("div");
span.textContent = input.value;
deletebtn.innerHTML =  '<i class="fa-regular fa-trash-can"></i>';

editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>';

container.appendChild(deletebtn);
container.appendChild(editbtn);
li.appendChild(span);
li.appendChild(container);
List.appendChild(li);


input.value = "";

deletebtn.addEventListener("click", ()=>{
    li.remove(input.textContent);
})
editbtn.addEventListener("click",()=>{
    let newvalue = window.prompt("Edit your product!");
    span.textContent = newvalue;
})
}});
    



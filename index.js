

const input = document.getElementById("myinput");
const button = document.getElementById("mybutton");
const List = document.getElementById("mylist");



button.addEventListener("click", ()=>{
let li = document.createElement("li");
li.id="li";
li.textContent = input.value;
List.append(li);
input.value = "";
});

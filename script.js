var bottun = document.getElementById("enter"); 
var input = document.getElementById("userinput"); 
var ul = document.querySelector("ul");
var deleteBtn = document.getElementById("battonn"); 

function InputLength(){
	return input.value.length;
}


	
deleteBtn.addEventListener("click", removeParent, false);


function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

function createListElement() {
	var li = document.createElement("li");
	var buttons = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(buttons)
		buttons.innerHTML = " X ";
		input.value = "";

		buttons.onclick = removeParent;

		buttonListElement();
}

function addListAfterClick() {
	if(InputLength() > 0){
		createListElement();
	}
}


var taggleLi = document.querySelectorAll("li");	
 function toggleLi(e) {
	if (e.target.tagName === "LI"){
    e.target.classList.toggle("done");
  }
}


function addListAfterKeypress(event) {
	if(InputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}


function buttonListElement(){
	var buttons = document.querySelectorAll('li buttons');
	for( i=0; i<buttons.length; i++){
	buttons[i].addEventListener('click', clearElement)
	}
}

function clearElement(){
	for(var i=0; i<li.length; i++){
		this.parentNode.remove();
	}
}

input.addEventListener("keypress", addListAfterKeypress);
bottun.addEventListener("click", addListAfterClick);
ul.addEventListener("click", toggleLi);

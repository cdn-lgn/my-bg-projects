var result = document.getElementById('result');

function display(number){
	result.value += number;
}

function equal(){
	var equal = result.value;
	var final = eval(equal);
	result.value = final;
}
function clr(){
	result.value = "";
}
function del(){
	result.value = result.value.slice(0,-1)
}
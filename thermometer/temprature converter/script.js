const change =() =>{
	let output = document.getElementsByClassName('result_output')[0];
	const num = +document.getElementsByClassName('num')[0].value;
	const selected = +document.getElementsByClassName('selected')[0].value;
	let result_val = 0;
	if(selected == 1){
		result_val = Math.round((num*9)/5+32);
		output.innerText = `${result_val} Fahrenheit`;
		console.log("hel")
	}
	else{
		result_val = Math.round((num-32)/9*5);
		output.innerText = `${result_val} Celsius`;
	}

}
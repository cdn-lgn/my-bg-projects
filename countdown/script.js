const endDate = '26 Decm 2023 12:00:00 AM'
console.log(endDate)

document.querySelector('.heading').innerText = endDate;
const input = document.querySelectorAll('input');

function clock () {
	// body... 
	const end = new Date(endDate);
	const now = new Date();
	const diff = (end - now)/1000;

	if(diff < 0 ){
		return;
	}
	input[0].value = Math.floor(diff/3600);
	input[1].value = Math.floor(diff/60)%60;
	input[2].value = Math.floor(diff)%60;
}

setInterval(clock,1000)
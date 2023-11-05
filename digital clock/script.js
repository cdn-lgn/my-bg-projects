console.log('hell')
function clock () {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	let am = 'AM'
	if(hour>12){
		hour = hour-12
		am = 'PM';
	}
	if(hour<10){
		hour = `0${hour}`
	}
	if(min<10){
		min = `0${min}`
	}
	if(sec<10){
		sec = `0${sec}`
	}
	document.querySelector('.clock_parts').innerText = `${hour} : ${min} : ${sec} ${am}`;
}
setInterval(clock,1000);
clock();
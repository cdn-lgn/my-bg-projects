console.log('hell')
let hour = document.querySelector('.hr')
let min = document.querySelector('.mn')
let sec = document.querySelector('.sc')
const rotate = () =>{
	let time = new Date()
	let hrs = time.getHours()
	hrs = (((hrs*60)/12)*6)+90
	let mins = time.getMinutes()
	mins = (mins*6)+90
	let sc = time.getSeconds()
	sc = (sc*6)+90

	hour.style.rotate = `${hrs}deg`
	min.style.rotate = `${mins}deg`
	sec.style.rotate = `${sc}deg`
}
setInterval(rotate,1000)
rotate();
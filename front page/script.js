console.log('hell')
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let navop = document.querySelector(".nav_op")

left.addEventListener('click',()=>{
	if(navop.style.right= '-100%'){
		console.log('maro')
		navop.style.right= '0%';
		left.style.visibility = 'hidden';
		right.style.visibility = 'visible';
	}
})
right.addEventListener('click',()=>{
	if(navop.style.right= '0%'){
		console.log('maro')
		navop.style.right= '-100%';
		left.style.visibility = 'visible';
		right.style.visibility = 'hidden';
	}
})
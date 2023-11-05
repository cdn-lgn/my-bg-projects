console.log('hello');
let box = document.querySelector('.box');
let span = document.querySelector('span');
let btn = document.querySelector('button')
let a = document.querySelector('a')
box.addEventListener('mouseenter',()=>{
	console.log('its work')
	span.style.position = 'absolute';
	span.style.height = '550px';
	span.style.width = '400px'
	span.style.top = '-70px'
	span.style.right = '-70px'
	btn.style.background = 'white'
	a.style.color = 'black'

})
box.addEventListener('mouseleave',()=>{
	console.log('its work')
	span.style.position = 'absolute';
	span.style.height = '100px';
	span.style.width = '100px';
	span.style.top = '-50px'
	span.style.roght = '-50px'
	btn.style.background = 'black'
	a.style.color = 'white'
})

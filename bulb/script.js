// let main = document.querySelector('.main');
// // main.classList.add('header');
// // main.classList.remove('header');
// let h1_tag = document.createElement('h1');
// main.appendChild(h1_tag);
// h1_tag.innerHTML = "Hey I am here"


// let h11_tag = document.createElement('h2')
// main.insertAdjacentElement('afterbegin',h11_tag)
// h11_tag.innerHTML = "I am second one"


let bulb = document.querySelector('.bulb')
let btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
	if (bulb.src.match('off')) {
		// statement
		bulb.src = './on.png';
		btn.innerHTML = 'Turn OFF'
	} else {
		// statement
		bulb.src = './off.png';
		btn.innerHTML = 'Turn ON'
	}
})

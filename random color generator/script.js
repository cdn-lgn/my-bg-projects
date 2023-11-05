getcolor = () =>{
	const getnumber = Math.floor(Math.random()*16777215);
	const getclr = '#'+getnumber.toString(16);
	document.getElementById("colorcode").textContent= getclr;
	document.body.style.backgroundColor = getclr;
	navigator.clipboard.writeText(getclr);
}
document.getElementById("btn").addEventListener("click",getcolor)
getcolor();
console.log("he")
const icn = document.getElementsByClassName('icn')[0];
const change = () =>
{
	icn.src = "icon/empty.svg";
	setTimeout(()=>{
		icn.src = "icon/1.svg";
	}, 1000)
	setTimeout(()=>{
		icn.src = "icon/2.svg";
	}, 2000)
	setTimeout(()=>{
		icn.src = "icon/3.svg";
	}, 3000)
	setTimeout(()=>{
		icn.src = "icon/full.svg";
	}, 4000)
}
change();
setInterval(change, 5000)

let mainDiv = document.querySelector("main");
let newNote = document.querySelector('.new_btn');


// update function
const updateData = ()=>{
	const textAreaData = document.querySelectorAll('textarea');
	let notes = []
	textAreaData.forEach((note)=>{
		return notes.push(note.value);
	})
	localStorage.setItem('notes',JSON.stringify(notes))
	
}

//local storage


const newNoteFun = (text = "") =>{
	let note = document.createElement('div');
	note.classList.add("note");
	let html = `<div class="options">
					<img src="edit.png" class="edit" alt="">
					<img src="delete.png" class="delete" alt="">
				</div>
				<div class="front_div showArea ${text ? "":"hidden"}">
				</div>
				<textarea class="front_div textArea ${text ? "hidden" : ""}"></textarea>`;
	note.insertAdjacentHTML('afterbegin',html);
	mainDiv.appendChild(note);


	//reffrences
	let editBtn = note.querySelector(".edit");
	let deleteBtn = note.querySelector(".delete");
	let textArea = note.querySelector("textarea");
	let showArea = note.querySelector(".showArea");
	let options = note.querySelector(".options")

	//delete note
	deleteBtn.addEventListener('click',()=>{
		options.parentElement.remove();
		updateData();
	})


	//edit btn
	textArea.value = text;
	showArea.innerHTML = text;
	editBtn.addEventListener("click",()=>{
		showArea.classList.toggle("hidden")
		textArea.classList.toggle("hidden")
	})



	//function for send text textarea to showArea
	textArea.addEventListener("change", (event)=>{
		const value = event.target.value;
		showArea.innerHTML = value;
		updateData();
	})



}
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){notes.forEach(note=>newNoteFun(note))}
	


newNote.addEventListener('click', ()=>{
	newNoteFun();
})
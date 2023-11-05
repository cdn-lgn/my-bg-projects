let audioElement = new Audio('song/Badnam.mp3');
let mainplay = document.getElementsByClassName('mainplay')[0];
let progressBar = document.getElementById('ProgressBar');
let song = Array.from(document.getElementsByClassName('song'));
let miniPlay = Array.from(document.getElementsByClassName('min_play'));
let next = document.getElementsByClassName('next')[0];
let prev = document.getElementsByClassName('prev')[0];
let indexbox = 0;

// console.log(miniPlay);

let songs = [
	{songname:'Badnam',filepath:'song/Badnam.mp3',thumb:"img/img1.jpeg", dur_time:"03:23"},
	{songname:'Dil ki bat',filepath:'song/Dil Ki Baat.mp3',thumb:"img/img2.jpeg", dur_time:"03:02"},
	{songname:'Tarasti ',filepath:'song/Tarasti Hai Nigahen.mp3',thumb:"img/img3.jpeg", dur_time:"03:58"},
	{songname:'Fairytale',filepath:'song/Fairytale.mp3',thumb:"img/img4.jpg", dur_time:"03:02"},
	{songname:'Badnam',filepath:'song/Badnam.mp3',thumb:"img/img1.jpeg", dur_time:"03:23"},
	{songname:'Dil ki bat',filepath:'song/Dil Ki Baat.mp3',thumb:"img/img2.jpeg", dur_time:"03:02"},
	{songname:'Tarasti ',filepath:'song/Tarasti Hai Nigahen.mp3',thumb:"img/img3.jpeg", dur_time:"03:58"},
	{songname:'Fairytale',filepath:'song/Fairytale.mp3',thumb:"img/img4.jpg", dur_time:"03:02"},
	{songname:'Badnam',filepath:'song/Badnam.mp3',thumb:"img/img1.jpeg", dur_time:"03:23"},
	{songname:'Dil ki bat',filepath:'song/Dil Ki Baat.mp3',thumb:"img/img2.jpeg", dur_time:"03:02"}
];

song.forEach(( element,ind) =>{
	element.getElementsByClassName("name")[0].innerText = songs[ind].songname;
	element.getElementsByClassName("song_img")[0].src = songs[ind].thumb;
	element.getElementsByClassName('time')[0].innerText = songs[ind].dur_time;
	
});
mainplay.addEventListener('click', ()=>{
	if(audioElement.paused || audioElement.currentTime<=0){
		audioElement.play();
		mainplay.src = 'icon/pause.png';
	}
	else{
		audioElement.pause();
		mainplay.src = 'icon/play.png';
	}
});

audioElement.addEventListener('timeupdate',()=>{
	let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
	progressBar.value = progress; 
});

miniPlay.forEach((element,index)=>{
	miniPlay[index].addEventListener('click',()=>{
		audioElement.src = songs[index].filepath;
		audioElement.play();
		document.getElementsByClassName('main_thumb')[0].src = songs[index].thumb;
		document.getElementsByClassName('main_name')[0].innerText = songs[index].songname;
		songs.forEach((element,index)=>{
			document.getElementsByClassName('min_play')[index].src = 'icon/play.png'
		})
		miniPlay[index].src = 'icon/pause.png';
		if(audioElement.paused || audioElement.currentTime<=0){
			audioElement.play();
			mainplay.src = 'icon/pause.png';
		}
		else{
			audioElement.pause();
			mainplay.src = 'icon/play.png';
		}
	})
})



progressBar.addEventListener('change',()=>{
	audioElement.currentTime =(progressBar.value*audioElement.duration)/100;
});


next.addEventListener('click',()=>{
	if(indexbox>=9){
		indexbox=0;
	}
	else{
		indexbox += 1;
		audioElement.src = songs[indexbox].filepath;
		audioElement.play();
		songs.forEach((element,index)=>{
			document.getElementsByClassName('min_play')[index].src = 'icon/play.png'
		})
		document.getElementsByClassName('main_thumb')[0].src = songs[indexbox].thumb;
		document.getElementsByClassName('main_name')[0].innerText = songs[indexbox].songname;
		miniPlay[indexbox].src = 'icon/pause.png';
		mainplay.src = 'icon/pause.png';
	}
})
prev.addEventListener('click',()=>{
	if(indexbox<=0){
		indexbox=9;
	}
	else{
		indexbox -= 1;
		audioElement.src = songs[indexbox].filepath;
		audioElement.play();
		songs.forEach((element,index)=>{
			document.getElementsByClassName('min_play')[index].src = 'icon/play.png'
		})
		document.getElementsByClassName('main_thumb')[0].src = songs[indexbox].thumb;
		document.getElementsByClassName('main_name')[0].innerText = songs[indexbox].songname;
		miniPlay[indexbox].src = 'icon/pause.png';
		mainplay.src = 'icon/pause.png';
	}
})
// console.log("Welcome to Spotify");

// //Initialize the variable
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songItemsPlay= Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    {songName:  "O_Saki_Saki" , filePath: "song/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Odhani-Made_in_China" , filePath: "song/2.mp3" , coverPath: "covers/2.jpg"},
    {songName: "Ok_Janu_Title_Track" , filePath: "song/3.mp3" , coverPath: "covers/3.jpg"},
    {songName: "Pehli_Baar" , filePath: "song/4.mp3" , coverPath: "covers/4.jpg"},
    {songName:  "Qaafirana", filePath: "song/5.mp3" , coverPath: "covers/5.jpg"},
    {songName: "Sab_Tera" , filePath: "song/6.mp3" , coverPath: "covers/6.jpg"},
    {songName: "Samjhawan" , filePath: "song/7.mp3" , coverPath: "covers/7.jpg"},
    {songName: "Sau_Aasmaan" , filePath: "song/8.mp3" , coverPath: "covers/8.jpg"},
    {songName: "So_High" , filePath: "song/9.mp3" , coverPath: "covers/9.jpg"},
    {songName: "Sooraj_Dooba_Hain" , filePath: "song/10.mp3" , coverPath: "covers/10.jpg"},
    {songName: "Sun_Bhavara" , filePath: "song/11.mp3" , coverPath: "covers/11.jpg"},
    {songName: "Tere_Bin" , filePath: "song/12.mp3" , coverPath: "covers/12.jpg"},
    {songName: "The_Hook_Up_Song" , filePath: "song/13.mp3" , coverPath: "covers/13.jpg"},
    {songName: "The_Humma_Song" , filePath: "song/14.mp3" , coverPath: "covers/14.jpg"},
    {songName: "Tu_Chahiye" , filePath: "song/15.mp3" , coverPath: "covers/15.jpg"},
    {songName: "The_Wakhara_Song" , filePath: "song/16.mp3" , coverPath: "covers/16.jpg"},
    {songName: "Zalima" , filePath: "song/17.mp3" , coverPath: "covers/17.jpg"},
]
 
 songItems.forEach((element,i)=>{
     //console.log(element,i);
     element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
 })
//audioElement.play();

 //Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// //Listen to events 
audioElement.addEventListener('timeupdate' , ()=>{
   // console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   // console.log(progress);
    myProgressBar.value=progress;   
})

 myProgressBar.addEventListener('change' , ()=>{
     audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
 })

const makeAllPlays=()=>{
    songItemsPlay.forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})
}
songItemsPlay.forEach((element)=>
{
    element.addEventListener('click' , (e)=>{
      //  console.log(e.target);
        makeAllPlays();
        
         songIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src=`songs/${songIndex+1}.mp3`;
         masterSongName.innerText = songs[songIndex].songName;
         audioElement.currentTime=0;
         audioElement.play();
         gif.style.opacity = 1;
         masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
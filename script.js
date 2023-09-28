let songindex = 0
let initialsong = 0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterbtn');
let myProgressBar = document.getElementById('myProgressBar');
songitem = Array.from(document.getElementsByClassName('songItem'))
// let gif = document.getElementById('gif')

masterplay.addEventListener('click', () => {
  if (audioelement.paused || audioelement.currentTime<=0) {
    audioelement.play();
    masterplay.classList.remove('bi-play-circle')
    masterplay.classList.add('bi-pause-circle')
    gif.style.opacity = 1;

}
else{
    audioelement.pause();
    masterplay.classList.remove('bi-pause-circle')
    masterplay.classList.add('bi-play-circle') 
     gif.style.opacity =0
}
});

let songs=[
{songname: "let me love u", filePath : "songs/1.mp3", cover: "covers/2.jpg"  },
{songname: "let u", filePath : "songs/2.mp3", cover: "covers/3.jpg"  },
{songname: "let love u", filePath : "songs/3.mp3", cover: "covers/4.jpg"  },
{songname: "me love u", filePath : "songs/4.mp3", cover: "covers/5.jpg"  },
{songname: "let me love u", filePath : "songs/5.mp3", cover: "covers/6.jpg"  },
{songname: "let uhkjjhhiu", filePath : "songs/6.mp3", cover: "covers/7.jpg"  }
]
songitem.forEach((element,i) => {
          element.getElementsByTagName("img")[0].src =songs[i].cover
          element.getElementsByClassName("songname")[0].innerText =songs[i].songname
          
});


audioelement.addEventListener('timeupdate', ()=>{
progress = parseInt((audioelement.currentTime/audioelement.duration)* 100);
myProgressBar.value=progress

})
myProgressBar.addEventListener('change',()=>{

  audioelement.currentTime = myProgressBar.value *  audioelement.duration/100
})
const makeallplay = ()=>{

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
element.classList.remove('bi-pause-circle')
element.classList.add('bi-play-circle')
})
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
          makeallplay();
          songindex =  parseInt(e.target.id)
          e.target.classList.remove('bi-play-circle')
          e.target.classList.add('bi-pause-circle')
          audioelement.src =`songs/${ songindex + 1}.mp3`
          audioelement.currentTime= 0
          audioelement.play()
          gif.style.opacity = 1;
          masterplay.classList.remove('bi-play-circle')
          masterplay.classList.add('bi-pause-circle')


})
})
document.getElementById('forward').addEventListener('click', ()=>{
  if(songindex>=6){
      songindex = 0
  }
  else{
      songindex += 1;
  }
  audioelement.src = `songs/${songindex+1}.mp3`;
  audioelement.currentTime = 0;
  audioelement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove('bi-play-circle');
  masterPlay.classList.add('bi-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songindex<=0){
      songindex = 0
  }
  else{
      songindex -= 1;
  }
  audioelement.src = `songs/${songindex+1}.mp3`;
  audioelement.currentTime = 0;
  audioelement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove('bi-play-circle');
  masterPlay.classList.add('bi-pause-circle');
})
          

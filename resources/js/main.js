//Select elements from DOM
const video = document.querySelector('#video');
const playbtn = document.querySelector('#play');
const stopbtn = document.querySelector('#stop');
let progressBar = document.querySelector('#progress');
const timeStamp = document.querySelector('#timestamp');

//Play & Pause Video
function toggleVideoStatus(){
   if(video.paused){
    video.play();
   }else{
    video.pause();
   }
}

//update play/pause icon
function updatePlayIcon(){
    const playIcon = '<i class="fa fa-play fa-2x"></i>';
    const pauseIcon = '<i class="fa fa-pause fa-2x"></i>';

    if(video.paused){
        playbtn.innerHTML=playIcon;
    }else{
        playbtn.innerHTML=pauseIcon;
    }
}

//update progress & timestamp
function updateProgressBar(){
   progressBar.value = (video.currentTime / video.duration) * 100;
   
   //Get video minutes
   let minutes = Math.floor(video.currentTime / 60);
   if(minutes < 10){
    minutes = '0' + String(minutes);
   }

    //Get video seconds
   let seconds = Math.floor(video.currentTime % 60);
   if(seconds < 10){
    seconds = '0' + String(seconds);
   }

   timeStamp.innerHTML = `${minutes}:${seconds}`;
}

//stops the video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

//sets Video TimeStamp
function setVideoProgress(){
    video.currentTime = (progressBar.value * video.duration) / 100;
}

function updateTimeStamp(){

}


//Video Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgressBar);

//Controls Event Listeners
playbtn.addEventListener('click', toggleVideoStatus);
stopbtn.addEventListener('click', stopVideo);
progressBar.addEventListener('change', setVideoProgress);
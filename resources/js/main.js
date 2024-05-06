//Select elements from DOM
const video = document.querySelector('#video');
const playbtn = document.querySelector('#play');
const stopbtn = document.querySelector('#stop');
const progressBar = document.querySelector('#progress');
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
    return true;
}

//stops the video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

//plays Video
// function playVideo(){
//     if(video.paused || video.stopped){
//         video.play();
//         updatePlayIcon();
//         toggleVideoStatus();
//     }
// }

//sets Video TimeStamp
function setVideoProgress(){
    return true;
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
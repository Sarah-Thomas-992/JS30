// Elements 

const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

// Functions

function togglePlay() {
    if (video.paused){
        video.play();
    } else {
        video.pause();
    }
};

function updateButton() {
    if (video.paused){
        toggle.innerHTML = '<button class="player__button toggle" title="Toggle Play">►</button>';
    } else {
        toggle.innerHTML = '<button class="player__button toggle" title="Toggle Play">❚ ❚</button>';
    }
};

function skip(){
    console.log('skipping');
}

// Event Listeners

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

skipButtons.forEach(button => button.addEventListener('click', skip)); 
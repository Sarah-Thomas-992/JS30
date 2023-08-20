// Elements 

const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
const fullScreen = document.querySelector('.fullscreen2');

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
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value; 
};

function handleProgress(){
    const percent = ((video.currentTime)/(video.duration) * 100);
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime; 
}

function fullScreening() {
    if (player.classList.contains('fullscreen')) {
        player.classList.remove('fullscreen');
        player.classList.remove('-webkit-full-screen');
    } else {
        player.classList.add('fullscreen');
        player.classList.add('-webkit-full-screen');
    }
};

// Event Listeners

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

fullScreen.addEventListener('click', fullScreening);

skipButtons.forEach(button => button.addEventListener('click', skip)); 
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


const video = document.querySelector('video');
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const showTime = document.getElementById('showTime');

if (video && playButton && pauseButton && showTime) {
    video.addEventListener('timeupdate', function() {
        let seconds = Math.floor(video.currentTime);
        let minutes = Math.floor(seconds / 60);
        seconds = seconds - minutes * 60;
        showTime.innerHTML = `Duración del video: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });

    playButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        }
    });

    pauseButton.addEventListener('click', () => {
        if (!video.paused) {
            video.pause();
        }
    });

    video.onended = function() {
        video.currentTime = 0;
        showTime.innerHTML = `Duración del video: ${video.duration}`;
    };
}


import Player from '@vimeo/player';   
import throttle from 'lodash.throttle';

const savedSettings = localStorage.getItem("videoplayer-current-time");
const iframe = document.querySelector('iframe');
        const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeupdate, 1000));

if (savedSettings) {
    const parsedSettings = JSON.parse(savedSettings);
    player.setCurrentTime(parsedSettings).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
}

function onTimeupdate ({seconds}) {
    localStorage.setItem("videoplayer-current-time", seconds);
};


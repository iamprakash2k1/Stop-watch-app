//Get elements
const timeDisplay = document.getElementById('Time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

//variables to hold time data
let startTime, updatedTime, difference;
let running = false;

//Functions for the stop watch to work properly
function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        running = true;
        runStopwatch();
        startBtn.textContent = 'Pause';
    } else{
        running = false;
        startBtn.textContent = 'Resume';
    }
}

function stopStopwatch() {
    if (running) {
        running = false;
        startBtn.textContent = 'Start';
    }
}

function resetStopwatch() {
    running = false;
    startBtn.textContent = 'Start';
    timeDisplay.textContent = '00:00:00.000';
}

function runStopwatch() {
   if (running){
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours= Math.floor((difference%(1000 * 60 * 60* 24)) / (1000 * 60 * 60));
    let minutes= Math.floor((difference%(1000 * 60 * 60)) / (1000 * 60));
    let seconds= Math.floor((difference%(1000 * 60)) / 1000);
    let milliseconds = difference % 1000;

    hours = (hours<10) ? '0' + hours: hours;
    minutes = (minutes<10) ? '0' + minutes: minutes;
    seconds = (seconds<10) ? '0' + seconds: seconds;
    milliseconds = (milliseconds<10) ? '0' + milliseconds: milliseconds;

    timeDisplay.textContent = hours + ':'+ minutes + ':' + seconds + ':' + milliseconds;

    setTimeout(runStopwatch, 10);
   }
} 

//adding Event Listeners

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
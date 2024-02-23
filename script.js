const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const resetButton = document.getElementById("reset-btn");
const timerElement = document.getElementById("timer");
const ballElement=document.getElementById("ball");

let startTime, endTime, currentTime;
let timerInterval;
let hours=0;
let minutes=0;
let seconds=0;
let temp=0;
timerElement.textContent = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

// start timer function to start the timer
function startTimer() {
  startButton.disabled = true;
  if(hours==0 && minutes==0 && seconds==0)startTime = new Date();
  else{
    const start=startTime.getTime();
    const temp=new Date();
    startTime=new Date(start+(temp-endTime));
  }
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    currentTime = new Date();
    temp=temp+5;
    if(temp<300){
        ballElement.style.left=`${temp+5}px`;
    }
    else{
        temp=0;
        ballElement.style.left=`${temp}px`;
    }
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    hours= Math.floor(elapsedTime / 3600);
    minutes = Math.floor((elapsedTime-(hours*3600)) / 60);
    seconds = (elapsedTime-(hours*3600)) % 60;
    timerElement.textContent = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// stop timer function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
    endTime = currentTime;
    startButton.disabled = false;
}

// reset timer function to reset the timer
function resetTimer(){
    clearInterval(timerInterval);
    startButton.disabled = false;
    temp=0;
    ballElement.style.left=`${temp}px`;
    hours=0;
    minutes=0;
    seconds=0;
    timerElement.textContent = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
const startBtn = document.querySelector(".start")
const resetBtn = document.querySelector(".reset")
const timeSpan = document.querySelector(".time")

let counting = null;

function formatTime(totalSeconds) {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = Math.floor(totalSeconds % 60);
  
  [hours, minutes, seconds] = [hours, minutes, seconds].map(t => t.toString().padStart(2, '0'));
  return [hours, minutes, seconds]
}

function timeGo() {
  let currentCount = timeSpan.innerText.split(":");
  currentCount = parseInt(currentCount[0]) * 3600 + parseInt(currentCount[1]) * 60 + parseInt(currentCount[2])
  currentCount += 1
  let [h, m, s] = formatTime(currentCount)
  timeSpan.innerText = `${h}:${m}:${s}`
}

function countUp(event){

  if (startBtn.innerText === "START"){
    startBtn.innerText = "STOP"
    intervalId = setInterval(timeGo, 1000)
  }
  else if(startBtn.innerText === "STOP") {
    startBtn.innerText = "START"
    clearInterval(intervalId)
  }
  
}

function resetCountUp(event) {
  timeSpan.innerText = "00:00:00";
}

resetBtn.addEventListener("click", resetCountUp)
startBtn.addEventListener("click", countUp)

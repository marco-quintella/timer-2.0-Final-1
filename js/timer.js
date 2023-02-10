import { resetControls } from './controls.js'
import { minutesDisplay, secondsDisplay } from './elements.js'

export let timerTimeOut

export let minutes = Number(minutesDisplay.textContent)

export function resetTimer () {
  clearTimeout(timerTimeOut)
  updateTimerDisplay(minutes, 0)
}

export function updateTimerDisplay (minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

export function countdown () {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    let isFinished = minutes <= 0 && seconds <= 0

    updateTimerDisplay(minutes, 0)

    if (isFinished) {
      resetControls()
      clearTimeout(countdown)
      return
    }

    if (seconds <= 0) {
      seconds = 60;
      --minutes
    }
    updateTimerDisplay(minutes, seconds - 1)

    countdown()
  }, 1000)
}
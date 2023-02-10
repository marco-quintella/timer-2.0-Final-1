import {
  buttonCoffeShopOff,
  buttonCoffeShopOn, buttonFirePlaceOff,
  buttonFirePlaceOn, buttonFlorestOff,
  buttonFlorestOn, buttonPause,
  buttonPlay, buttonRainOff, buttonRainOn, minutesDisplay
} from './elements.js';
import {
  audioCoffe,
  audioFire,
  audioFlorest,
  audioRain
} from './sounds.js';
import {
  countdown,
  minutes,
  updateTimerDisplay
} from './timer.js';

export function play () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  countdown()
}

export function pause () {
  resetControls()
  clearTimeout(timerTimeOut)
}

export function stop () {
  resetControls()
  let newMinutes = Number(prompt("quantos minutos ?"))
  if (!newMinutes) {
    alert("Só leio numero porra ! Tenta denovo com numero")
    stop()
    return
  }
  pause()

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
}

export function plus () {
  updateTimerDisplay((Number(minutesDisplay.textContent) + 5), 0)
}

export function reduce () {
  if (minutesDisplay.textContent <= 5) {
    return updateTimerDisplay(0, 0)
  }
  updateTimerDisplay((Number(minutesDisplay.textContent) - 5), 0)
}


export function florestOn () {
  buttonFlorestOn.classList.add("hide")
  buttonFlorestOff.classList.remove("hide")
  rainOff()
  coffeOff()
  fireOff()
  audioFlorest.play()
}

export function florestOff () {
  buttonFlorestOn.classList.remove("hide")
  buttonFlorestOff.classList.add("hide")
  audioFlorest.pause()

}

export function rainOn () {
  buttonRainOn.classList.add("hide")
  buttonRainOff.classList.remove("hide")
  florestOff()
  coffeOff()
  fireOff()
  audioRain.play()
}

export function rainOff () {
  buttonRainOn.classList.remove("hide")
  buttonRainOff.classList.add("hide")
  audioRain.pause()
}

export function coffeOn () {
  buttonCoffeShopOn.classList.add("hide")
  buttonCoffeShopOff.classList.remove("hide")
  florestOff()
  rainOff()
  fireOff()
  audioCoffe.play()
}

export function coffeOff () {
  buttonCoffeShopOn.classList.remove("hide")
  buttonCoffeShopOff.classList.add("hide")
  audioCoffe.pause()
}

export function fireOn () {
  buttonFirePlaceOn.classList.add("hide")
  buttonFirePlaceOff.classList.remove("hide")
  florestOff()
  rainOff()
  coffeOff()
  audioFire.play()
}

export function fireOff () {
  buttonFirePlaceOn.classList.remove("hide")
  buttonFirePlaceOff.classList.add("hide")
  audioFire.pause()
}

export function resetControls () {
  buttonPause.classList.add("hide")
  buttonPlay.classList.remove("hide")
  florestOff()
  rainOff()
  coffeOff()
  fireOff()
}
import {
  coffeOff,
  coffeOn,
  fireOff,
  fireOn,
  florestOff,
  florestOn,
  pause,
  play,
  plus,
  rainOff,
  rainOn,
  reduce,
  stop
} from './controls'
import {
  buttonCoffeShopOff,
  buttonCoffeShopOn,
  buttonFirePlaceOff,
  buttonFirePlaceOn,
  buttonFlorestOff,
  buttonFlorestOn,
  buttonPause,
  buttonPlay,
  buttonPlus,
  buttonRainOff,
  buttonRainOn,
  buttonReduce,
  buttonStop
} from './elements'

buttonPlay.addEventListener("click", play)
buttonPause.addEventListener("click", pause)
buttonStop.addEventListener("click", stop)
buttonPlus.addEventListener("click", plus)
buttonReduce.addEventListener("click", reduce)

buttonFlorestOn.addEventListener("click", florestOn)
buttonFlorestOff.addEventListener("click", florestOff)

buttonRainOn.addEventListener("click", rainOn)
buttonRainOff.addEventListener("click", rainOff)

buttonCoffeShopOn.addEventListener("click", coffeOn)
buttonCoffeShopOff.addEventListener("click", coffeOff)

buttonFirePlaceOn.addEventListener("click", fireOn)
buttonFirePlaceOff.addEventListener("click", fireOff)
const convertBtn = document.getElementById("convert-btn")

const inputEl = document.getElementById("input-el")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
  let inputNum = inputEl.value

  let imperialLength = (inputNum * 3.281).toFixed(3)
  let imperialVolume = (inputNum * 0.264).toFixed(3)
  let imperialMass = (inputNum * 2.204).toFixed(3)
  
  let metricLength = (inputNum / 3.281).toFixed(3)
  let metricVolume = (inputNum / 0.264).toFixed(3)
  let metricMass = (inputNum / 2.204).toFixed(3)

  lengthEl.textContent = `${inputNum} meters = ${imperialLength} feet | ${inputNum} feet = ${metricLength} meters`
  
  volumeEl.textContent = `${inputNum} meters = ${imperialVolume} feet | ${inputNum} feet = ${metricVolume} meters`
  
  massEl.textContent = `${inputNum} meters = ${imperialMass} feet | ${inputNum} feet = ${metricMass} meters`
})
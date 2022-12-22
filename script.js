const ranger = document.getElementById("br-ranger")
const topLeftRanger = document.getElementById("br-top-left-ranger")
const topRightRanger = document.getElementById("br-top-right-ranger") 
const bottomLeftRanger = document.getElementById("br-bottom-left-ranger") 
const bottomRightRanger = document.getElementById("br-bottom-right-ranger") 
const valueShower = document.getElementById("br-all-shower")
const topLeftValueShower = document.getElementById("br-top-left-shower")
const topRightValueShower = document.getElementById("br-top-right-shower")
const bottomLeftValueShower = document.getElementById("br-bottom-left-shower")
const bottomRightValueShower = document.getElementById("br-bottom-right-shower")
const mainBox = document.getElementById("mainbox")
const txtAreaEl = document.getElementById("txtarea")
const copyBtn = document.getElementById("btn")
let rangeValue = 0

ranger.addEventListener("mousemove", function() {
    rangeValue = Number(ranger.value)
    valueShower.textContent = rangeValue + 'px'
    mainBox.style.cssText = `border-radius: ${rangeValue}px;`
    txtAreaEl.textContent = `border-radius: ${rangeValue}px;`
})

topLeftRanger.addEventListener("mousemove", function() {
    rangeValue = Number(topLeftRanger.value)
    topLeftValueShower.textContent = rangeValue + 'px'
    mainBox.style.cssText = `border-top-left-radius: ${rangeValue}px;`
    txtAreaEl.textContent = `border-top-left-radius: ${rangeValue}px;`
})

topRightRanger.addEventListener("mousemove", function() {
    rangeValue = Number(topRightRanger.value)
    topRightValueShower.textContent = rangeValue + 'px'
    mainBox.style.cssText = `border-top-right-radius: ${rangeValue}px;`
    txtAreaEl.textContent = `border-top-right-radius: ${rangeValue}px;`
})

bottomLeftRanger.addEventListener("mousemove", function() {
    rangeValue = Number(bottomLeftRanger.value)
    bottomLeftValueShower.textContent = rangeValue + 'px'
    mainBox.style.cssText = `border-bottom-left-radius: ${rangeValue}px;`
    txtAreaEl.textContent = `border-bottom-left-radius: ${rangeValue}px;`
})

bottomRightRanger.addEventListener("mousemove", function() {
    rangeValue = Number(bottomRightRanger.value)
    bottomRightValueShower.textContent = rangeValue + 'px'
    mainBox.style.cssText = `border-bottom-right-radius: ${rangeValue}px;`
    txtAreaEl.textContent = `border-bottom-right-radius: ${rangeValue}px;`
})

copyBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(txtAreaEl.value)
})
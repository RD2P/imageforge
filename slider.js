const wInput = document.getElementById('w')
const wOutput = document.getElementById('w-output')

const hInput = document.getElementById('h')
const hOutput = document.getElementById('h-output')

const updateOutput = () => {
  wOutput.innerText = wInput.value + " %"
  hOutput.innerText = hInput.value + " %"
}
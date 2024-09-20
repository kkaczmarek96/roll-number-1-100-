
let count = 0;
const minNum = 1
const maxNum = 100


const rollButton = document.getElementById("roll")
const displayNumber = document.getElementById("result")
const resetButton = document.getElementById("reset")



rollButton.onclick = function() {
    count = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    displayNumber.innerHTML = count;
}

resetButton.onclick = function() {
    count = 0;
    displayNumber.innerHTML = count;
}



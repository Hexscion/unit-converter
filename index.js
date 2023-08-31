const convertBtn = document.getElementById("convert-btn");
const inputEL = document.getElementById("input-el");
const volumeEl = document.getElementById("volume-el");
const massEL = document.getElementById("mass-el");
const lengthEL = document.getElementById("length-el");

convertBtn.addEventListener("click", function test() {
    let inputValue = Number(inputEL.value);
    if (inputValue<0) {
        alert("Enter a positive number")
    }
    else if(inputValue>99999) {
        alert("Enter a number less than 1M")
    }
    else {
        volumeEl.innerText = `${(inputValue).toFixed(2)} liters = ${(inputValue * 0.264).toFixed(2)} gallons | ${(inputValue).toFixed(2)} gallons = ${(inputValue / 0.264).toFixed(2)} liters`;
        massEL.innerText = `${(inputValue).toFixed(2)} kilos = ${(inputValue * 2.204).toFixed(2)} pounds | ${(inputValue).toFixed(2)} pounds = ${(inputValue / 2.204).toFixed(2)} kilos`;
        lengthEL.innerText = `${(inputValue).toFixed(2)} meters = ${(inputValue * 3.281).toFixed(2)} feet | ${(inputValue).toFixed(2)} feet = ${(inputValue / 3.281).toFixed(2)} meters`
    }
})
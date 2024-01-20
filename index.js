const convertBtn = document.getElementById("convert-btn");
const inputEL = document.getElementById("input-el");
const volumeEl = document.getElementById("volume-el");
const massEL = document.getElementById("mass-el");
const lengthEL = document.getElementById("length-el");

convertBtn.addEventListener("click", test)

test()

function test() {
    let inputValue = Number(inputEL.value);
    if (inputValue<0) {
        alert("Enter a positive number")
    }
    else if(inputValue>99999) {
        alert("Enter a number less than 1M")
    }
    else {
        volumeEl.innerHTML = `<b>${(inputValue).toFixed(2)}</b> liters = <b>${(inputValue * 0.264).toFixed(2)}</b> gallons | <b>${(inputValue).toFixed(2)}</b> gallons = <b>${(inputValue / 0.264).toFixed(2)}</b> liters`;
        massEL.innerHTML = `<b>${(inputValue).toFixed(2)}</b> kilos = <b>${(inputValue * 2.204).toFixed(2)}</b> pounds | <b>${(inputValue).toFixed(2)}</b> pounds = <b>${(inputValue / 2.204).toFixed(2)}</b> kilos`;
        lengthEL.innerHTML = `<b>${(inputValue).toFixed(2)}</b> meters = <b>${(inputValue * 3.281).toFixed(2)}</b> feet | <b>${(inputValue).toFixed(2)}</b> feet = <b>${(inputValue / 3.281).toFixed(2)}</b> meters`
    }
}
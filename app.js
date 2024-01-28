function addToDisplay(value) {
    document.getElementById('display').value += value;
   
}
function power() {
    var display = document.getElementById('display');
    var num = parseFloat(display.value);
    display.value = Math.pow(num, 2);
}
function sqrt() {
    const display = document.getElementById('display');
    const num = parseFloat(display.value);
    if (num >= 0) {
        display.value = Math.sqrt(num);
    } else {
        display.value = 'Error';
    }
}
function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    const result = eval(display.value);
    display.value = result;
}
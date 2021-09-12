let bill = 0.00;
let numOfPeople = 1;
let tip = 0.00;

function setBill() {
  bill = Number(document.getElementById("bill").value);
}

function setNumberOfPeople() {
  numOfPeople = Number(document.getElementById("people").value);
}

function calculateTip(value) {
  isNaN(bill) ? alert("Incorrect value for bill.\nBill must be a number.") : tip = bill * Number(value);
  displayTip(tip);
}

function displayTip(tip) {
  document.getElementById('per-person').innerHTML = "$" + (tip / numOfPeople).toFixed(2);
  document.getElementById('total-tip').innerText = "$" + ((bill + tip) / numOfPeople ).toFixed(2);
}

function reset() {
  bill = 0.00;
  numOfPeople = 1;
  tip = 0.00;
  displayTip(tip);
  document.getElementById('bill').value = bill;
  document.getElementById('people').value = numOfPeople;
}
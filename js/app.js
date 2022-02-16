/* // withdraw input start 
step 1
const withdrawInput = document.getElementById('withdraw-input');
const withdrawButton = document.getElementById('withdraw-button');

step 2

withdrawButton.addEventListener('click', function(){
    const withdrawValue = withdrawInput.value
    console.log(withdrawValue)
}) */

/* Deposit input start  */
/* step 1 */
const depositInput = document.getElementById('deposit-input');
const depositButton = document.getElementById('deposit-button');
const totalDeposit = document.getElementById('total-deposit');

// step 2

depositButton.addEventListener('click', function () {
    const depositValue = parseFloat(depositInput.value);
})
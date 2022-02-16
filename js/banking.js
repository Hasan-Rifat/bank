/* function doubleIt(num){
    const result = num * 2;
    return result;
}
 */

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const amountValue = parseFloat(inputField.value);
    inputField.value = "";
    return amountValue;
}

function getAmountValue(amount, depositAmount) {
    const money = document.getElementById(amount);
    const currentAmount = parseFloat(money.innerText);
    money.innerText = currentAmount + depositAmount;
}

function updateBalance(depositAmount) {
    const blanca = document.getElementById('balance-total');
    const blancaTotal = parseFloat(blanca.innerText);
    if (isAdd == true) {
        blanca.innerText = blancaTotal + depositAmount;
    } else {
        blanca.innerText = blancaTotal - depositAmount;
    }
}

function updateBalance(depositAmount) {
    const withdrawNow = document.getElementById('balance-total');
    const withdrawNowAmount = parseFloat(withdrawNow.innerText);
    const withdrawNowMainAmount = withdrawNowAmount - withdrawAmount;
    withdrawNow.innerText = withdrawNowMainAmount;
}

document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        totalMoney = getAmountValue('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }


});

document.getElementById('withdraw-button').addEventListener('click', function () {

    // updateBalance(depositAmount, false);

    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value) */
    ;
    const withdrawAmount = getInputValue('withdraw-input');
    if (withdrawAmount > 0) {
        // depositAmount total
        const withdrawTotal = document.getElementById('withdraw-total');
        const currentWithdrawAmount = parseFloat(withdrawTotal.innerText);

        const withdrawMainAmount = currentWithdrawAmount + withdrawAmount;
        withdrawTotal.innerText = withdrawMainAmount;

        const withdrawNow = document.getElementById('balance-total');
        const withdrawNowAmount = parseFloat(withdrawNow.innerText);

        const withdrawNowMainAmount = withdrawNowAmount - withdrawAmount;
        withdrawNow.innerText = withdrawNowMainAmount;
    }



});

// blanca filed 
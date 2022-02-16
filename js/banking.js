document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = parseFloat(depositInput.value);
    // depositAmount total
    const depositTotal = document.getElementById('deposit-total');
    const currentAmount = parseFloat(depositTotal.innerText);
    const depositMainAmount = currentAmount + depositAmount;
    depositTotal.innerText = depositMainAmount;



    // step 2 end 
    // update blance 
    const blanca = document.getElementById('balance-total');
    const blancaTotal = parseFloat(blanca.innerText);
    // blanca.innerText = blancaTotal;
    const updateBlance = blancaTotal + depositAmount;
    blanca.innerText = updateBlance;
    depositInput.value = "";
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);
    // depositAmount total
    const withdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawAmount = parseFloat(withdrawTotal.innerText);
    const withdrawMainAmount = currentWithdrawAmount + withdrawAmount;
    withdrawTotal.innerText = withdrawMainAmount;

    const withdrawNow = document.getElementById('balance-total');
    const withdrawNowAmount = parseFloat(withdrawNow.innerText);
    const withdrawNowMainAmount = withdrawNowAmount - withdrawAmount;
    withdrawNow.innerText = withdrawNowMainAmount;

    if (withdrawNow.innerText == -1) {
        withdrawNow.innerText = 0;
    }
    withdrawInput.value = "";
})

// blanca filed 
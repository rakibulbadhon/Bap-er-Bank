// For Deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    //input deposit and add total deposit
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');
    const currentDipoAmount = parseFloat(depositTotal.innerText) + parseFloat(depositAmount);
    depositTotal.innerText = currentDipoAmount;

    //Add total balance
    const balanceTotal = document.getElementById('balance-total');
    const currenTotalBalance = parseFloat(balanceTotal.innerText) + parseFloat(depositAmount);
    balanceTotal.innerText = currenTotalBalance;

    //Clear deposit input field
    depositInput.value = '';
});
//For Withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    //input withdraw and add total withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    const withdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawAmount = parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmount);
    withdrawTotal.innerText = currentWithdrawAmount;

    //Reduce from total balance
    const balanceTotal = document.getElementById('balance-total');
    const currenTotalBalance = parseFloat(balanceTotal.innerText) - parseFloat(withdrawAmount);
    balanceTotal.innerText = currenTotalBalance;

    //Clear withdraw input field
    withdrawInput.value = '';

});
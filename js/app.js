// get income by function
function getIncome() {
  const incomeAmountText = document.getElementById("income-amount");
  const incomeAmount = incomeAmountText.value;
  return parseFloat(incomeAmount);
}

// get current balance by function
function getBalance(incomeAmount, totalSpending) {
  const currentBalanceText = document.getElementById("balance-amount");
  const currentBalance = currentBalanceText.innerText;
  currentBalanceText.innerText = parseFloat(incomeAmount) - totalSpending;
  return currentBalance;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeAmount = getIncome();

  // get expenses
  const foodExpense = parseFloat(document.getElementById("food-expense").value);
  const rentExpense = parseFloat(document.getElementById("rent-expense").value);
  const clothExpense = parseFloat(
    document.getElementById("cloth-expense").value
  );

  // get total spending
  const totalSpending = foodExpense + rentExpense + clothExpense;

  // get current expense
  const currentExpense = document.getElementById("total-expense");
  currentExpense.innerText = totalSpending;

  // update remaining balance
  const currentBalance = getBalance(incomeAmount, totalSpending);
});

document.getElementById("savings-btn").addEventListener("click", function () {
  // get income
  const incomeAmount = getIncome();
  console.log(incomeAmount);

  // get savings percentage
  const savingsInputText = document.getElementById("savings-input").value;
  const savingsInput = parseFloat(savingsInputText);
  const savingsPercentage = savingsInput / 100;

  // total savings amount
  const savingsAmount = incomeAmount * savingsPercentage;

  // get current savings amount and update total savings
  const currentSavingsAmountText = document.getElementById("savings-amount");
  const currentSavingsAmount = parseFloat(currentSavingsAmountText.innerText);
  currentSavingsAmountText.innerText = savingsAmount;

  // get remaining balance after expenses
  const currentBalance = parseFloat(getBalance());

  // get total remaining
  const totalRemainingText = document.getElementById("remaining-total");
  const totalRemaining = parseFloat(totalRemainingText.innerText);
  totalRemainingText.innerText = currentBalance - savingsAmount;
});

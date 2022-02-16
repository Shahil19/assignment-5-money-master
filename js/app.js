document.getElementById("calculate-btn").addEventListener("click", function () {
  // get income amount
  const incomeAmountText = document.getElementById("income-amount");
  const incomeAmount = incomeAmountText.value;

  // get expenses
  const foodExpense = parseFloat(document.getElementById("food-expense").value);
  const rentExpense = parseFloat(document.getElementById("rent-expense").value);
  const clothExpense = parseFloat(
    document.getElementById("cloth-expense").value
  );

  // get total spending
  const totalSpending = foodExpense + rentExpense + clothExpense;
  console.log(totalSpending);

  // get current expense
  const currentExpense = document.getElementById("total-expense");
  currentExpense.innerText = totalSpending;

  // update balance
  const currentBalance = document.getElementById("balance-amount");
  currentBalance.innerText = parseFloat(incomeAmount) - totalSpending;
});

document.getElementById("savings-btn").addEventListener("click", function () {
  console.log("clicked");
});

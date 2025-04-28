//alert("Hello")

let myBalance = 2000; //Declaration

document.getElementById("balance").innerHTML = myBalance;

function makeDeposit() {
  const amount = parseFloat(document.getElementById("depositAmount").value);

  myBalance += amount;
  document.getElementById("balance").innerHTML = myBalance;

  
  const transactionList  = document.getElementById('transaction');

  const transactionItem  = document.createElement('li');

  transactionItem.textContent = 'Credit : $' + amount +  ' | Balance: $ ' + myBalance;

  transactionList.appendChild(transactionItem);

  //console.log(amount);
}

function makeWithdrawal() {
  const amount = parseFloat(document.getElementById("withdrawAmount").value);

  myBalance -= amount;
  document.getElementById("balance").innerHTML = myBalance;


  const transactionList  = document.getElementById('transaction');

  const transactionItem  = document.createElement('li');

  transactionItem.textContent = 'Debit : $' + amount +  ' | Balance: $ ' + myBalance;

  transactionList.appendChild(transactionItem);
}



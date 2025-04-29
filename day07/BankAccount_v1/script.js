//alert("Welcome")
//alert("Hello")

let myBalance = 2000; //Declaration

document.getElementById("balance").innerHTML = myBalance;

function makeDeposit() {
  const amount = parseFloat(document.getElementById("depositAmount").value);

  if (amount > 0) {
    myBalance += amount;
    document.getElementById("balance").innerHTML = myBalance;

    addTransaction("Credit", amount);
  } else {
    alert("Enter a valid deposit amount");
  }

  //console.log(amount);
}

function makeWithdrawal() {
  const amount = parseFloat(document.getElementById("withdrawAmount").value);

  if (amount > 0 && amount <= myBalance) {
    myBalance -= amount;
    document.getElementById("balance").innerHTML = myBalance;

    addTransaction("Debit", amount);
  } else if (amount > myBalance) {
    alert("Insufficient Balance");
  } else {
    alert("Enter a valid withdrawal amount");
  }
}

function addTransaction(type, amount) {
  const transactionList = document.getElementById("transaction");

  const myDate = new Date().toLocaleString();

  const transactionRow = document.createElement("tr");

  /*
  //replace this block of code with Ternary operator
  //https://www.freecodecamp.org/news/javascript-string-format-how-to-use-string-interpolation-in-js/
  //https://www.w3schools.com/js/js_string_methods.asp#mark_tolowercase
  
 //Syntax: condition ? <expression if true> : <expression if false>
 //type == 'Credit' ? "Deposit" : "Withdrawal"

  
  
  if (type == 'Credit')
  {
    type = 'Deposit';
  }

  else
  {
    type = 'Withdrawal';
  }
*/

  transactionRow.innerHTML = `
                            <td>${myDate}</td>
                            <td>${type == 'Credit' ? "Deposit" : "Withdrawal"}</td>
                            <td class="${type.toLowerCase()}">$ ${amount}</td>
                            <td>$ ${myBalance}</td>
                            `;

  transactionList.appendChild(transactionRow);
}

/*
 <tr>
                <td>4/29/2025, 12:11:42 PM</td>
                <td>Deposit</td>
                <td class="credit">$100</td>
                <td>$1100</td>
              </tr>
*/



let myBalance = 3000; //Declaration

document.getElementById("balance").innerHTML = myBalance;

function addTransaction(type, description, amount) {
  const transactionList = document.getElementById("transactions");

  const myDate = new Date().toLocaleString();

  const transactionRow = document.createElement("tr");

  transactionRow.innerHTML = `
                            <td>${myDate}</td>
                            <td>${description}</td>
                            <td class="${type.toLowerCase()}">$ ${amount}</td>
                            <td>$ ${myBalance}</td>
                            `;

  transactionList.appendChild(transactionRow);
}

function toggleCustomDescription() {
  let description = document.getElementById("transactionDescription").value;

  let customDescriptionField = document.getElementById("customDescription");
  /*
if (description == "other")
{
    customDescriptionField.classList.remove('hidden')
}
else
{
    customDescriptionField.classList.add('hidden')
}
    */
  //Ternary Operator

  //condition  ? true : flase

  description == "other"
    ? customDescriptionField.classList.remove("hidden")
    : customDescriptionField.classList.add("hidden");
}

function toggleTransactionFields() {
  let myTransactionType = document.getElementById("transactionType").value;

  document.getElementById("amount").placeholder =
    myTransactionType == "d"
      ? "Enter the deposit Amount"
      : "Enter the withdrawal Amount";
}

function makeTransaction() {
  //alert("Hello")

  let myTransactionType = document.getElementById("transactionType").value;

  // console.log(myTransactionType)

  let description = document.getElementById("transactionDescription").value;

  if (description == "other") {
    description = document.getElementById("customDescription").value;
  } else {
    description = description;
  }

  console.log(description);

  let myAmount = parseFloat(document.getElementById("amount").value);

  console.log(myAmount);

  if (myTransactionType == "d") {
    deposit(myAmount);
  } else {
    withdraw(myAmount);
  }

  let myClassType = "";

  myTransactionType == "d" ? (myClassType = "Credit") : (myClassType = "Debit");

  addTransaction(myClassType, description, myAmount);
}

function deposit(amount) {
  //alert(`${myBalance} my balnce into deposit function and the amount is ${amount}`)

  myBalance += amount;
  //alert(`New Total ${myBalance}` );
  document.getElementById("balance").innerHTML = myBalance;
}

function withdraw(amount) {
  myBalance -= amount;
  document.getElementById("balance").innerHTML = myBalance;
}

function handleFileUpload(event) {
  
  //alert("Hello from file")
  const file = event.target.files[0];
  const reader = new FileReader();


  console.log(files)

  console.log(reader)

reader.onload = function (e) {
    const rows = e.target.result.split("\n");

    console.log(rows);
    rows.foreach((row) => {
      const [date, desc, type, amount] = row.split(",");
      const amountNum = parseFloat(amount);

      let myClassType = "";

      type.trim().toLowerCase() == "debit"
        ? (myClassType = "Debit")
        : (myClassType = "Credit");

        console.log(date, desc, type, amountNum)

      if (type.trim().toLowerCase() == "debit" && amountNum <= myBalance) {

        withdraw(amountNum);

        addTransaction(myClassType, desc, amountNum);
      } else {
        deposit(amountNum);
        addTransaction(myClassType, desc, amountNum);
      }
    });
  };
  reader.readAsText(file);
  
}



function handleFileUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const rows = e.target.result.split("\n");
    rows.forEach((row) => {
      const [date, description, type, amount] = row.split(",");
      const amountNum = parseFloat(amount);

      if (type.trim() === "Debit" && amountNum <= balance) {
        withdraw(amountNum);
        addTransaction("Debit", description.trim(), amountNum);
      } else if (type.trim() === "Credit") {
        deposit(amountNum);
        addTransaction("Credit", description.trim(), amountNum);
      }
    });
  };

  reader.readAsText(file);
  
}
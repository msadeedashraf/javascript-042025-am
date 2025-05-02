let balance = 2000;
document.getElementById("balance").textContent = balance;




function makeTransaction()
{
    const type = document.getElementById("transactionType").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const description =
    document.getElementById("transactionDescription").value === "Other"
      ? document.getElementById("customDescription").value
      : document.getElementById("transactionDescription").value;

      console.log(type, amount, description, balance)

      if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
      }
      if (type === "Withdraw" && amount > balance) {
        alert("Insufficient balance.");
        return;
      }  

     if (type === "Withdraw") 
     {
      withdraw(amount);
    

     }
     else
     {
      deposit(amount)
     }


     addTransaction(type, description, amount);
      
      

}

function withdraw(amount)
{
  balance -= amount;
  //alert(`${amount} New Total ${balance}` );
  document.getElementById("balance").textContent = balance;
}

function deposit(amount)
{
balance += amount;
document.getElementById("balance").textContent = balance;
}



function addTransaction(type, description, amount) {
  const transactionList = document.getElementById("transactions");
  const transactionRow = document.createElement("tr");
  const date = new Date().toLocaleString();
  
  
  const amountClass = type === "Deposit"  ? "credit" : "debit";

 //amountClass = type === "Debit" ? "debit" : "credit";


  transactionRow.innerHTML = `
    <td>${date}</td>
    <td>${description}</td>
    <td class="${amountClass}">$${amount}</td>
    <td>$${balance}</td>
  `;
  transactionList.appendChild(transactionRow);
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


/*
function handleFileUpload(event)
{
  const file = event.target.files[0];
  const reader = new FileReader();

reader.onload = function (e) {
const rows = e.target.result.split("\n");
rows.forEach ((row)=>{ 
  const [date, desc, type , amount] = row.split(",");
  const amountNum = parseFloat(amount);

  if (type.trim() === "Debit" && amountNum <= balance )
  {    withdraw(amountNum)
    addTransaction("Debit",desc.trim(),amountNum)
  }  else if (type.trim() === "Credit") 
  {
    deposit(amountNum)
    addTransaction("Credit",desc.trim(),amountNum)
  }

}

);

}

}
*/












function toggleTransactionFields() {
    const type = document.getElementById("transactionType").value;
    document.getElementById("amount").placeholder =
      type === "Deposit" ? "Enter deposit amount" : "Enter withdrawal amount";
  }


  function toggleCustomDescription() {
    const description = document.getElementById("transactionDescription").value;
    const customDescriptionField = document.getElementById("customDescription");
    if (description === "Other") {
      customDescriptionField.classList.remove("hidden");
    } else {
      customDescriptionField.classList.add("hidden");
    }
  }


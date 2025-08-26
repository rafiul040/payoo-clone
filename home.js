const validPin = 11992288;
const transactionsData = [] 


function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

function handleBtnToggle(id){
    const formButtons = document.getElementsByClassName('form-btn')
  for(const btn of formButtons){
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
    btn.classList.add('border-gray-300')
  }
  document.getElementById(id).classList.remove("border-gray-300", "bg-[#0874f20d]")
  document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
}


document
    .getElementById("add-button")
    .addEventListener("click", function (e) {
  handleToggle("add-money-parent");
  handleBtnToggle('add-button')


});
document
  .getElementById("cashout-button")
  .addEventListener("click", function (e) {
    handleToggle("cashout-money");
    handleBtnToggle('cashout-button')
    
  });
document
  .getElementById("transfer-button")
  .addEventListener("click", function (e) {
    handleToggle("transfer-money-parent");
    handleBtnToggle('transfer-button')
    
  });
document
.getElementById("get-bonus")
.addEventListener("click", function (e) {
  handleToggle("get-bonus-parent");
  handleBtnToggle("get-bonus");
});

document
.getElementById("bill-button")
.addEventListener("click", function (e) {
  handleToggle("pay-bill-parent");
  handleBtnToggle("bill-button");
});
document
.getElementById("transactions-button")
.addEventListener("click", function (e) {
  handleToggle("transactions-parent");
  handleBtnToggle("transactions-button");
});


function getInputValueNumber(id) {
  const inputField = parseInt(document.getElementById(id).value);
  return inputField;
}

function getInputValue(id) {
  const inputFieldValue = document.getElementById(id).value;
  return inputFieldValue;
}

function toGetInnerText(id) {
  const element = parseInt(document.getElementById(id).innerText);
  return element;
}

function toSetInnerText(value) {
  const availableBalanceElement = (document.getElementById(
    "available-balance"
  ).innerText = value);
  return availableBalanceElement;
}

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValue("bank");
    const accountNumber = getInputValue("accounts-number");
    const addPin = getInputValueNumber("add-pin");
    const amount = getInputValueNumber("add-amount");
    if(amount <= 0){
      alert('Invalid Amount')
      return
    }
    const availableBalance = toGetInnerText("available-balance");

    if (accountNumber.length !== 11) {
      alert("Enter Your valid Account Number");
      return;
    }

    if (addPin !== validPin) {
      alert("Enter Valid Pin");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    toSetInnerText(totalNewAvailableBalance);
    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    transactionsData.push(data)
    console.log(transactionsData)


  });










document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const accountNumber = getInputValue("agent-number");
  const amount = getInputValueNumber("withdraw-number");
  const addPin = getInputValueNumber("withdraw-pin");
  
  const availableBalance = toGetInnerText("available-balance");
  if(amount <= 0 || amount > availableBalance){
     alert('Invalid Amount')
     return
   }

  if (accountNumber.length !== 11) {
    alert("Enter Your valid Account Number");
    return;
  }
  if (addPin !== validPin) {
    alert("Enter Valid Pin Number");
    return;
  }

  const totalNewAvailableBalance = availableBalance - amount;

  toSetInnerText(totalNewAvailableBalance);

  const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transactionsData.push(data)
    console.log(transactionsData)
});


document.getElementById('transactions-button').addEventListener('click', function(e){
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ""

    for(const data of transactionsData){
        const div = document.createElement('div')
        div.innerHTML = `
         <div class="bg-white rounded-xl p-3 mt-3 flex justify-between items-center">
            <div class="flex items-center">
                <div class=" p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./Payoo-MFS-Resources/assets/wallet1.png" alt="">
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        `


        transactionContainer.appendChild(div)
    }

})
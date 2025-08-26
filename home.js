function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

document.getElementById("add-button").addEventListener("click", function (e) {
  handleToggle("add-money-parent");

  const formButtons = document.getElementsByClassName("form-btn");
  for (const btn of formButtons) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document
    .getElementById("add-button")
    .classList.remove("border-gray-300", "bg-[#0874f20d]");
  document
    .getElementById("add-button")
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
});
document
  .getElementById("cashout-button")
  .addEventListener("click", function (e) {
    handleToggle("cashout-money");
    const formButtons = document.getElementsByClassName("form-btn");
    for (const btn of formButtons) {
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-gray-300");
    }
    document
      .getElementById("cashout-button")
      .classList.remove("border-gray-300", "bg-[#0874f20d]");
    document
      .getElementById("cashout-button")
      .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  });
document
  .getElementById("transfer-button")
  .addEventListener("click", function (e) {
    handleToggle("transfer-money-parent");
    const formButtons = document.getElementsByClassName("form-btn");
    for (const btn of formButtons) {
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-gray-300");
    }
    document
      .getElementById("transfer-button")
      .classList.remove("border-gray-300", "bg-[#0874f20d]");
    document
      .getElementById("transfer-button")
      .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  });
document.getElementById("get-bonus").addEventListener("click", function (e) {
  handleToggle("get-bonus-parent");
  const formButtons = document.getElementsByClassName("form-btn");
  for (const btn of formButtons) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document
    .getElementById("get-bonus")
    .classList.remove("border-gray-300", "bg-[#0874f20d]");
  document
    .getElementById("get-bonus")
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
});

const validPin = 11992288;

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
  });

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const accountNumber = getInputValue("agent-number");
  const amount = getInputValueNumber("withdraw-number");
  const addPin = getInputValueNumber("withdraw-pin");

  const availableBalance = toGetInnerText("available-balance");

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
});

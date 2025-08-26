document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cashout-money').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block'
})
document.getElementById('cashout-button').addEventListener('click', function(){
    document.getElementById('cashout-money').style.display = 'block';
    document.getElementById('add-money-parent').style.display = 'none'
})
const validPin = 11992288



function getInputValueNumber(id){
    const inputField = parseInt(document.getElementById(id).value)
    return inputField
}


function getInputValue(id){
    const inputFieldValue = document.getElementById(id).value
    return inputFieldValue
}



document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
   
    const bank = getInputValue('bank')
    const accountNumber = getInputValue('accounts-number')
    const addPin = getInputValueNumber('add-pin')
    const amount = getInputValueNumber('add-amount')


    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(accountNumber.length !== 11){
        alert('Enter Your valid Account Number')
        return
    }


    if(addPin !== validPin){
        alert("Enter Valid Pin")
        return
    }

    const totalNewAvailableBalance = amount + availableBalance
    document.getElementById('available-balance').innerText = totalNewAvailableBalance
    
})




















document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();
   

     const accountNumber = getInputValue('agent-number');
    const amount = getInputValueNumber('withdraw-number')
    const addPin = getInputValueNumber('withdraw-pin');

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(accountNumber.length !== 11){
        alert('Enter Your valid Account Number');
        return;
    }
    if(addPin !== validPin){
        alert("Enter Valid Pin Number");
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
    
})
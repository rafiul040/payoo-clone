document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cashout-money').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block'
})
document.getElementById('cashout-button').addEventListener('click', function(){
    document.getElementById('cashout-money').style.display = 'block';
    document.getElementById('add-money-parent').style.display = 'none'
})
const validPin = 11992288


document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
   
    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const amount = parseInt(document.getElementById('add-amount').value)
    const addPin = parseInt(document.getElementById('add-pin').value)

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(accountNumber.length < 11){
        alert('Enter Your valid Account Number')
        return
    }
    if(addPin !== validPin){
        alert("Enter Valid Pin Number")
        return
    }

    const totalNewAvailableBalance = amount + availableBalance
    document.getElementById('available-balance').innerText = totalNewAvailableBalance
    
})




















document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault()
   

    const accountNumber = document.getElementById('agent-number').value
    const amount = parseInt(document.getElementById('withdraw-number').value)
    const addPin = parseInt(document.getElementById('withdraw-pin').value)

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(accountNumber.length < 11){
        alert('Enter Your valid Account Number')
        return
    }
    if(addPin !== validPin){
        alert("Enter Valid Pin Number")
        return
    }

    const totalNewAvailableBalance = availableBalance - amount
    document.getElementById('available-balance').innerText = totalNewAvailableBalance
    
})
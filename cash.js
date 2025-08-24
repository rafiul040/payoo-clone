
const validPin = 11992288
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
   

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

    const totalNewAvailableBalance = availableBalance - amount
    document.getElementById('available-balance').innerText = totalNewAvailableBalance
    
})
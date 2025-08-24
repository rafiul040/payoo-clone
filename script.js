document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = 8801903168428;
    const pinNumber = 1234;
    const mobileNumbervalue = document.getElementById('mobile-number').value
    const mobileNumberValueConverted = parseInt(mobileNumbervalue)
    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValueConverted = parseInt(pinNumberValue)



    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        console.log("All value Matched")
        window.location.href='./home.html'
    }
    else {
        alert('Invalid Credentials')
    }
})
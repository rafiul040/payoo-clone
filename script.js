document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = 8801903168428;
    const pinNumber = 1234;

    
    const mobileNumberValue = parseInt(document.getElementById('mobile-number').value)
    const pinNumberValue = parseInt(document.getElementById('pin-number').value)
    


    if(mobileNumberValue === mobileNumber && pinNumberValue === pinNumber){
        console.log("All value Matched")
        window.location.href='./home.html'
    }
    else {
        alert('Invalid Credentials')
    }
})
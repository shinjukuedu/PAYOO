document.getElementById('login-btn').addEventListener('click',(event)=>{
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const accountPin = document.getElementById('account-pin').value;
    const convertedPin = parseInt(accountPin);
    if(accountNumber.length === 11 ){
       
        if(convertedPin === 1234){
            window.location.href = './main.html';
        }
        else{
            alert('Need Valid pin Number');
        }
    }
    else{
        alert('account number is Not right');
    }
})
document.getElementById('add-money').addEventListener('click',(event)=>{
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('account-pin').value;
    const convertPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    
    if(amount && pin ){
        if(convertPin === 1234){
            const sumMainBalance = convertedMainBalance + convertedAmount ;
            document.getElementById('main-balance').innerText = sumMainBalance;
        }
        else{
            alert('Money not less than 1');
        }
       
       
        
    }
    else{
        console.log('your pin is not right');

    }

    
})
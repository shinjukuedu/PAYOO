document.getElementById('cash-out').addEventListener('click',(event)=>{
    event.preventDefault();
    const cashoutAmmount = document.getElementById('cash-out-amount').value;
    const convertCashOutAmount = parseFloat(cashoutAmmount);
    const accountPin = document.getElementById('cashout-pin').value; 
    const convertAccPin = parseInt(accountPin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertMainBalances = parseFloat(mainBalance);
    if(cashoutAmmount && accountPin){
        if(convertAccPin === 1234){
            const convertMainBalances = mainBalance - convertCashOutAmount;
            document.getElementById('main-balance').innerText = convertMainBalances;
        }
        else{
            console.log('please pin no invalid');
        }
    }
    
})
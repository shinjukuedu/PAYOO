document.getElementById('cash-out').addEventListener('click',(event)=>{
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const cashOutAmount = getElementById('cash-out-amount');
    const pinNumber = getElementById('cashout-pin');
    const mainBalance = innerTextGetElementById('main-balance');
    const selectBank = document.getElementById('allBank').value;

    if(cashOutAmount>mainBalance){
        alert('invalid amount')
        return;
    }

    if(accountNumber.length === 11){
        if(pinNumber === 1234){
           const sum = mainBalance - cashOutAmount;
            setInnerTextIdandValue('main-balance',sum);

            const container =  document.getElementById('transcation-box');
            const div = document.createElement('div');
        div.classList.add("bg-gray-300");
        div.innerHTML = `

            <h1>Cash Out Money ${selectBank}</h1>
            <h2>Amount ${cashOutAmount} taka</h2>
            <p>Cash Out Number ${accountNumber}</p>
         `
        container.appendChild(p);
        }
        else{
            alert('your pin invalid');
        }
    }
    else{
        console.log('your account is not right');
    }
})
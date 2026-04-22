
document.getElementById('add-money').addEventListener('click',(event)=>{
    event.preventDefault();
   const showAmount =  getElementById('amount');
   const  pin = getElementById('account-pin');
   const accountNumber = document.getElementById('account-number').value;
   const mainBalance = innerTextGetElementById('main-balance');
   const selectBank = document.getElementById('allBank').value;
   const transactionHistory = document.getElementById('transcation-box');
   if(showAmount<0){
    alert('real amount need');
        return;
    }
   
   if(accountNumber.length === 11){
    if(pin === 1234){
        const sum = mainBalance + showAmount;
        // document.getElementById('main-balance').innerText = sum;
        setInnerTextIdandValue('main-balance',sum);
        const container =  document.getElementById('transcation-box');
        const div = document.createElement('div');
        div.classList.add("bg-gray-300");
        div.innerHTML = `

            <h1>ADDED Money ${selectBank}</h1>
            <h2>Amount ${showAmount} taka</h2>
            <p>Transfer Number ${accountNumber}</p>
         `
         transactionHistory.appendChild(div);
        // const p = document.createElement('p');
        // p.innerText = `
        //     added ${showAmount} from ${accountNumber} account
        // `
        // container.appendChild(p);
        
    }
    else{
        console.log('pin thik nai');
    }

   }
   else{
    console.log('account thik nai');
   }
   
})
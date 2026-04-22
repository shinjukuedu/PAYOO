const trans = document.getElementById('transcation-box');
trans.style.display='none';
document.getElementById('transaction-history').addEventListener('click',()=>{
    handleToggle('addMoneys','none');
    handleToggle('cash-out-sec','none');
    handleToggle('transcation-box','block');
    
})

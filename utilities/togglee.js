document.getElementById('cash-out-sec').style.display='none';
document.getElementById('add-money-box').addEventListener('click',()=>{
    handleToggle('addMoneys','block');
    handleToggle('cash-out-sec','none');
    handleToggle('transcation-box','none');

})
document.getElementById('cash-out-money').addEventListener('click',()=>{
    handleToggle('cash-out-sec','block');
    handleToggle('addMoneys','none');
    handleToggle('transcation-box','none');

    
})

function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}
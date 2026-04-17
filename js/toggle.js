document.getElementById('cash-out-sec').style.display='none';

document.getElementById('add-money-box').addEventListener('click',()=>{
    document.getElementById('addMoneys').style.display = 'block';
    document.getElementById('cash-out-sec').style.display = 'none';
})
document.getElementById('cash-out-money').addEventListener('click',()=>{
    document.getElementById('cash-out-sec').style.display = 'block';
    document.getElementById('addMoneys').style.display = 'none';
    
})

function getElementById(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function innerTextGetElementById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextIdandValue(id,value){
    document.getElementById(id).innerText = value;
}
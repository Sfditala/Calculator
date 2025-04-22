const display = document.getElementById("display");
let currentexpresion = 0;


function updateDisplay(){
    display.value = currentexpresion || 0;

}

function appendToDisplay(value){

    if (currentexpresion === `0` && value != `.`){
        currentexpresion = ``;
    } 
    currentexpresion += value ;
    updateDisplay();

}

function clearDisplay(){
    currentexpresion = `0`;
    updateDisplay();

}

function calculateResult(){
    try{
        currentexpresion = eval(currentexpresion.replace(/x/g, `*`)).
        toString();
        updateDisplay();
    }catch(error){
    currentexpresion= `Error`;
    updateDisplay();
    setTimeout(clearDisplay, 1000);}
    
};








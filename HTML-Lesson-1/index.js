let display = document.getElementById("display");


function add (value)
{
    if(display.innerText == "0") {
        display.innerText = value;
    }
    else {
        display.innerText += value;
    }
}

function clearDisplay(){
    display.innerText="0";
}

function deleteChar() {
    display.innerText=display.innerText.slice(0, -1);

    if(display.innerText==""){
        display.innerText="0";
    }
}

function calculate ()
{

    try {
    let expression = display.innerText.replace(/X/g, '*');

    let result = eval(expression);

    if (result === 14) {
        display.innerHTML = "RENEBATERBONIA"
    }
    
    else {
        display.innerText = result;
    }
}
    catch{
        display.innerText="Error";
    }
}



document.addEventListener("keydown", function(event){
    let key=event.key;

    if("0123456789+-*/.%".includes(key)
    ){
        add(key);
    }
    if(key=="Enter") {
        calculate();
    }

    if(key=="Backspace") {
        deleteChar();
    }
    
    if(key=="Escape"){
        clearDisplay();
    }
});
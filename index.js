

const textBox=document.getElementById("textBox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");

let temp;

function convert(){

    if(toFahrenheit.checked){
        temp=Number(textBox.Value);
        temp=temp * 9/5 +32;
        result.textContent=temp.toFixed(1)+"F";

    }
    else if(toCelsius.checked){

    }

    else{
        result.textContent ="Select a unit";

    }



}
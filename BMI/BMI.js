const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const successButton = document.getElementById("btn-success");
const resetButton = document.getElementById("btn-reset");
const result = document.getElementById("dynamic__bmi");
const message = document.getElementById("bmi_text");

function calculateBMI(){
    // let height,weight,bmi;
    let height=Number(heightInput.value);
    let weight=Number(weightInput.value);
    let bmi= weight/ (height*0.0254*height*0.0254);
    result.textContent=bmi.toFixed(2);
    let msg=showMessage(bmi);
    message.innerHTML = msg

}

function showMessage(bmiValue){
    if(bmiValue<16){
        return "You are severe thin"
    }else if(bmiValue>=16 && bmiValue<=17){
        return "You are moderate thin"
    }else if(bmiValue>17 && bmiValue<=18.5){
        return  "You are Mid Thin"
    }else if(bmiValue>18.5 && bmiValue<=25){
        return "You are Normal"
    }else if(bmiValue>25){
        return "You are Overweight"
    }
}

function reset(){
    heightInput.value="";
    weightInput.value="";
    result.textContent="_________";
    message.textContent="";
}

function eventHandler(){
    if(Number(heightInput.value) && Number(weightInput.value)){
        calculateBMI();
    }else{
        alert("Please provide a valid number");
        reset();
    }
}

successButton.addEventListener("click",eventHandler);
resetButton.addEventListener("click",reset)
import {showTip, updateTip} from "./defaultTooltip.js";

export default function emailValidation(){
    const emailInput = document.getElementById('iemail');

    emailInput.addEventListener('input', validateInput);
    emailInput.addEventListener('focus', showTip);
    emailInput.addEventListener('input', updateTip);

    function validateInput() {
        const regex = /^[a-zA-Z0-9._%\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,255}/;
        let email = emailInput.value;
        
        if(email.length === 0){
            emailInput.style.borderColor = "#a59a9a";
        } else if(regex.test(email)){
            emailInput.setCustomValidity("");
            emailInput.style.borderColor = "green";
        } else {
            emailInput.setCustomValidity("Insira um endereço de email válido");
            emailInput.style.borderColor = "red";
        }
    }
}
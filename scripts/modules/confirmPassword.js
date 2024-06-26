import {showTip, updateTip} from "./defaultTooltip.js";

export default function confirmPassword(){
    const passInput = document.getElementById('ipass');
    const confInput = document.getElementById('iconfpass');

    confInput.addEventListener('focus', checkConfirmation);
    passInput.addEventListener('input', checkConfirmation);
    confInput.addEventListener('input', checkConfirmation);

    confInput.addEventListener('input', updateTip);
    confInput.addEventListener('focus', showTip);

    function checkConfirmation(){
        let password = passInput.value;
        let confirm = confInput.value;
        
        if(confirm.length === 0){
            confInput.setCustomValidity("Empty Field");
            confInput.style.borderColor = "#a59a9a";
        } else if(password === confirm && passInput.checkValidity()){
            confInput.setCustomValidity("");
            confInput.style.borderColor = "green";
        } else {
            confInput.setCustomValidity("Invalid Value");
            confInput.style.borderColor = "red";
        }
    }
}
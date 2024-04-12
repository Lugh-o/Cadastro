export default function confirmPassword(){
    const passInput = document.getElementById('ipass');
    const confInput = document.getElementById('iconfpass');

    passInput.addEventListener('input', checkConfirmation);
    confInput.addEventListener('input', checkConfirmation);

    function checkConfirmation(){
        let password = passInput.value;
        let confirm = confInput.value;
        
        if(confirm.length === 0){
            confInput.style.borderColor = "#a59a9a";
        } else if(password === confirm){
            confInput.setCustomValidity("");
            confInput.style.borderColor = "green";
        } else {
            confInput.setCustomValidity("As senhas não coincidem");
            confInput.style.borderColor = "red";
        }
    }
}
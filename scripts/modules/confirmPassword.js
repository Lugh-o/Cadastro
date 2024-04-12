export default function confirmPassword(){
    const passInput = document.getElementById('ipass');
    const confInput = document.getElementById('iconfpass');

    passInput.addEventListener('input', checkConfirmation);
    confInput.addEventListener('input', checkConfirmation);

    confInput.addEventListener('focus', showTip);
    confInput.addEventListener('input', updateTip);

    function checkConfirmation(){
        let password = passInput.value;
        let confirm = confInput.value;
        
        if(confirm.length === 0){
            confInput.style.borderColor = "#a59a9a";
        } else if(password === confirm && passInput.checkValidity()){
            confInput.setCustomValidity("");
            confInput.style.borderColor = "green";
        } else {
            confInput.setCustomValidity("As senhas não coincidem");
            confInput.style.borderColor = "red";
        }
    }

    function showTip(){
        const tooltipBox = createTooltipBox(this);
        deleteTip.tooltipBox = tooltipBox;
        deleteTip.element = this;
        updateTip();
        this.addEventListener('blur', deleteTip);
    }

    function updateTip(){
        const tip = document.getElementById('iconftip')
        if(confInput.checkValidity()){
            tip.style.display = "none";
        } else {
            tip.style.display = "block";
        }
    }


    const deleteTip = {
        handleEvent(){
            this.tooltipBox.remove();
            this.element.removeEventListener('blur', deleteTip);
        }
    }

    function createTooltipBox(){
        const tooltipBox = document.createElement('div');
        const form = document.getElementById('iform');

        tooltipBox.classList.add('tooltip');
        tooltipBox.id = "iconftip";
        tooltipBox.innerText = "As senhas não coincidem";
        form.appendChild(tooltipBox);
        return tooltipBox
    }




}
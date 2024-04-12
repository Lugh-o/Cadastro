export default function disableButton(){
    const passInput = document.getElementById('ipass');
    const confInput = document.getElementById('iconfpass');
    const emailInput = document.getElementById('iemail');
    const userInput = document.getElementById('iuser');
    const termsInput = document.getElementById('iterms');
    const btn = document.getElementById('isubmit');
    const form = document.getElementById('iform');

    form.addEventListener('input', () => {
        let validation = passInput.checkValidity() && confInput.checkValidity() && emailInput.checkValidity() && userInput.checkValidity() && termsInput.checked;

        if(validation) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    });

    btn.addEventListener('mouseover', showTooltip);

    function showTooltip() {
        const btn = document.getElementById('isubmit');
        if(btn.disabled){
            const tooltipBox = createTooltipBox(this);
            let btnPos = btn.getBoundingClientRect();
            tooltipBox.style.top = btnPos.top - 2 + "px";
            tooltipBox.style.left = btnPos.left + 130 + "px";
    
            onMouseLeave.tooltipBox = tooltipBox;
            onMouseLeave.element = this;
            this.addEventListener('mouseleave', onMouseLeave);
        }
    }

    const onMouseLeave = {
        handleEvent(){
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
        }
    }

    function createTooltipBox(){
        const tooltipBox = document.createElement('div');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = "Todos os inputs devem ser válidos para continuar";
        document.body.appendChild(tooltipBox);
        return tooltipBox
    }

}

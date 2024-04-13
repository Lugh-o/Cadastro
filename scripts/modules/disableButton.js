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

        btn.disabled = validation ? false : true;
    });

    btn.addEventListener('mouseover', showTip);

    function showTip() {
        if(btn.disabled){
            createTooltipBox();
            this.addEventListener('mouseleave', deleteTip);
        }
    }

    function deleteTip() {
        document.getElementById('ibtntip').remove();
        this.removeEventListener('mouseleave', deleteTip);
    }

    function createTooltipBox(){
        const form = document.getElementById('iform');
        const tooltipBox = document.createElement('div');

        tooltipBox.classList.add('tooltip');
        tooltipBox.id = 'ibtntip';
        tooltipBox.innerText = "Todos os inputs devem ser válidos para continuar";
        form.appendChild(tooltipBox);
    }
}

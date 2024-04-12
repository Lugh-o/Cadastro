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

}

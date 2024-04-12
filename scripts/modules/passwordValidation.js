export default function passwordValidation(){
    const passInput = document.getElementById('ipass');
    let tooltipArray = [
        ["Insira pelo menos uma letra minúscula", false],
        ["Insira pelo menos uma letra maiúscula", false],
        ["Insira pelo menos um caractere especial: \"@.#$!%*?&\"", false],
        ["Insira pelo menos um número de 0 a 9", false],
        ["A senha deve conter no mínimo 8 caracteres", false]
    ];
    let printArray = [];

    passInput.addEventListener('input', validateInput);
    passInput.addEventListener('focus', showTip);
    passInput.addEventListener('input', updateTip);

    function validateInput() {
        let password = passInput.value;
        const lowerRegex = /^(?=.*[a-z])/;
        const upperRegex = /^(?=.*[A-Z])/;
        const specialRegex = /^(?=.*[@.#$!%*?&])/;
        const numberRegex = /^(?=.*[0-9])/;
        const lengthRegex = /^.{8,255}$/;

        tooltipArray[0][1] = lowerRegex.test(password) ? true : false;
        tooltipArray[1][1] = upperRegex.test(password) ? true : false;
        tooltipArray[2][1] = specialRegex.test(password) ? true : false;
        tooltipArray[3][1] = numberRegex.test(password) ? true : false;
        tooltipArray[4][1] = lengthRegex.test(password) ? true : false;

        if(password.length === 0){
            passInput.style.borderColor = "#a59a9a";
        } else if(tooltipArray.map(x => x[1]).every(Boolean)){
            passInput.setCustomValidity("");
            passInput.style.borderColor = "green";
        } else {
            passInput.setCustomValidity("Invalid Field");
            passInput.style.borderColor = "red";
        }
    }

    function showTip(){
        const tooltipBox = createTooltipBox(this);
        deleteTip.tooltipBox = tooltipBox;
        deleteTip.element = this;
        updateTip();
        this.addEventListener('blur', deleteTip);
    }

    function updateTip() {
            const list = document.getElementById('ilist');
            list.innerHTML = "";
            printArray = [];

            let j = 0;
            for(let i = 0; i < tooltipArray.length; i++){
                if(tooltipArray[i][1] === false){
                    printArray[j] = tooltipArray[i][0];
                    j++
                }
            }
            for(let i = 0; i < printArray.length; i++){
                let listItem = document.createElement('li');
                listItem.innerHTML = printArray[i]
                list.appendChild(listItem);
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
        const list = document.createElement("ul");
        const form = document.getElementById('iform');

        list.id = "ilist";
        tooltipBox.classList.add('tooltip');
        tooltipBox.id = "ipasstip";
        tooltipBox.appendChild(list);
        form.appendChild(tooltipBox);
        return tooltipBox
    }

}
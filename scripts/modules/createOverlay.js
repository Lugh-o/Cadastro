import passwordValidation from "./passwordValidation.js";
import confirmPassword from "./confirmPassword.js";

export default function createOverlay(){
    const userButton = document.getElementById('ichangeUser');
    const passButton = document.getElementById('ichangePass');

    userButton.addEventListener('click', userOverlay);
    passButton.addEventListener('click', passOverlay);

    function userOverlay(){
        createTint();
        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.id = "ioverlay"

        const title = document.createElement('h1');
        title.innerText = "Alterar Nome de Usuário";
        overlay.appendChild(title);
        let form = document.createElement('form');
        form.action = "#";
        form.method = "post";
        form.id = "iform";

        insertInputField(form, "text", "newUser", "inewUser", "novo usuário");
        insertInputField(form, "password", "pass", "ipass", "senha");
        insertButton(form, "submit", "isub", "Alterar");

        let exitBtn = insertButton(form, "button", "icancelar", "Cancelar");
        exitBtn.addEventListener('click', deleteOverlay);
        
        overlay.appendChild(form);
        document.body.appendChild(overlay);
    }

    function passOverlay(){
        createTint();
        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.id = "ioverlay"

        const title = document.createElement('h1');
        title.innerText = "Alterar Senha";
        overlay.appendChild(title);
        let form = document.createElement('form');
        form.action = "#";
        form.method = "post";
        form.id = "iform";

        insertInputField(form, "password", "oldpass", "iOldPass", "senha atual");
        insertInputField(form, "password", "pass", "ipass", "nova senha");
        insertInputField(form, "password", "confpass", "iconfpass", "confirme a nova senha", "As senhas não coincidem.", "iconftip");
        insertButton(form, "submit", "isub", "Alterar");
        
        let exitBtn = insertButton(form, "button", "icancelar", "Cancelar");
        exitBtn.addEventListener('click', deleteOverlay);
        
        overlay.appendChild(form);
        document.body.appendChild(overlay);
        confirmPassword();
        passwordValidation();
    }

    function deleteOverlay(){
        let overlay = document.getElementById('ioverlay');
        let exitBtn = document.getElementById("icancelar");
        let tint = document.getElementById("itint");
        exitBtn.removeEventListener('click', deleteOverlay);
        overlay.remove();
        tint.remove();
    }

    function insertInputField(element, type, name, id, placeholder, tooltipText, tooltipId){
        let inputField = document.createElement('input');
        inputField.type = type;
        inputField.name = name
        inputField.setAttribute("tooltipText", tooltipText || "");
        inputField.setAttribute("tooltipId", tooltipId || "");

        inputField.classList.add('text');
        inputField.id = id;
        inputField.placeholder = placeholder;
        element.appendChild(inputField);
    }

    function insertButton(element, type, id, value){
        let button = document.createElement('input');
        button.type = type;
        
        button.classList.add('button');
        button.id = id;
        button.value = value;
        element.appendChild(button);
        return button;
    }

    function createTint() {
        const tint = document.createElement('div');
        tint.id = "itint";
        tint.classList.add('tint');
        document.body.appendChild(tint);
    }
}
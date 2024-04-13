export default function userValidation() {
    const userInput = document.getElementById('iuser');

    userInput.addEventListener('input', () => {
        const regex = /^.{5,32}$/;
        let username = userInput.value;

        if(username.length === 0){
            userInput.style.borderColor = "#a59a9a";
        } else if(regex.test(username)){
            userInput.setCustomValidity("");
            userInput.style.borderColor = "green";
        } else {
            userInput.setCustomValidity("Insira um nome de usuário válido");
            userInput.style.borderColor = "red";
        }
    });
}
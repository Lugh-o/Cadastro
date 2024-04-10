btn = document.getElementById('isubmit');
checkbox = document.getElementById('iterms');

checkbox.addEventListener("change", () => {
    btn.disabled = !btn.disabled;
});

btn.addEventListener("onmousehover", () => {
        //ADICIONAR TIP NO BOTAO
});
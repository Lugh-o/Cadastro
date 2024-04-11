export default function disableButton(){
    const btn = document.getElementById('isubmit');
    const checkbox = document.getElementById('iterms');
    
    checkbox.addEventListener("change", () => {
        btn.disabled = !btn.disabled;
    });   
}

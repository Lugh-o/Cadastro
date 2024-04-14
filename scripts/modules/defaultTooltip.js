let element;

export function showTip(){
    element = this;
    createTooltipBox();
    updateTip();
    this.addEventListener('blur', deleteTip);
}

export function updateTip(){
    const tipId = element.getAttribute(['tooltipId']);
    const tip = document.getElementById(tipId)
    tip.style.display = element.checkValidity()? "none" : "block";
}

export function deleteTip() {
    const tipId = element.getAttribute(['tooltipId']);
    document.getElementById(tipId).remove();
    this.removeEventListener('blur', deleteTip);
}

export function createTooltipBox(){
    const tooltipBox = document.createElement('div');
    const tipId = element.getAttribute(['tooltipId']);
    const form = document.getElementById('iform');

    tooltipBox.classList.add('tooltip');
    tooltipBox.id = tipId;
    tooltipBox.innerText = element.getAttribute(['tooltipText']);
    form.appendChild(tooltipBox);
}
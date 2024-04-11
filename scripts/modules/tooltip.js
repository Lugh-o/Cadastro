export default function tooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    });

    function onMouseOver() {
        const btn = document.getElementById('isubmit');
        if(btn.disabled){
            const tooltipBox = createTooltipBox(this);

            let btnPos = btn.getBoundingClientRect();
            tooltipBox.style.top = btnPos.top + "px";
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

    function createTooltipBox(element){
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');

        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox
    }
}


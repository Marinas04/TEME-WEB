export default class View {
    constructor(container) {
        this.container = container;
        this.init();
    }

    init() {
        this.container.innerHTML = `
            <div class="calc-container">
                <div class="display">
                    <div class="expression" id="exp"></div>
                    <div class="result" id="res">0</div>
                </div>
                <div class="buttons">
                    <button class="clear" data-type="clear">AC</button>
                    <button class="operator" data-val="/">/</button>
                    <button class="operator" data-val="*">*</button>
                    <button data-val="7">7</button><button data-val="8">8</button><button data-val="9">9</button>
                    <button class="operator" data-val="-">-</button>
                    <button data-val="4">4</button><button data-val="5">5</button><button data-val="6">6</button>
                    <button class="operator" data-val="+">+</button>
                    <button data-val="1">1</button><button data-val="2">2</button><button data-val="3">3</button>
                    <button class="equal" data-type="equal">=</button>
                    <button data-val="0" style="grid-column: span 2">0</button>
                    <button data-val=".">.</button>
                </div>
            </div>
        `;
        this.resDisplay = document.getElementById('res');
        this.expDisplay = document.getElementById('exp');
    }

    updateDisplay(data) {
        this.resDisplay.innerText = data.displayValue;
        this.expDisplay.innerText = data.expression;
    }

    bindClick(handler) {
        this.container.addEventListener('click', e => {
            if (e.target.tagName === 'BUTTON') {
                handler(e.target.dataset);
            }
        });
    }
}
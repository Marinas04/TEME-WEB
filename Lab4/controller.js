export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Înregistrăm handler-ul pentru click-uri în View
        this.view.bindClick(this.handleInput.bind(this));
    }

    handleInput(data) {
        if (data.type === 'clear') {
            this.model.reset();
        } else if (data.type === 'equal') {
            this.model.calculate();
        } else if (data.val && "+-*/".includes(data.val)) {
            this.model.inputOperator(data.val);
        } else {
            this.model.inputDigit(data.val);
        }

        // După fiecare acțiune, actualizăm View-ul
        this.view.updateDisplay({
            displayValue: this.model.displayValue,
            expression: this.model.expression
        });
    }
}
export default class Model {
    constructor() {
        this.reset();
    }

    reset() {
        this.operand1 = '';
        this.operand2 = '';
        this.operator = null;
        this.displayValue = '0';
        this.expression = '';
        this.isFinished = false;
    }

    inputDigit(digit) {
        if (this.isFinished) {
            this.reset();
        }

        if (this.operator) {
            this.operand2 += digit;
            this.displayValue = this.operand2;
        } else {
            this.operand1 += digit;
            this.displayValue = this.operand1;
        }
    }

    inputOperator(op) {
        if (this.operand1 === '') return;
        if (this.operand2 !== '') this.calculate();
        
        this.operator = op;
        this.isFinished = false;
        this.expression = `${this.operand1} ${op}`;
    }

    calculate() {
        if (!this.operator || !this.operand2) return;

        let res;
        const a = parseFloat(this.operand1);
        const b = parseFloat(this.operand2);

        switch (this.operator) {
            case '+': res = a + b; break;
            case '-': res = a - b; break;
            case '*': res = a * b; break;
            case '/': 
                res = b === 0 ? "Eroare: Div/0" : a / b; 
                break;
        }

        this.expression = `${this.operand1} ${this.operator} ${this.operand2} =`;
        this.displayValue = res.toString();
        this.operand1 = res.toString();
        this.operand2 = '';
        this.operator = null;
        this.isFinished = true;
    }
}
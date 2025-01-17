function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.checkIsNaN = function(num) {
    return isNaN(num);
}

Calculator.prototype.transform = function(operationType, num1, num2) {
    if(this.checkIsNaN(num1) || this.checkIsNaN(num2)) {
        alert('Wprowadzono błędne dane!');
    } else {
        const result = operations[operationType](Number(num1), Number(num2));
        this.history.push(`${num1} ${operationType} ${num2} = ${result}`);
    }
}

Calculator.prototype.add = function(num1, num2) {
    return num1 + num2;
}

Calculator.prototype.sub = function(num1, num2) {
    return num1 - num2;
}

Calculator.prototype.mul = function(num1, num2) {
    return num1 * num2;
}

Calculator.prototype.div = function(num1, num2) {
    return num1 / num2;
}

Calculator.prototype.pow = function(num1, num2) {
    return Math.pow(num1, num2);
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;

const operations = {
    '+': calc.add,
    '-': calc.sub,
    '*': calc.mul,
    '/': calc.div,
    '^': calc.pow,
};

do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);

    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        calc.transform(action, number1, number2);
    }

} while (calc.isCorrectAction(action));

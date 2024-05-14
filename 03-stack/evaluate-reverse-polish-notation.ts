function evalRPN(tokens: string[]): number {
    const stack = [] as number[];
    let number: number;
    let operand1: number;
    let operand2: number;
    let result: number;

    tokens.forEach((token) => {
        number = Number(token);
        if (!Number.isNaN(number)) {
            stack.push(number);
        } else {
            operand2 = stack.pop();
            operand1 = stack.pop();
            switch (token) {
                case "+":
                    result = operand1 + operand2;
                    break;
                case "-":
                    result = operand1 - operand2;
                    break;
                case "*":
                    result = operand1 * operand2;
                    break;
                case "/":
                    result = operand1 / operand2;
                    if (result < 0) {
                        result = Math.ceil(result);
                    } else {
                        result = Math.floor(result);
                    }
                    break;
            }
            stack.push(result);
        }
    });

    return stack.pop();
}

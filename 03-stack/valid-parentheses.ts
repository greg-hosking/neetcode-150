function isValid(s: string): boolean {
    const stack: string[] = [];
    let open = "";
    let isValid = true;

    s.split("").forEach((c) => {
        if (c === "(" || c === "[" || c === "{") {
            stack.push(c);
        } else {
            if (stack.length === 0) {
                isValid = false;
                return;
            }
            open = stack[stack.length - 1];
            if (
                (open === "(" && c === ")") ||
                (open === "[" && c === "]") ||
                (open === "{" && c === "}")
            ) {
                stack.pop();
            } else {
                isValid = false;
                return;
            }
        }
    });

    // Stack should be empty by the end.
    if (stack.length > 0) {
        isValid = false;
    }

    return isValid;
}

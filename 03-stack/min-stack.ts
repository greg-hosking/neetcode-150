interface Node {
    value: number | null;
    minValue: number | null;
    next: Node | null;
}

function createNode(
    value: number | null,
    minValue: number | null,
    next: Node | null
): Node {
    return {
        value,
        minValue,
        next,
    };
}

class MinStack {
    minValue: number | null;
    head: Node | null;

    constructor() {
        this.minValue = null;
        this.head = createNode(null, null, null);
    }

    push(val: number): void {
        this.minValue =
            this.minValue === null ? val : Math.min(val, this.minValue);
        this.head = createNode(val, this.minValue, this.head);
    }

    pop(): void {
        this.head = this.head.next;
        this.minValue = this.head.minValue;
    }

    top(): number {
        return this.head.value;
    }

    getMin(): number {
        return this.minValue;
    }
}

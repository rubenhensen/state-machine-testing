interface State {
    insertTenCent() : void;
    insertFiveCent() : void;
    pushCoffeeButton() : void;
}

class ZeroCentState implements State {
    coffeeMachine : CoffeeMachine;
    constructor(cm : CoffeeMachine) {
        this.coffeeMachine = cm;
    }
    insertFiveCent() {
        console.log("");
        this.coffeeMachine.setState(this.coffeeMachine.getFiveCentState());
    }
    insertTenCent() {
        console.log("");
        this.coffeeMachine.setState(this.coffeeMachine.getTenCentState());
    }
    pushCoffeeButton() {
        console.log("");
        // this.coffeeMachine.setState(this.coffeeMachine.getZeroCentState());
    }
}
class FiveCentState implements State {
    coffeeMachine : CoffeeMachine;
    constructor(cm : CoffeeMachine) {
        this.coffeeMachine = cm;
    }
    insertFiveCent() {
        console.log("");
        this.coffeeMachine.setState(this.coffeeMachine.getTenCentState());
    }
    insertTenCent() {
        console.log("5 ct!");
        this.coffeeMachine.setState(this.coffeeMachine.getTenCentState());
    }
    pushCoffeeButton() {
        console.log("");
        // this.coffeeMachine.setState(this.coffeeMachine.getFiveCentState());
    }
}
class TenCentState implements State {
    coffeeMachine : CoffeeMachine;
    constructor(cm : CoffeeMachine) {
        this.coffeeMachine = cm;
    }
    insertFiveCent() {
        console.log("5 ct!");
        this.coffeeMachine.setState(this.coffeeMachine.getTenCentState());
    }
    insertTenCent() {
        console.log("10 ct!");
        this.coffeeMachine.setState(this.coffeeMachine.getTenCentState());
    }
    pushCoffeeButton() {
        console.log("koffie!");
        this.coffeeMachine.decrementCoffee();
        this.coffeeMachine.setState(this.coffeeMachine.getZeroCentState());
    }
}

export class CoffeeMachine {
    private currentState: State;
    private coffeeWeight: number;
    private zeroCentState: State = new ZeroCentState(this);
    private fiveCentState: State = new FiveCentState(this);
    private tenCentState: State = new TenCentState(this);

    setState(state : State) {
        this.currentState = state;
    }
    decrementCoffee() {
        if (this.coffeeWeight <= 0) {
            throw "Out of coffee";
        } else {
            this.coffeeWeight -= 10;
        }
    }
    getZeroCentState() {
        return this.zeroCentState;
    }
    getFiveCentState() {
        return this.fiveCentState;
    }
    getTenCentState() {
        return this.tenCentState;
    }
    constructor() {
        this.currentState = this.zeroCentState;
        this.coffeeWeight = 100;
    }

    transition(input: String) {
        switch (input) {
            case '5 ct?':
                this.currentState.insertFiveCent();
                break;
            case '10 ct?':
                this.currentState.insertTenCent();
                break;
            case 'koffie?':
                this.currentState.pushCoffeeButton();
                break;
        }
    }
}
let test = new CoffeeMachine();

test.transition('10 ct?');
test.transition('koffie?');
test.transition('5 ct?');
// test.transition('test');
// test.transition('print');

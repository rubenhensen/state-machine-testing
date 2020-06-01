"use strict";
exports.__esModule = true;
exports.CoffeeMachine = void 0;
var ZeroCentState = /** @class */ (function () {
    function ZeroCentState(cm) {
        this.coffeeMachine = cm;
    }
    ZeroCentState.prototype.insertFiveCent = function () {
        console.log("");
        this.coffeeMachine.setState(this.coffeeMachine.getFiveCentState());
    };
    ZeroCentState.prototype.insertTenCent = function () {
        console.log("");
        this.coffeeMachine.setState(this.coffeeMachine.getTenCentState());
    };
    ZeroCentState.prototype.pushCoffeeButton = function () {
        console.log("");
        // this.coffeeMachine.setState(this.coffeeMachine.getZeroCentState());
    };
    return ZeroCentState;
}());
var FiveCentState = /** @class */ (function () {
    function FiveCentState(cm) {
        this.coffeeMachine = cm;
    }
    FiveCentState.prototype.insertFiveCent = function () {
        console.log("");
        this.coffeeMachine.setState(this.coffeeMachine.getTenCentState());
    };
    FiveCentState.prototype.insertTenCent = function () {
        console.log("5 ct!");
        this.coffeeMachine.setState(this.coffeeMachine.getTenCentState());
    };
    FiveCentState.prototype.pushCoffeeButton = function () {
        console.log("");
        // this.coffeeMachine.setState(this.coffeeMachine.getFiveCentState());
    };
    return FiveCentState;
}());
var TenCentState = /** @class */ (function () {
    function TenCentState(cm) {
        this.coffeeMachine = cm;
    }
    TenCentState.prototype.insertFiveCent = function () {
        console.log("5 ct!");
        this.coffeeMachine.setState(this.coffeeMachine.getTenCentState());
    };
    TenCentState.prototype.insertTenCent = function () {
        console.log("10 ct!");
        this.coffeeMachine.setState(this.coffeeMachine.getTenCentState());
    };
    TenCentState.prototype.pushCoffeeButton = function () {
        console.log("koffie!");
        this.coffeeMachine.decrementCoffee();
        this.coffeeMachine.setState(this.coffeeMachine.getZeroCentState());
    };
    return TenCentState;
}());
var CoffeeMachine = /** @class */ (function () {
    function CoffeeMachine() {
        this.zeroCentState = new ZeroCentState(this);
        this.fiveCentState = new FiveCentState(this);
        this.tenCentState = new TenCentState(this);
        this.currentState = this.zeroCentState;
        this.coffeeWeight = 100;
    }
    CoffeeMachine.prototype.setState = function (state) {
        this.currentState = state;
    };
    CoffeeMachine.prototype.decrementCoffee = function () {
        if (this.coffeeWeight <= 0) {
            throw new Error("Out of coffee");
        }
        else {
            this.coffeeWeight -= 10;
        }
    };
    CoffeeMachine.prototype.getZeroCentState = function () {
        return this.zeroCentState;
    };
    CoffeeMachine.prototype.getFiveCentState = function () {
        return this.fiveCentState;
    };
    CoffeeMachine.prototype.getTenCentState = function () {
        return this.tenCentState;
    };
    CoffeeMachine.prototype.transition = function (input) {
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
    };
    return CoffeeMachine;
}());
exports.CoffeeMachine = CoffeeMachine;
var test = new CoffeeMachine();
test.transition('10 ct?');
test.transition('koffie?');
test.transition('5 ct?');
// test.transition('test');
// test.transition('print');

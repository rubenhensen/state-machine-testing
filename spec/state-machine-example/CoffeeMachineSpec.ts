import "jasmine";
import { CoffeeMachine } from "../../lib/state_machine_example/CoffeeMachine"

let coffeeMachine = new CoffeeMachine();
describe("Coffee machine", function() {
    beforeEach(function() {
        coffeeMachine = new CoffeeMachine();
    });

    it("should have a 0 cent state", function() {
        // input 10 ct? and koffie? to get to the 0 cent state.
        coffeeMachine.transition('10 ct?');
        coffeeMachine.transition('koffie?');

        spyOn(console, 'log');
        // input 10 ct? to check if we are in the 0 cent state.
        coffeeMachine.transition('10 ct?');
        expect(console.log).toHaveBeenCalledWith("")
    });

    it("should have a 5 cent state", function() {
        // input 10 ct? and koffie? and 5 ct? to get to the 5 cent state.
        coffeeMachine.transition('10 ct?');
        coffeeMachine.transition('koffie?');
        coffeeMachine.transition('5 ct?');

        spyOn(console, 'log');
        // input 10 ct? to check if we are in the 0 cent state.
        coffeeMachine.transition('10 ct?');
        expect(console.log).toHaveBeenCalledWith("5 ct!");
    });

    it("should have a 10 cent state", function() {
        // input 10 ct? to get to the 5 cent state.
        coffeeMachine.transition('10 ct?');

        spyOn(console, 'log');
        // input 10 ct? to check if we are in the 0 cent state.
        coffeeMachine.transition('10 ct?');
        expect(console.log).toHaveBeenCalledWith("10 ct!");
    });
    //demonstrates use of expected exceptions
    // describe("#resume", function() {
    //     it("should throw an exception if song is already playing", function() {
    //         player.play(song);
    //
    //         expect(function() {
    //             player.resume();
    //         }).toThrowError("song is already playing");
    //     });
    // });
});

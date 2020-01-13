const vendingMachine = require('../lib/vending-machine.js');
const itemInventory = require('../data.js');
const coinInventory = require('../data.js')
const vending = new vendingMachine(itemInventory, coinInventory);

describe('Vending Machine', () => {
    describe('when selected item in stock', () => {
        it('should return the selected item', () => {
            expect(vending.dispenseItem('chips')).toEqual('Chips');
        });
    });
    describe('when selected item is out of stock', () => {
        it('should return an error', () => {
            expect(() => {
                vending.dispenseItem('bubbleGum')
            }).toThrow(Error);
        });
        it('should refill the item inventory to be fully stocked', () => {
            expect(vending.refillInventory('bubbleGum')).toEqual(30);
        });
    });
    // describe('when item selected but the machine is out of coin stock', () => {
    //     it('should return an error', () => {
    //         expect(vending('')).toEqual('');
    //     });
    //     it('should re-supply the coin inventory to its max capacity', () => {
    //         expect(vending('')).toEqual('');
    //     });
    // });

    // describe('when money was inserted with exact amount for purchase', () => {
    //     it('should return the item', () => {
    //         expect(vending.dispenseItem('chips')).toEqual('Chips');
    //     });
    // });
    // describe('when money was inserted with insufficient amount for purchase', () => {
    //     it('should return an error', () => {
    //         expect(vendingMachine('')).toEqual('');
    //     });
    // });
    // describe('when money was inserted with excessive amount for purchase', () => {
    //     it('should return change', () => {
    //         expect(vendingMachine('')).toEqual('');
    //     });
    // });
    // describe('when a specific coin is out of stock', () => {
    //     it('should return an error', () => {
    //         expect(vendingMachine('')).toEqual('');
    //     });
    // });
    // describe('when item was selected but money was not inserted', () => {
    //     it('should return the vending machine screen to its initial state after 15 seconds', () => {
    //         expect(vendingMachine('')).toEqual('');
    //     });
    // });
    // describe('when the type of coin inserted does not meet the requirements', () => {
    //     it('should throw an error and return the coin back', () => {
    //         expect(vendingMachine('')).toEqual('');
    //     });
    // });

});
const vendingMachine = require('../lib/vending-machine.js');
const inventory = require('../data.js');
const vending = new vendingMachine(inventory);

describe('Vending Machine', () => {
    describe('display the inventory', () => {
        it('should return the inventory values', () => {
            expect(vending.displayInventory());
        });
    });
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
    describe('when the item is already fully stocked', () => {
        it('should return an error', () => {
            expect(() => {
                vending.refillInventory('doritos')
            }).toThrow(Error);
        });
    });
    describe('when the item selected does not exist in the inventory', () => {
        it('should return an error', () => {
            expect(() => {
                vending.dispenseItem('banana')
            }).toThrow(Error);
        });
    });
    describe('when the type of coin inserted does not meet the machine requirements', () => {
        it('should return an error', () => {
            expect(() => {
                vending.resupplyChange('penny')
            }).toThrow(Error);
        });
    });
    describe('when item selected but the machine is out of coin stock', () => {
        it('should re-supply the coin inventory to its max capacity', () => {
            expect(vending.resupplyChange('nickel')).toEqual(92);
        });
    });
    describe('when money was inserted with exact amount for purchase', () => {
        it('should return the item', () => {
            expect(vending.purchaseItem('mars', 1)).toEqual('Mars');
        });
    });
    describe('when money was inserted with insufficient amount for purchase', () => {
        it('should return an error', () => {
            expect(() => {
                vending.purchaseItem('mars', 0.5)
            }).toThrow(Error);
        });
    });
    describe('when money was inserted with excessive amount for purchase', () => {
        it('should return change', () => {
            expect(vending.purchaseItem('mars', 2)).toEqual(1);
        });
    });

});
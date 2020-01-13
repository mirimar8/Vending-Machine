class vendingMachine {

    constructor(itemInventory, coinInventory) {
        this.itemInventory = itemInventory;
        this.coinInventory = coinInventory;
    }

    dispenseItem(item, moneyInput) {
        console.log(this.itemInventory[item]);

        if (this.itemInventory[item].currentNumber > 0) {
            return this.itemInventory[item].name;
        } else {
            throw new Error('The item selected is out of stock.');
        }

    };

    refillInventory(item) {
        if (this.itemInventory[item].currentNumber === 0) {

            let refillStock = this.itemInventory[item].currentNumber + this.itemInventory[item].maxNumber;
            console.log(refillStock);
            return refillStock;
        }
    }



}





module.exports = vendingMachine;
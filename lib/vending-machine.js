class vendingMachine {

    constructor(itemInventory, coinInventory) {
        this.itemInventory = itemInventory;
        this.coinInventory = coinInventory;
    }

    dispenseItem(item) {
        // console.log(this.itemInventory[item]);
        if (!this.itemInventory[item].name) {
            throw new Error('this selection is not valid.');
        }
        if (this.itemInventory[item].currentNumber > 0) {
            return this.itemInventory[item].name;
        } else {
            throw new Error('The item selected is out of stock.');
        }
    };

    refillInventory(item) {
        if (this.itemInventory[item].currentNumber === 0) {
            let refillStock = this.itemInventory[item].currentNumber + this.itemInventory[item].maxNumber;
            // console.log(refillStock);
            return refillStock;
        }
    }


    purchaseItem(item, amountInserted) {
        // console.log(this.itemInventory[item].price);

        if (amountInserted === this.itemInventory[item].price) {
            return this.itemInventory[item].name;

        } else if (amountInserted > this.itemInventory[item].price) {
            let change = amountInserted - this.itemInventory[item].price;
            return change;
        } else {
            let xtAmountNeeded = this.itemInventory[item].price - amountInserted;
            console.log(xtAmountNeeded);
            throw new Error('The amount that was inserted is insufficient, please add more' + xtAmountNeeded)
        }


    }




}





module.exports = vendingMachine;
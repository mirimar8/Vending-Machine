class vendingMachine {
    constructor(inventory) {
        this.inventory = inventory;
    }

    dispenseItem(item) {
        let name = this.inventory.itemInventory[item].name;
        let currentAmount = this.inventory.itemInventory[item].currentNumber;

        if (!name) {
            throw new Error('this selection is not valid.');
        } else if (currentAmount > 0) {
            return name;
        } else {
            throw new Error('The item selected is out of stock.');
        }
    };

    refillInventory(item) {
        let currentAmount = this.inventory.itemInventory[item].currentNumber;
        let maxAmount = this.inventory.itemInventory[item].maxNumber;

        if (currentAmount === 0) {
            let refillStock = maxAmount - currentAmount;
            return refillStock;
        } else if (currentAmount === maxAmount) {
            throw new Error('The item is already fully stocked.');
        }
    }

    resupplyChange(coinType) {
        let currentAmount = this.inventory.coinInventory[coinType].currentNumber;
        let maxAmount = this.inventory.coinInventory[coinType].maxNumber;
        let coin = this.inventory.coinInventory[coinType];

        if (!coin) {
            throw new Error('This coin is invalid, please insert a nickel, a dime, a quarter, a loonie or a toonie');
        } else if (currentAmount < 0.1 * maxAmount) {
            let resupplyAmount = maxAmount - currentAmount
            return resupplyAmount;
        }
    }

    purchaseItem(item, amountInserted) {
        let price = this.inventory.itemInventory[item].price;
        let name = this.inventory.itemInventory[item].name;

        if (amountInserted === price) {
            return name;
        } else if (amountInserted > price) {
            let change = amountInserted - price;
            return change;
        } else {
            let xtAmountNeeded = price - amountInserted;
            throw new Error(`The amount that was inserted is insufficient, please add more ${xtAmountNeeded}`)
        }
    }
}

module.exports = vendingMachine;
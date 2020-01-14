// const vendingMachine = require('/lib/vending-machine.js')
// const inventoryData = new vendingMachine(itemInventory, coinInventory);

const itemInventory = {
    chips: {
        name: 'Chips',
        price: 1.5,
        currentNumber: 7,
        maxNumber: 10
    },
    doritos: {
        name: 'Doritos',
        price: 1.35,
        currentNumber: 10,
        maxNumber: 10
    },
    bubbleGum: {
        name: 'Bubble Gum',
        price: 0.5,
        currentNumber: 0,
        maxNumber: 30
    },
    mars: {
        name: 'Mars',
        price: 1,
        currentNumber: 10,
        maxNumber: 15
    }
}

const coinInventory = {
    nickel: {
        value: 0.05,
        currentNumber: 90,
        maxNumber: 100
    },
    dime: {
        value: 0.10,
        currentNumber: 80,
        maxNumber: 100
    },
    quarter: {
        value: 0.25,
        currentNumber: 55,
        maxNumber: 50
    },
    Loonie: {
        value: 1,
        currentNumber: 30,
        maxNumber: 30
    },
    toonie: {
        value: 2,
        currentNumber: 17,
        maxNumber: 20
    },
}

module.exports = itemInventory, coinInventory;
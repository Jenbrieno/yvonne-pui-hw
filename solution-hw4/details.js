
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

console.log(rollType);

const headerElement = document.querySelector('.page-title');
headerElement.innerText = rollType + ' Cinnamon Roll'

// Update the image
const rollImage = document.querySelector('.image-detail');
rollImage.src = "../solution-hw4/assets/" + rolls[rollType]['imageFile'];
console.log(rollImage.src);

const cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;  
    }
}

const glazing = document.querySelector('#glazing-options').innerText;
const size = document.querySelector('#pack-size').value;

const rollInfo = new Roll(
    rollType,
    glazing,
    size,
    rolls[rollType]['basePrice'],
);

cart.push(rollInfo);

function addToCart() {
    console.log(cart);
    console.log(document.querySelector('#glazing-options').value);
    console.log(document.querySelector('#pack-size').value);
}

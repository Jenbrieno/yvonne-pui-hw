// Updates page title on product detail page 
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

const headerElement = document.querySelector('.page-title');
headerElement.innerText = rollType + ' Cinnamon Roll'

// Updates the image on product detail page 
const rollImage = document.querySelector('.image-detail');
rollImage.src = "../solution-hw6/assets/" + rolls[rollType]['imageFile'];

// Creates an empty cart array for later updates
let cart = [];

let cartData = localStorage.getItem('storedRolls');
if (cartData != null) {
    cart = Array.from(JSON.parse(cartData));
    console.log(cart);  
}
 
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice, rollImage) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;  
        this.image = rollImage;
    }
}

// Gets selected options and update the cart array with Roll information
function addToCart() {
    const glazingSelected = document.getElementById("glazing-options");
    const glazingText = glazingSelected.options[glazingSelected.selectedIndex].text;
    const sizeSelected = document.getElementById("pack-size");
    const sizeText = sizeSelected.options[sizeSelected.selectedIndex].text;
    const rollImage = document.querySelector('.image-detail');
    rollImage.src = "../solution-hw5/assets/" + rolls[rollType]['imageFile'];
    const rollImageURL = rollImage.src;

    const rollInfo = new Roll(
        rollType,
        glazingText,
        sizeText,
        rolls[rollType]['basePrice'],
        rollImageURL,
    );
    
    cart.push(rollInfo);
    saveToLocalStorage();
    console.log(cart);
}

// Saves the selected items as a string of text
function saveToLocalStorage() {
    const rollArrayString = JSON.stringify(cart);
    localStorage.setItem('storedRolls',rollArrayString);
    console.log(localStorage.getItem('storedRolls'));
}
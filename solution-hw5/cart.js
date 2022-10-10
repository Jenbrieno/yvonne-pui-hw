
// Creates a list of glazing options and the 
// corresponding price adaption
const glazings = [
    {
      glazing: 'Original',
      adaption: 0,
    },
    {
      glazing: 'Sugar Milk',
      adaption: 0,
    },
    {
      glazing: 'Vanilla Milk',
      adaption: 0.5,
    },
    {
      glazing: 'Double Chocolate',
      adaption: 1.5,
    },
];

// Creates a list of pack-size options and the 
// corresponding price adaption
const size = [
  {
    size: 1,
    adaption: 1,
  },
  {
    size: 3,
    adaption: 3,
  },
  {
    size: 6,
    adaption: 5,
  },
  {
    size: 12,
    adaption: 10,
  }
];

// Constructs Roll class. Each Roll object contains information for 
// a single roll
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice, totalPrice) {
    this.type = rollType;
    this.glazing =  rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
    this.totalPrice = totalPrice;

    this.element = null;
  }
}

// Create an empty Set to store information for rolls added.
const rollSet = new Set();
  
function addNewRoll(rollType, rollGlazing, packSize) {

  // Obtains the baseprice, galzing, and pack price adaption for the rolls 
  const basePrice = rolls[rollType].basePrice;

  const glazingOption = glazings.find(g => g.glazing === rollGlazing);
  const glazingPrice = glazingOption.adaption;

  const sizeOption = size.find(p => p.size == packSize);
  const sizePrice = sizeOption.adaption;

  // Calculates the total price for each item in the cart 
  const totalPrice = (glazingPrice + basePrice)*sizePrice;

  // Creates a new roll object
  const roll = new Roll(rollType, rollGlazing, packSize, basePrice, totalPrice);  

  // Adds the roll object to roll set to store all rolls information
  rollSet.add(roll);
  return roll; 
}


function createElement(roll) {
  // Makes a clone of the the roll template
  const template = document.querySelector('#rolls-template');
  const clone = template.content.cloneNode(true);

  // Connects the clone to roll.element
  roll.element = clone.querySelector('.cart-item');

  // Deletes the roll item when the 'delete' button is clicked
  const btnDelete = roll.element.querySelector('.remove');
  btnDelete.addEventListener('click', () => {
    deleteRolls(roll);
    calculateTotal(roll);
  });

  const rollListElement = document.querySelector('#roll-list');
  rollListElement.append(roll.element);
  
  updateElement(roll);
  calculateTotal(roll);
}

function updateElement(roll) {
  // Gets all HTML elements that will displaty the roll information in cart
  const rollImageElement = roll.element.querySelector('.image');
  const rollTitleElement = roll.element.querySelector('.roll-name');
  const rollsGlazingElement = roll.element.querySelector('.glazing-options');
  const rollSizeELement = roll.element.querySelector('.pack-size');
  const rollPriceElement = roll.element.querySelector('.total');

  // Copies the roll contents to the corresponding HTML elements
  rollImageElement.src = '../solution-hw5/assets/' + rolls[roll['type']]['imageFile'];
  rollTitleElement.innerText = roll.type + ' Cinnamon Roll';
  rollsGlazingElement.innerText = 'Glazing: ' + roll.glazing;
  rollSizeELement.innerText = 'Pack Size: ' + roll.size;
  rollPriceElement.innerText = '$' + roll.totalPrice.toFixed(2);
}

// Removes the roll item 
function deleteRolls(roll) {
  roll.element.remove();
  rollSet.delete(roll);
}

function calculateTotal(roll){
  let totalPrice = 0;
  for (const roll of rollSet) {
    totalPrice = totalPrice + roll.totalPrice;
  }
  const rollTotalElement = document.querySelector('.cart-total') 
  rollTotalElement.innerText = '$' + totalPrice.toFixed(2);
}

const rollOne = addNewRoll(
  'Original',
  'Sugar Milk',
  '1'
)

const rollTwo = addNewRoll(
  'Walnut',
  'Vanilla Milk',
  '12',
)

const rollThree = addNewRoll(
  'Raisin',
  'Sugar Milk',
  '3',
)

const rollFour = addNewRoll(
  'Apple',
  'Original',
  '3',
)

for (const roll of rollSet) {
  console.log(roll);
  createElement(roll);
}
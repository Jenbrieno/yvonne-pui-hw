
// store the list of glazings to create the 'glazing' dropdown 
const glazings = [
  {
    glazing: 'Keep Original',
    adaptation: 0,
  },
  {
    glazing: 'Sugar Milk',
    adaptation: 0,
  },
  {
    glazing: 'Vanilla Milk',
    adaptation: 0.5,
  },
  {
    glazing: 'Double Chocolate',
    adaptation: 1.5,
  },
];

// store the list of packsize to create the 'pack size' dropdown 
const packSize = [
  {
    size: 1,
    adaptation: 1,
  },
  {
    size: 3,
    adaptation: 3,
  },
  {
    size: 6,
    adaptation: 5,
  },
  {
    size: 12,
    adaptation: 10,
  }
];

// retrieve information from the glazing list to 
// set value and text display for the dropdown menu 
let selectGlazing = document.getElementById ("glazing-options")
for (let i = 0; i< glazings.length; i++ ) {
  let opt = document.createElement('option');
  opt.value = glazings[i]['adaptation'];
  opt.innerText = glazings[i]['glazing'];
  console.log(opt);
  selectGlazing.appendChild(opt);
}

// retrieve information from the packsize list to 
// set value and text display for the dropdown menu 
let selectPack = document.getElementById ("pack-size")
for (let i = 0; i< packSize.length; i++ ) {
  let opt = document.createElement('option');
  opt.value = packSize[i]['adaptation'];
  opt.innerText = packSize[i]['size'];
  console.log(opt);
  selectPack.appendChild(opt);
}

// set the base price of the item as $2.49
const basePrice = 2.49;

// change price with selected glazing options
function glazingChange(element) {
  // get value of selected glazing option
  const priceChange = parseFloat(element.value);

  // calculate the updated price and round it to the nearest hundredth 
  let packPrice = parseFloat(document.getElementById('pack-size').value);
  const updatePrice = (basePrice + priceChange) * packPrice;
  document.getElementById("total-detail").textContent = '$' + Math.round(100*updatePrice)/100;
}

// change price with selected pack size
function packChange(element) {
  // get value of selected pack size
  const priceChange = parseFloat(element.value);

  // calculate the updated price and round it to the nearest hundredth 
  let glazingPrice = parseFloat(document.getElementById('glazing-options').value);
  const updatePrice = (basePrice + glazingPrice) * priceChange;
  document.getElementById("total-detail").textContent = '$' + Math.round(100*updatePrice)/100;
}


// function addToCart() {
//   const glazingSelected = document.getElementById("glazing-options");
//   const glazingText = glazingSelected.options[glazingSelected.selectedIndex].text;
//   const sizeSelected = document.getElementById("pack-size");
//   const sizeText = sizeSelected.options[sizeSelected.selectedIndex].text;

//   console.log(glazingText);
//   console.log(sizeText);
// }

function glazingText() {
  const glazingSelected = document.getElementById("glazing-options");
  const glazingText = glazingSelected.options[glazingSelected.selectedIndex].text;
  return glazingText;
}

function sizeText() {
  const sizeSelected = document.getElementById("pack-size");
  const sizeText = sizeSelected.options[sizeSelected.selectedIndex].text;

  return sizeText;
}




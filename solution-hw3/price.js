
let bun = [
  {
    glazing: 'Keep Original',
    price: 2.49,
  },
  {
    glazing: 'Sugar Milk',
    price: 2.49,
  },
  {
    glazing: 'Vanilla Milk',
    price: 2.99,
  },
  {
    glazing: 'Double Chocolate',
    price: 3.99,
  },
];

function displayOptions(){
  let bunGlazing = document.querySelector('#glazing-options');
  let bunPackSize = document.querySelector('#pack-size');

  bunGlazing.innerText = bun.glazing;
  bunPackSize.innerText = bun.size;
}

function glazingChange(element) {
  // get value of selected glazing option
  const priceChange = element.value;

// add your code to do update the price ...
  console.log('Total: ' + priceChange);
}


// Sets the number of shots to 0
let countShots = 0;


function increaseShots() {
  // Increaments the numebr of shots by 1 and sets the maximum number of
  // shots to 3 according to all recipes
  if (countShots < 3) {
  countShots+=1;
  document.getElementById("numberShots").innerHTML = countShots;
  }
  };


function decreaseShots() {
  // Reduces the numebr of shots by 1 and sets the minimum number of
  // shots to 0 
  if (countShots > 0) {
    countShots -= 1;
    document.getElementById("numberShots").innerHTML = countShots;
  } else {
    countShots = 0;
    document.getElementById("numberShots").innerHTML = countShots;
  }
 };

// Shows the shots being added to the cup with a little bouncing effect
function addShots(){
  anime({
      targets: '.cup-content',
      height: {
        value: '+=400',
        duration: 500,
        easing: 'easeInOutQuad',
      },
       translateY: [-250, 250], 
       direction: 'alternate',
       loop: false,
  });
}

// Removes the shots being added to the cup 
function removeShots(){
   anime({
       targets: '.cup-content',
       height: {
         value: '0',
         duration: 500,
         easing: 'easeInOutQuad',
       },
        direction: 'alternate',
        loop: false,
   });
 }

// Sets the amount of water to 0
let countWater = 0;

function increaseWater () {
  // Increaments the amount of water by 6oz and sets the maximum 
  // amount of water to 12oz according to all recipes
  if (countMilk == 0 && countWater <12){
    countWater += 6;
    document.getElementById("numberWater").innerHTML = countWater;
  } else {
    countWater += 0;
  }
 };

function decreaseWater() {
  // Reduces the amount of water by 6oz and sets the minimum 
  // amount of water to 0oz
  if (countWater > 0) {
    countWater -= 6;
    document.getElementById("numberWater").innerHTML = countWater;
  } else {
    countWater = 0;
    document.getElementById("numberWater").innerHTML = countWater;
  }
};

// Shows the water being added to the cup with a little bouncing effect
function addWater(){
  if (countMilk == 0) {
  anime({
  targets: '.cup-content-2',
  height: {
    value: '+=400',
    duration: 500,
    easing: 'easeInOutQuad',
  },
  translateY: [0, 100], 
  direction: 'alternate',
  loop: false,
  })
  }
}

// Removes the water being added to the cup 
function removeWater(){
  anime({
  targets: '.cup-content-2',
  height: {
    value: '0',
    duration: 500,
    easing: 'easeInOutQuad',
  },
  direction: 'alternate',
  loop: false,
  })
}

// Sets the amount of milk to 0
let countMilk= 0;

function increaseMilk() {
  // Increaments the amount of milk by 6oz and sets the maximum 
  // amount of milk to 12oz according to all recipes
  if (countWater == 0 && countMilk<12){
    countMilk+= 6;
    document.getElementById("numberMilk").innerHTML = countMilk;
  } else{
    countMilk= 0;
  }
};

function decreaseMilk() {
  // Reduces the amount of milk by 6oz and sets the minimum 
  // amount of milk to 0oz
  if (countMilk> 0) {
    countMilk-= 6;
    document.getElementById("numberMilk").innerHTML = countMilk;
  } else {
    countMilk = 0;
    document.getElementById("numberMilk").innerHTML = countMilk;
  }
};

// Shows the milk being added to the cup with a little bouncing effect
function addMilk(){
if (countWater == 0) {
  anime({
      targets: '.cup-content-3',
      height: {
        value: '+=400',
        duration: 500,
        easing: 'easeInOutQuad',
      },
      translateY: [0, 20], 
      direction: 'alternate',
      loop: false,
  });
}
}

// Removes the milk being added to the cup 
function removeMilk(){
  anime({
      targets: '.cup-content-3',
      height: {
        value: '0',
        duration: 500,
        easing: 'easeInOutQuad',
      },
        direction: 'alternate',
        loop: false,
  });
}

// Sets the number of milk foam and mocha sauce to 0
let foam = 0; 
let sauce = 0;

// Shows the milk foam being added to the cup with a little bouncing effect
function addFoam(){
    anime({
        targets: '.cup-content-4',
        height: {
          value: '+=100',
          duration: 500,
          easing: 'easeInOutQuad',
        },
        translateY: [-50, 0], 
        direction: 'alternate',
        loop: false,
    });
    return foam =1;
  }

// Shows the mocha sauce being added to the cup with a little bouncing effect
function addSauce(){
  anime({
      targets: '.cup-content-5',
      height: {
        value: '+=400',
        duration: 500,
        easing: 'easeInOutQuad',
      },
      translateY: [-250, 350], 
      direction: 'alternate',
      loop: false,
  });
  return sauce = 1;
}

let menu = document.getElementsByClassName("individual-coffee-item");
let i;
// Displays recipe panel accordingly when users click on the drinks
for (i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function() {
    let selected = this.nextElementSibling;
    if (selected.style.display === "block") {
      selected.style.display = "none";
    } else {
      selected.style.display = "block";
    }
  });
}


function popUp(){
  // Tells users which drinks they recreated based on the ingredients input 
  if (countShots == 3 && countWater == 12 && foam == 0 && sauce == 0){
    let message = document.getElementById('popup-message')
    message.innerHTML = 'Well done! You just made an Americano :)';
    let popup = document.getElementById('popup-background');
    popup.style.display = 'block';
  } else if (countShots == 2 && countMilk == 12 && foam == 1 && sauce == 0) {
    let message = document.getElementById('popup-message')
    message.innerHTML = 'Well done! You just made a Latte :)';
    let popup = document.getElementById('popup-background');
    popup.style.display = 'block';
  } else if (countShots == 3 && countMilk == 12 && foam == 0 && sauce == 0) {
    let message = document.getElementById('popup-message')
    message.innerHTML = 'Well done! You just made a Flat White :)';
    let popup = document.getElementById('popup-background');
    popup.style.display = 'block';
  } else if (countShots == 2 && countMilk == 12 && foam == 1 && sauce == 1){
    let message = document.getElementById('popup-message')
    message.innerHTML = 'Well done! You just made a Mocha :)';
    let popup = document.getElementById('popup-background');
    popup.style.display = 'block';
  }else {
    let message = document.getElementById('popup-message')
    message.innerHTML = 'Hmmm seems like things are not adding up, try again!';
    let popup = document.getElementById('popup-background');
    popup.style.display = 'block';
  }
}

function restart() {
  // Reloads the website 
  window.location.reload();
}


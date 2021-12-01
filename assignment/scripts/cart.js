console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Function which adds items to basket
function addItem(item, array) {
  if (isFull(array) === true) {
    return false;
  } else {
  basket.push(item);
  return true;
  }
}

//Function which lists out items in basket
function listItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Item ${i+1} is: ${array[i]}`);
  }
}

//Function which clears out contents of basket
function empty(array) {
  while (array.length != 0) {
    array.shift();
  }
}

//Function which checks if cart is full or not
function isFull(cart) {
  if (cart.length < MAX_ITEMS) {
    return false;
  } else {
    return true;
  }
}

const MAX_ITEMS = 5;
let basket = [];

//Testing addItem and isFull functions
console.log("Basket is:", basket);
console.log("Adding peaches to basket (should say true):", addItem('peaches', basket));
console.log("Basket is now:", basket);
console.log("Adding bread to basket (should say true):", addItem('bread', basket));
console.log("Basket is now:", basket);
console.log("Adding eggs to basket (should say true):", addItem('eggs', basket));
console.log("Basket is now:", basket);
console.log("Adding bananas to basket (should say true):", addItem('bananas', basket));
console.log("Basket is now:", basket);
console.log("Adding grapes to basket (should say true):", addItem('grapes', basket));
console.log("Basket is now:", basket);
console.log("Adding carrots to basket (should say false; no more room in basket):", addItem('carrots', basket));
console.log("Basket is still:", basket);

//Testing listItems function
listItems(basket);

//Testing empty function
console.log("Basket is:", basket);
empty(basket);
console.log("Basket is now:", basket);

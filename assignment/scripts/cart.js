console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Function which adds items to basket
function addItem(item) {
  basket.push(item);
  return true;
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

let basket = [];

//Testing addItem function
console.log("Basket is:", basket);
console.log("Adding peaches to basket (should say true):", addItem('peaches'));
console.log("Basket is now:", basket);
console.log("Adding bread to basket (should say true):", addItem('bread'));
console.log("Basket is now:", basket);
console.log("Adding eggs to basket (should say true):", addItem('eggs'));
console.log("Basket is now:", basket);

//Testing listItems function
listItems(basket);

//Testing empty function
console.log("Basket is:", basket);
empty(basket);
console.log("Basket is now:", basket);

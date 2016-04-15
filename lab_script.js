function sum(number1,number2){
  var sum = number1 + number2;
  var returnProb1 = document.getElementById('problem1ID');
  returnProb1.textContent = '\"The sum of ' + number1 + ' and ' + number2 + ' is ' + sum + '.\"';
  return sum;
}
//We have the same variable names for our document.getElementById
function multiply(number1,number2){
  var product = number1 * number2;
  returnProb2 = document.getElementById('problem2ID');
  returnProb2.textContent = '\"The product of ' + number1 + ' and ' + number2 + ' is ' + product + '.\"';
  return product;
}
//great variable names. Cleary explains what goes into each function(different numbers)
function sumAndMultiply(number1,number2,number3){
  var totalSum = sum(sum(number1,number2), number3);
  var totalProduct = multiply(multiply(number1,number2), number3);
  var returnProb2a = document.getElementById('problem3IDa');
  returnProb2a.textContent = '\"' + number1 + ' and ' + number2 + ' and ' + number3 + ' sum to ' + totalSum + '.\"';
  var returnProb2b = document.getElementById('problem3IDb');
  returnProb2b.textContent = '\"The numbers ' + number1 + ' and ' + number2 + ' and ' + number3 + ' have a product of ' + totalProduct + '.\"';
  return [totalSum,totalProduct];
}
//smart use of space with your array since we arent using it anywhere else for number 3!

function sumArray(array){
  var totalSum = 0;
  for( var i = 0; i < array.length; i++)
  {
    totalSum += array[i];
  }

  var returnProblem4 = document.getElementById('problem4ID');
  returnProblem4.textContent = '\"' + array + ' was passed in as an array of numbers, and ' + totalSum + ' is their sum.\"';
  console.table(array);
}

function multiplyArray(array){
  var totalProduct = 1;
  for(var i = 0; i < array.length; i++)
  {
    totalProduct *= array[i];
  }

  var returnProblem5 = document.getElementById('problem5ID');
  returnProblem5.textContent = '\"The numbers ' + array + ' have a product of ' + totalProduct + '.\"';
  console.table(array);
}
//we have very very similar code throughout! Which I am assuming means we are on the right track!!(Hopefully!)

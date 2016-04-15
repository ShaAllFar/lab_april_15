function sum(number1,number2){
  var sum = number1 + number2;
  //console.log('\"The sum of ' + number1 + ' and ' + number2 + ' is ' + sum + '.\"');
  return sum;
}

function multiply(number1,number2){
  var product = number1 * number2;
  //console.log('\"The product of ' + number1 + ' and ' + number2 + ' is ' + product + '.\"');
  return product;
}

function sumAndMultiply(number1,number2,number3){
  var totalSum = sum(sum(number1,number2), number3);
  var totalProduct = multiply(multiply(number1,number2), number3);
  console.log('\"' + number1 + ' and ' + number2 + ' and ' + number3 + ' sum to ' + totalSum + '.\"');
  console.log('\"The numbers ' + number1 + ' and ' + number2 + ' and ' + number3 + ' have a product of ' + totalProduct + '.\"');
  return [totalSum,totalProduct];
}

function sumArray(array){
  var totalSum = 0;
  for( var i = 0; i < array.length; i++)
  {
    totalSum += array[i];
  }
    //"2,3,4 was passed in as an array of numbers, and 9 is their sum."
  console.table(array);
  console.log('\"' + array + ' was passed in as an array of numbers, and ' + totalSum + ' is their sum.\"');
}

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
  var totalSum = sum(number1,number2) + number3;
  var totalProduct = multiply(number1,number2) * number3;
  console.log('\"' + number1 + ' and ' + number2 + ' and ' + number3 + ' sum to ' + totalSum + '.\"');
  console.log('\"The numbers ' + number1 + ' and ' + number2 + ' and ' + number3 + ' have a product of ' + totalProduct + '.\"');
  return [totalSum,totalProduct];
}

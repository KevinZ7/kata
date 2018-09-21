var camelCase = function(input) {
  var inputArray = input.split(' ');
  var output;

  // if(inputArray.length = 1){
  //   output = inputArray[0];
  //   return output;
  // }
  // else{
    output = inputArray[0];
    for(var i = 1; i < inputArray.length; i++){
      output += inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1);
    }
  // }

  return output;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

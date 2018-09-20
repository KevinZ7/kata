var repeatNumbers = function(data) {
  var output;

  for(var i = 0; i < data.length; i++){

    if(i > 0){
      output += ', ';
    }

    for(var j = 0; j < data[i][1]; j++){
      var stringConv = data[i][0].toString();
      if(i == 0 && j == 0){
        output = stringConv;
        j++;
      }
      else{
        output += stringConv;
      }
    }
  }

  return output;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// function testDataLength(data2) {
//   return data2.length;
// }

// console.log(testDataLength([[1, 10]]));
// console.log(testDataLength([[1, 2], [2, 3]]));
// console.log(testDataLength([[10, 4], [34, 6], [92, 2]]));
// // var output;
// // output += 'c';

// // console.log(output);

// function testDataValue2(data3) {
//   for(var k = 0; k < data3.length; k++){
//     console.log(data3[k][0]);
//     console.log(data3[k][1]);
//   }
// }
// testDataValue2([[1, 10]]);
// testDataValue2([[1, 2], [2, 3]]);
// testDataValue2([[10, 4], [34, 6], [92, 2]]);

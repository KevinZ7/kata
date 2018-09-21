var calculateChange = function(total, cash) {
  var billsArray = [2000,1000,500,200,100,25,10,5,1];
  var counter = [0,0,0,0,0,0,0,0,0];
  var change = cash - total;
  var billsNameArray = ['TwentyDollars', 'TenDollars', 'FiveDollars', 'TwoDollars', 'OneDollar'
  , 'Quarter', 'Dime', 'Nickel', 'Penny'];
  var object = {};

  for(var i = 0; i < billsArray.length; i++){
    if(change >= billsArray[i]){
      while(change>= billsArray[i]){
        change -= billsArray[i];
        counter[i]++;
      }
    }
  }

  for(var j = 0; j < counter.length; j++){
    if(counter[j] > 0){
      object[billsNameArray[j]] = counter[j];
    }
  }

  return object;

}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));



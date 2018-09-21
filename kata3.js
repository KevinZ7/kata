var talkingCalendar = function(date) {
  var array = [];
  var arrayInt = [];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days =
  ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th'
  , '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '5th'
  , '26th', '27th', '28th', '29th', '30th', '31th'];
  array = date.split('/');

  for(var j = 0; j < array.length; j++){
    arrayInt[j] = parseInt(array[j], 10);

  }

  var returnValue;

  for(var i = 1; i <= months.length; i++){
    if(arrayInt[1] == i){
      returnValue = months[i - 1] + ' ';
    }
  }

  for(var k = 1; k <= days.length; k++){
    if(arrayInt[2] == k){
      returnValue += days[k - 1] + ', ';
    }
  }

  returnValue += arrayInt[0];

  return returnValue;

}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

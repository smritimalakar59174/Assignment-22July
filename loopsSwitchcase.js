'use strict';
  //While loop//
  let i = 1, n = 5;
       // while loop from i = 1 to 5
while (i <= n) {
    console.log('this is while loop ' +i);
    i++;
}
//do-while loop//
let j = 1, p = 5;
  // do...while loop from 1 to 5
do {
    console.log('This is do-while loop '+j);
    j++;
} while(j <= p);
//For loop//
let k=0;
for(k=0;k<=5;k++){
    console.log('this is for loop '+k);
}

//switchCase//
var day = 2;
var dayName;
switch (day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
            dayName = 'Friday';
            break;
     case 7:
         dayName = 'Saturday';
         break;   
          default:
            dayName = 'Invalid day';
    }
    console.log(dayName);


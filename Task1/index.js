//use require to use lodash
const lod = require('lodash');
const numbers = [6, 2, 3, 5, 4, 1];

//filtering numbers
const evenNumbers = lod.filter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

//sorting numbers
const sortedNums = lod.sortBy(numbers);
console.log(sortedNums);

//finding maximum
const maxi = lod.max(numbers);
console.log(maxi);

//using chunk
const doublearr = lod.chunk(numbers, 2);
console.log(doublearr);

//using debounce 
function printyes()
{
    console.log("yes");
}

const debounceFun = lod.debounce(printyes,5);
debounceFun();
debounceFun();
debounceFun();
debounceFun();


//#3
let emptyArray = [];

//#4
let hobbies = ['coding' ,'guitar' ,'gaming', 'football', 'sports', 'cooking'];

//#5
let numbers = [3, 4, 16, 7, 2];

//#6
console.log(numbers[1]);

//#7
//let hobLen = hobbies.length
console.log(hobbies[hobbies.length -1]);

//#8
hobbies.push('horse riding');

//#9
console.log(hobbies[hobbies.length - 1]);

//#10
console.log(hobbies.length);

//#11
hobbies.splice(hobbies.length - 2, hobbies.length);

//#12
console.log(hobbies.length);

//#13
//hobbiesNewLine = hobbies.join('/n')
console.log(hobbies);

//#14
hobbies.splice(0, hobbies.length);
console.log(hobbies);
const scanf = require('scanf');
 
console.log('Pleas input the number max');
var number = scanf('%d');

let sum=0;
for(let i=0; i<number+1; i++){
	sum += i;
}

console.log(`The sum from 1 to ${number} is equal to ${sum}`); 

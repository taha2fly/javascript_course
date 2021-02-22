const scanf = require("scanf");

var tab = [];

console.log("Veuillez entrer votre premier nombre");
let number1 = scanf("%d");
tab.push(number1);

console.log("Veuillez entrer votre deuxième nombre");
let number2 = scanf("%d");
tab.push(number2);

console.log("Veuillez entrer votre troisieme nombre");
let number3 = scanf("%d");
tab.push(number3);

console.log("Veuillez entrer votre quatrieme nombre");
let number4 = scanf("%d");
tab.push(number4);

console.log("Veuillez entrer votre cinquieme nombre");
let number5 = scanf("%d");
tab.push(number5);

let index_max = 0;
let moyenne = tab[0]/tab.length;

for(let i=1; i<tab.length; i++){
	if(tab[i] > tab[index_max]){
		index_max = i;
	}

	moyenne += tab[i]/tab.length;
}

console.log(`Le plus grand nombre entré est à l'indice : ${index_max}`);


console.log(`La moyenne des nombres entrés est de ${moyenne}`);

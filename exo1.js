const scanf = require("scanf");

let var1 = " Hello World !";
console.log(var1);

console.log('Pleas input the first word');
let chaine1 = scanf("%s");
console.log(chaine1.length);


console.log('Pleas input the second word');
let chaine2 = scanf("%s");
console.log(chaine2.length);

if (chaine1.length > chaine2.length){
	console.log("Le premier mot entré est plus long que le second");
}
else if (chaine1.length == chaine2.length){
	console.log("Les deux mots entrés sont de même longueur");
}
else{
	console.log("Le premier mot entré est plus court que le second");
}


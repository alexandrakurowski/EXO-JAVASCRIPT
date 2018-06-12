console.log ('hello')
/*EX1
var mois= ["janvier", "Février", "Mars", "Avril", "Mai", "juin", "Juillet", "Aout", "Septembre", "octobre", "Novembre", "Décembre"];
 mois[7]="Août", 
 
alert (mois);

/*EX2

alert (mois[2]);
/*EX3

alert(mois[5]); 
/*EX4
alert(mois[10]);
/*EX5
 mois[7]="Août", 
alert(mois[7]);
*/
/*EX7A11*/
var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
alert (array);
array.push('Courgette');/*rajoute*/
alert (array);
array[4].push('Citron');
alert (array);
array.splice(1, 1);
alert (array);
array.splice(2, 0, 'poire');/*https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice*/
alert (array);

var fin = "C'est la fin !!!!!"
alert (fin)
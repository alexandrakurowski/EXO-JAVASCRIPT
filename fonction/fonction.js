console.log ('hello')
/*function myfirstfonction (){
	return true
}
alert (myfirstfonction())*/

/*var result = funk1 ();

function funk1 (a, b){
	var ab = 2+5; 
	return ab; 
}
alert (result); 

var nb = "nom"
var za = 32
var ins = funk2 ()
function funk2 (){
	var add = nb + za
	return add; 
}
alert (funk2());

var nb1 = prompt("saisir nombre 1");
var nb2 = prompt("saisir nombre 2");
function funk3()
{
	if (nb1 > nb2){
		alert("nombre 1 supérieur au nombre 2"); 
	}
	else if (nb1 < nb2){
		alert("nombre 1 inférieur à nombre 2"); 
	}
	else {
		alert ("nombre 1 est égal nombre2");
	}
}
 funk3();*/ 
/*EXO6*/
var nom = prompt ("quel est ton Nom");
var prenom = prompt ("quel est ton prenom");
var age = prompt ("quel est ton age");
function funk4(){
	var funk4 = "Bonjour " + prenom + nom + "tu as " + age + "ans";
return funk4; 
}
alert (funk4()); 
/*EXO7*/
var genre = prompt ("êtes vous un homme ou une femme ? " ); 
var gen1 = "homme"; 
var gen2 = "femme"; 
var fin = "C'est la fin !!!!!"
function funk5(){

	if ( age >= 18 && genre == gen1 ){
		alert ("vous etes un homme majeur");
	}
	else if ( age <= 18 && genre == gen1 ){
	alert ("vous êtes un homme mineur");
    }
    else if ( age >= 18 && genre == gen2){
    	alert ("vous êtes une femme majeure");
    }
else if( age <= 18 && genre == gen2 ){
	alert ("vous êtes une femme mineure");
	}
	else {alert ("Quitter");
	}
}
funk5(); 
alert(fin);







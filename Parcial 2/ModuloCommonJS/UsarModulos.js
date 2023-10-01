let areas = require("./modulos.js");
let cowsay = require("cowsay");
let cadena = require("./modulos.js");







let b=cadena.juntarString("hola","mundo");
let c=cadena.juntarString(1,2);
let a=areas.areaCuadrado(4);
let d=areas.Resta(3,2);
let e=areas.Multiplicacion(3,2);



console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));






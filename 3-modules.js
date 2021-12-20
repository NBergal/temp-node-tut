//Kazdy soubor je ve vychozim nastaveni modul
//moduly jsou zapouzdreny kod
const names = require("./4-names.js");
const sayHi = require("./5-utils.js");
const data = require("./6-alternative-flavor");
require('./7-mind-grenade');

setInterval(() => {
    console.log(data.singlePerson.name);
    sayHi(names.sargay);
    sayHi(names.nike);
    sayHi('Nikita');
}, 1000)
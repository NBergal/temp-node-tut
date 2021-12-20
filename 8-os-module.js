const os = require('os');

// informace o aktualnim uzivatli
const user = os.userInfo();
console.log(user);

//metoda vraci provozuschopnosti systemu v sekundach
console.log(`The System Uptime is ${os.uptime()} secs`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS);
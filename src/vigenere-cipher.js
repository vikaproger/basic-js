const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
constructor(type = true) {
  this.type = type? true: false;
}
  
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();

    message = message.toUpperCase();
    key = key.toUpperCase();
    var res = '';

    for (var i = 0, j = 0; i < message.length; i++) {
      if (!/[A-Z]/.test(message[i])) res +=`${message[i]}`;
      else {
        res += String.fromCharCode(((message[i].charCodeAt() + key[j].charCodeAt()) % 26) + 65);
        j = (j + 1) % key.length;
      }
    }
    return this.type? res: res.split("").reverse().join("");
  } 

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();

    message = message.toUpperCase();
    key = key.toUpperCase();

    var res = '';

    for (var i = 0, j = 0; i < message.length; i++) {
      if (!/[A-Z]/.test(message[i])) res +=`${message[i]}`;
      else {
        res += String.fromCharCode(((message[i].charCodeAt() + 26 - key[j].charCodeAt()) % 26) + 65);
        j = (j + 1) % key.length;
      }
    }
    return this.type? res: res.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;

class VigenereCipheringMachine {
  constructor(direct = true){
    this.direct = direct;
    this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  }

    encrypt(string, key) {
      return this.cryptographer('encrypt', string, key);
    }
        
    decrypt(string, key) {
      return this.cryptographer('decrypt', string, key);
    } 

    cryptographer(type, string, key) {
      if (!string || !key) throw Error();
      let normalKey = this.correctKeyLength(string, key);
      let newStr = [];
      for (let i = 0, j = 0; i < string.length; i++) {
        if (string[i].match(/[A-Za-z]/) != null) {
          let stringLetter = string[i].toUpperCase();
          let keyLetter = normalKey[j].toUpperCase()
          let index = (type == 'decrypt') ? this.abc.indexOf(stringLetter) - this.abc.indexOf(keyLetter) : this.abc.indexOf(stringLetter) + this.abc.indexOf(keyLetter);
          if (index < 0) index = 26 - Math.abs(index);  
          newStr.push(this.abc[index % 26]);
          j++;
        } else {
          newStr.push(string[i]);
        }       
      }
      return (this.direct) ? newStr.join(''): newStr.reverse().join('');
  }

    correctKeyLength(string, key) {
      let strLength = string.replace(/[^A-Za-z]/g, '').length
      if (key.length > strLength) {
        key = key.slice(0, strLength);
      } else if (key.length < strLength) {
        while  (key.length < strLength) {
          key += key.slice(0, strLength - key.length)
        }
      }
      return key;
    }
}





module.exports = VigenereCipheringMachine;
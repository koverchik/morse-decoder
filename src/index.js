const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let decodedPhrase = [];
for (var i = 0; i < expr.length; i = i+10) {
  let string = expr.slice(i, i+10);
  let returnOneSimbol = createSimbol(string);
  decodedPhrase.push(returnOneSimbol);
}

  function createSimbol(partString) {
    let arraySimbol = [];
    if(partString == "**********"){
      return [" "];
    }else{
      for (let i = 0; i < partString.length; i = i+2) {
        if(partString.slice(i, i+2) == 10){
          arraySimbol.push(".");
        }
        if(partString.slice(i, i+2) == 11){
          arraySimbol.push("-");
        }
      }
    }

    return MORSE_TABLE[arraySimbol.join('')];

  }
  return decodedPhrase.join('');
}

module.exports = {
    decode
}

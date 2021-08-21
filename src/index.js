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
    // write your solution here
    const morseBinarArray = expr.split('').join('');
    let res='';
    if (expr.length % 10 !== 0) {
        return false;
    }
    for (let i = 0; i < morseBinarArray.length; i=i+10) {
        let morseSubstring = morseBinarArray.substring(i, i+10);
        let morseChar = morseSubstring.replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, '');
        if (morseChar in MORSE_TABLE){
            res += (MORSE_TABLE[morseChar])
        }
        if (morseChar=='**********'){
            res+=' '
        }
    }
    return res;
}
module.exports = {
    decode
}
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
    let arrayOfLetters = [];
    let encodedWord = [];
    let result = '';


    for (let i = 0; i < expr.length; i += 10  ){
        let tenLetExpr = expr.substr( i , 10);
        arrayOfLetters.push(tenLetExpr);
    }

    for ( let i = 0; i < arrayOfLetters.length; i++ ){
        let word = '';
        if ( arrayOfLetters[i] == '**********' ){
            encodedWord.push(' ');
        }
        for ( let k = 0; k < 10 ; k += 2 ) {
            let temp2 = arrayOfLetters[i].substring(k, k+2);
            if ( temp2 == '10' ){
                word += '.';
            }
            if ( temp2 == '11' ){
                word += '-';
            }
        }
        if(word in MORSE_TABLE){
            encodedWord.push(MORSE_TABLE[word]);
        }
    }
    result = encodedWord.join('');
    return result;
}

module.exports = {
    decode
}
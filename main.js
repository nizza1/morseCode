
// Hier hats nur als keys und values funktioniert 

let morseAlphabet = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",

  };

const morseOutput = document.getElementById('morseOutput');

function convertToMorseCode() {

    let toMatchInPut = document.getElementById('inputUser').value.toUpperCase();

    let output = '';
    for (let i = 0; i < toMatchInPut.length; i++) {
        let letter = toMatchInPut.charAt(i);

        //hier vergleicht man jeder einzelne Zeichen
        if(morseAlphabet[letter]){
            output += morseAlphabet[letter] + "  "; 
        } else {
            output += "  ";
        }
    }
    console.log(output);
    morseOutput.innerHTML = output;
}

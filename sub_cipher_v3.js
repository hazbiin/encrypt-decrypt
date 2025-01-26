// let plainAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// let cipherAlphabets = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O","N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];

// let message = "HELLO HOW ARE YOU?";
// let cipherText = "";

// for(let character of message){

//     let charCode = character.charCodeAt(0);
//     if(!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57))){
//         cipherText += character;
//     }

//     for(let i = 0; i < plainAlphabets.length; i++){
//         if(character === plainAlphabets[i]){
//             cipherText += cipherAlphabets[i];
//         }
//     }
// }
// console.log(cipherText);












// making this sub cipher interactive by adding dom manipulation
let plainAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let cipherAlphabets = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O","N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];

const alphabetsContainer = document.querySelector('.alphabets');
const plainAlphabetsContainer = document.getElementById('plain-alphabets');
const cipherAlphabetsContainer = document.getElementById('cipher-alphabets');

for(let i = 0; i < plainAlphabets.length; i++){
    const alphabet = document.createElement('div');
    alphabet.classList.add('alphabet');
    alphabet.innerHTML = plainAlphabets[i];
    plainAlphabetsContainer.appendChild(alphabet);
}
for(let i = 0; i < cipherAlphabets.length; i++){
    const alphabet = document.createElement('div');
    alphabet.classList.add('alphabet');
    alphabet.innerHTML = cipherAlphabets[i];
    cipherAlphabetsContainer.appendChild(alphabet);
}


const plainAlphas = plainAlphabetsContainer.querySelectorAll('.alphabet');
const cipherAlphas = cipherAlphabetsContainer.querySelectorAll('.alphabet');
const encryptBtn = document.getElementById('encrypt-btn');

let activePlainAlphabet = null;
let activeCipherAlphabet = null;

plainAlphas.forEach(plainAlpha => {
    plainAlpha.addEventListener("click", () => {

        console.log(activePlainAlphabet)
    });

    activePlainAlphabet = null;
});



function encrypt(inputMessage){
    for(let character of inputMessage){
        
    }
}

const keyMap = {};
const sampleMap = {
    A : "Y",
    B : "X"
}

encryptBtn.addEventListener("click", () => {
    const inputMessage = document.getElementById('input').value;
    encrypt(inputMessage);
});
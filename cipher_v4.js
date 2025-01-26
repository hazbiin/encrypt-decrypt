const cipherOutput = document.getElementById('cipher-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn  = document.getElementById('decrypt-btn');

let alphabets = 'abcdefghijklmnopqrstuvwxyz';

function encrypt(messageInput, encryptionKey){
    let cipherText = '';
    encryptionKey = parseInt(encryptionKey);

    for(let character of messageInput){

        // handling special character and numbers
        let charCode = character.charCodeAt(0);
        if(!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))){
            cipherText += character;
            continue;
        }

        let isUpperCase = character === character.toUpperCase();
        if(isUpperCase){
            character = character.toLowerCase();
        }

        for(let i = 0; i < alphabets.length; i++){
            if(character === alphabets[i]){
                let currentIndex = i;
                let newIndex = (currentIndex + encryptionKey) % alphabets.length;
                let shiftedChar = alphabets[newIndex];

                cipherText += isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
                break;
            }
        }
    }
    return cipherText;
}


encryptBtn.addEventListener("click", () => {
    const messageInput = document.getElementById('plain-text').value;
    const encryptionKey = parseInt(document.getElementById('encryption-key').value);

    cipherOutput.value = '';
    cipherOutput.value = encrypt(messageInput,encryptionKey);
});
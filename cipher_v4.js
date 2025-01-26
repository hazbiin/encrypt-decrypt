const messageInput = document.getElementById('plain-text').value;
const encryptionKey = parseInt(document.getElementById('encryption-key').value);
const encryptBtn = document.getElementById('encrypt-btn');
const cipherOutput = document.getElementById('cipher-text');
const decryptBtn  = document.getElementById('decrypt-btn');
let alphabets = 'abcdefghijklmnopqrstuvwxyz';
let cipherText = '';

// cipherOutput.value = '';
// cipherOutput.value = encrypt(messageInput,encryptionKey);
function encrypt(messageInput, encryptionKey){

    for(let character of messageInput){

        let charCode = character.charCodeAt(0);
        // special character checking 
        if(!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57))){
            cipherText += character;
        }

        if(!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))){
            cipherText += character;
        }

        
        if(character === character.toUpperCase() && character !== character.toLowerCase()){
            character = character.toLowerCase();


    
            for(let i = 0; i < alphabets.length; i++){
                if(character === alphabets[i]){
                    let currentIndex = i;
                    let newIndex = (currentIndex + encryptionKey) % alphabets.length;
                    cipherText += alphabets[newIndex].toUpperCase();
                }
            }

        }else {
            for(let i = 0; i < alphabets.length; i++){
                if(character === alphabets[i]){
                    let currentIndex = i;
                    let newIndex = (currentIndex + encryptionKey) % alphabets.length;
                    cipherText += alphabets[newIndex];
                }
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
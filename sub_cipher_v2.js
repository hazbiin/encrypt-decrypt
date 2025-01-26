let plainAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let cipherAlphabets = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O","N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];

let message = "HELLO HOW ARE YOU?";
let cipherText = "";

for(let character of message){

    // if(character === ' '){
    //     cipherText += " ";
    // }

    // ------special character checking----
    // if(character === '?'){
    //     cipherText += "?";
    // }
    // if(!(character > 65 && character < 90)){
    //     console.log("here")
    //     cipherText += character;
    // }

    let charCode = character.charCodeAt(0);
    if(!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57))){
        cipherText += character;
    }

    for(let i = 0; i < plainAlphabets.length; i++){
        if(character === plainAlphabets[i]){
            cipherText += cipherAlphabets[i];
        }
    }
}
console.log(cipherText);

// for(let i = 0; i < cipherText.length ; i++){
//     console.log( i, cipherText[i]);
// }
let allAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let message = 'HELLO';
let offset = 3;
let cipherText = "";


for(let i = 0; i < message.length; i++){

    for(let j = 0; j < allAlphabets.length; i = i + offset){
        cipherText += allAlphabets[i];
    }

}

// for(let i = 0; i < allAlphabets.length; i = i + offset){


//     console.log(allAlphabets[i]);
// }
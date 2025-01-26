
let allAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let message = 'HELLO';
let offset = 3;
let cipherText = "";


for( const character of message){

    // if(allAlphabets.includes(character)){
    //     console.log("ture")
    // }

    for(let i = 0; i < allAlphabets.length; i++){
        if(character === allAlphabets[i]){
            cipherText += allAlphabets[i + offset];
        }
    }
}
console.log(cipherText);


// how modulus operator works
// mode by 2 gives 0 reminder for even numbers and 1 reminder for odd numbers 
// when mode by 10--- gives the last digit of the number as the reminder


// number = x
// another number = n
// x % n = reminder of the division of these two number;

// when x % n, the result will be always between 0 and n - 1
// the modulus operator creates a cycle from 0 to n-1 and we need to count from 0 upto our number in that cycle, 
// --core idea -- You simply count through the cycle until you reach the number.
//  the number where the count ends in the cycle is the reminder!
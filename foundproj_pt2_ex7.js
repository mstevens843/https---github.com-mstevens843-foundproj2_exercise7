const friend = "BRUTUS"
const shiftValue = 3; 

// step 1" Reca;; the Latin Alphabet variable from the previous exercise. 
const alphabet = "abcdefghijklmnopqrstuvwxyz";


// Use a loop to iterate through each letter of "BRUTUS". Employ the Caesar Cipher technique to shift each letter by the given value. Store the encrypted name in a variable. 
let encryptedName = ""; 

for (let i = 0; i < friend.length; i++)
{
    const currentLetter = friend[i]
    const currentIndex = alphabet.indexOf(currentletter.toLowerCase());
    const newIndex = (currentIndex + shiftValue) % alphabet.length;
    encryptedName += alphabet[newIndex].toUpperCase();
}


// Q1: What advantage does a loop provide by encrypting each letter? 
// Q1A: A loop allows you to encrypt names automatically without having to change your code up. 


// Q2: Explain the role of % alphabet.length in our loop? How does it aid in the encryption process? 
// Q2A: Alphabet % aids in the encryption process by allowing any values that shift past z to wrap around back to the beginning of the alphabet. 


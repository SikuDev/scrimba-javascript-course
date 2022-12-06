const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


const generateBtn = document.getElementById("generate-btn")
const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")

const numbersCheck = document.getElementById("numbers-chk")
const symbolsCheck = document.getElementById("symbols-chk")

const passwordLengthBox = document.getElementById("password-length")

let selectedCharacters = []

generateBtn.addEventListener("click", generatePasswords)
passwordOne.addEventListener("click", copyToClipboard)
passwordTwo.addEventListener("click", copyToClipboard)

function generatePasswords() {
  let passwordLength = passwordLengthBox.value;

  setCharacters()
  clearPasswords()
  
  for (let i = 0; i < passwordLength; i++) {
    let randomIndexOne = Math.floor(Math.random() * (selectedCharacters.length))
    let randomIndexTwo = Math.floor(Math.random() * (selectedCharacters.length))
    passwordOne.textContent += selectedCharacters[randomIndexOne]
    passwordTwo.textContent += selectedCharacters[randomIndexTwo]
  }

  selectedCharacters = []
}

function setCharacters() {
  if (numbersCheck.checked && symbolsCheck.checked) {
    selectedCharacters = letters.concat(numbers, symbols)
  } else if (numbersCheck.checked) {
    selectedCharacters = letters.concat(numbers)
  } else if (symbolsCheck.checked) {
    selectedCharacters = letters.concat(symbols)
  } else {
    selectedCharacters = letters
  }
}

function clearPasswords() {
  passwordOne.textContent = ""
  passwordTwo.textContent = ""
}

async function copyToClipboard(){
  await navigator.clipboard.writeText(this.textContent);
 };
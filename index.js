const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const lengthSelect = document.getElementById("lengthSelect")
let charactersArray = ""
let charactersArray2 = ""

let passOneEl = document.getElementById("passOne")
let passTwoEl = document.getElementById("passTwo")


for (let i = 1; i < 21; i++) {
const option = document.createElement("option")
option.value = i
option.text = i
lengthSelect.add(option)
}

function generateRandomPassword() {
    charactersArray = ""
    charactersArray2 = ""
    
    for (let i = 0; i < lengthSelect.value; i++){
        const randomIndex = Math.floor( Math.random()*characters.length )
        const randomCharacter = characters[randomIndex]
        charactersArray += randomCharacter
    }

    for (let i = 0; i < lengthSelect.value; i++){
        const randomIndex = Math.floor( Math.random()*characters.length )
        const randomCharacter = characters[randomIndex]
        charactersArray2 += randomCharacter
    }
    passOneEl.value = charactersArray
    passTwoEl.value = charactersArray2

    console.log('charactersArray',charactersArray)
    console.log('charactersArray2',charactersArray2)
}

function copyToClipboard() {
    let copyText = document.getElementById("passOne")
    navigator.clipboard.writeText(passOneEl.value);

}

function copyToClipboard2() {
    let copyText = document.getElementById("passTwo")
    navigator.clipboard.writeText(passTwoEl.value);
}
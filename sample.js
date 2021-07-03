let input = document.getElementById('input')
let info = document.getElementById('info')
let hint = document.getElementById('hint')
let restart = document.getElementById('restart')
let submit = document.getElementById('submit')
let wrap2 = document.getElementById('wrap2')

let guess = Math.floor(Math.random() * 100) + 1;
let guessLimit = 5  
let guessNo = 1

let guessData = []

info.innerHTML = `Guess a number from the range of 1 - 100 <br>
you currently have ${guessNo} out of ${guessLimit} guesses`

// checking conditions regarding inputed number
function checkGuess(){
    if (guessNo <= guessLimit) {
        if (input.value == guess){
            switch (guessNo) {
                case 1:
                    alert('HURRAY!!! you got the right guess at your first trail')
                    break;
                case 2:
                    alert('HURRAY!!! you got the right guess at your second trail')
                    break;
                default:
                    alert('Congrats you\'ve guessed correctly')
                    break;
            }
            hint.innerHTML = `CONGRATS!!! <br>
            ${input.value} is the right guess`
            disabled(true,'grey','block',false)
        }
        else if(input.value > 100 || input.value < 1){
            alert('input a number within the range of 1 - 100')
            input.value = ''
        }
        else if(guessData.includes(input.value)){
            alert(`You've chosen ${input.value} already`)
            input.value = ''
        }
        else if (guessNo == guessLimit) {
            if(input.value != guess){
            hint.innerHTML = `You've lost. <br>
            The correct guess is ${guess}`
            disabled(true,'grey','block',false)
            }
        }
        else{
            guessData.push(input.value)
            hint.innerHTML = `No not ${input.value} <br>
            ${input.value > guess ? hint.innerHTML = `its too high`: 
            hint.innerHTML = `its too low`}`
            guessNo++
            
            input.value = ''
        }
    }
    info.innerHTML = `Guess a number from the range of 1 - 100 <br>
    you currently ${guessNo < guessLimit ? info.innerHTML = `have ${guessNo} out of ${guessLimit} guesses`:
    info.innerHTML = `are on your last guess` }`

}
// checking conditions regarding inputed number

// to reset to the initial state with a new random guess number
restart.onclick = function ref() {
    guessData = []
    guessNo = 1
    guess = Math.floor(Math.random() * 100) + 1;

    hint.innerHTML = ''
    info.innerHTML = `Guess a number from the range of 1 - 100 <br>
    you currently have ${guessNo} out of ${guessLimit} guesses`
    disabled(false,"black","none",true)

}
// to reset to the initial state with a new random guess number

// to disable the input box and submit button
function disabled(disable,color,restartButDisplay,restartButDisable){
    input.value = ''
    input.disabled = disable 
    submit.disabled = disable 
    submit.style.color = color
    wrap2.style.border = `2px dashed ${color}`
    restart.style.display = restartButDisplay 
    restart.disabled = restartButDisable 
}
// to disable the input box and submit button

input.onkeydown = function enter(e) {
    if (e.keyCode == 13) {
        checkGuess()
    }
}
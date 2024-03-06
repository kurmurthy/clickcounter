let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = documnet.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = documnet.getElementById("gameResult");

let successMessage = "Congratulation! you got it Right";
let tryAgainMessage = "Please Try Again!";

function restartGame(){
    let firstRandomNumber = Math.random() * 50;
    let secondRandomNumber = Math.random() * 50;

    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);
    gameResultElement.textContent = "";
    userInputElement.value = "";

restartGame();

function checkResult(){
    let firstRandomInteger = parseInt("firstNumberElement.textContent");
    let secondRandomInteger = parseInt("secondNumberElement.textContent");
    let userEnteredSum = parseInt(userInputElement.value);

    let sumOfTwoRandomIntegers = firstRandomInteger+ secondRandomInteger;

    if (userEnteredSum === sumOfTwoRandomIntegers){
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "green";
    }else{
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.style.backgroundColor = "sykeblue";

    }

    }
}



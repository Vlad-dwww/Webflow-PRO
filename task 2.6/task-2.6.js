const checkIsNumber = function(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

const gameBotFunction = function () {

    function randomGenerate(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let maxAttempts = 3;
    let attempts = maxAttempts;
    let mysteryNumber = randomGenerate(1, 100);
    
    while (attempts > 0) {
        let guess = prompt("Угадайте число от 1 до 100. У вас есть " + attempts + " попытки");

        if (guess === null) {
            alert("Вы завершили игру");
            return;
        }

        while (!checkIsNumber(guess) || guess === "") {
            guess = prompt("Введите корректное число").trim();
            if (guess === null) {
                alert("Вы завершили игру");
                return;
            }
        }
        
        guess = parseInt(guess);
        
        if (guess === mysteryNumber) {
            alert("Поздравляю! Вы угалали число");
        } else if (guess < mysteryNumber) {
            alert("Загаданное число больше. Попробуйте еще");
        } else {
            alert("Загаданное число меньше. Попробуйте еще");
        }
        
        attempts--;
    }
    
    alert(`Вы не угадали. Загаданное число: ${mysteryNumber}`);
    let playAgain = confirm("Хотите сыграть еще раз?");
    if (playAgain) {
        attempts = maxAttempts;
        gameBotFunction();
    } else {
        alert("Вы завершили игру");
        return;
     }
}

gameBotFunction();
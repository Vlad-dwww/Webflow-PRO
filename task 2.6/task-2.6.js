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
            console.log("Вы завершили игру");
            return;
        }

        while (!checkIsNumber(guess) || guess === "") {
            guess = prompt("Введите корректное число").trim();
            if (guess === null) {
                console.log("Вы завершили игру");
                return;
            }
        }
        
        guess = parseInt(guess);
        
        if (guess === mysteryNumber) {
            console.log("Поздравляю! Вы угалали число");
            let playAgain = confirm("Хотите сыграть еще раз?");
            if (playAgain) {
                attempts = maxAttempts;
                mysteryNumber = randomGenerate(1, 100);
            } else {
                console.log("Вы завершили игру");
                return;
            }
        } else if (guess < mysteryNumber) {
            console.log("Загаданное число больше. Попробуйте еще");
        } else {
            console.log("Загаданное число меньше. Попробуйте еще");
        }
        
        attempts--;
    }
    
    console.log("Вы не угадали. Загаданное число:", mysteryNumber);
}

gameBotFunction();
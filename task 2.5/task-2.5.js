let screenPrice;
let percentage = 10;
let service1
let service2 

const checkIsNumber = function(number) {
    return !isNaN(parseFloat(number)) && isFinite(number)
}

const asking = function() {
    titleProject = prompt('Название проекта?')
    screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
    responsive = confirm('Нужен ли респонсивный сайт?')

    screenPrice = prompt('Сколько это будет стоить?', 10000)

    while (!checkIsNumber(screenPrice) || screenPrice === null || screenPrice.trim() === '') {
        screenPrice = prompt('Сколько это будет стоить?', 10000)
    }
    screenPrice = Number(screenPrice)
}

asking();

const getAllServicePrices = function() {
    let sum = 0

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен', 'Услуга 1')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен', 'Услуга 2')
        }

        let textFromPrompt = '';

        while (!checkIsNumber(textFromPrompt) || textFromPrompt === null || textFromPrompt.trim() === '') {
            textFromPrompt = prompt('Сколько это будет стоить?')
        }

        sum = sum + Number(textFromPrompt)
    }

return sum
}
let allServicePrices = getAllServicePrices();

function getTitle(titleProject) {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1);
}

let titleUpperCaseFirst = getTitle(titleProject);
console.log(titleUpperCaseFirst); 

function getFullPrice(allServicePrices, screenPrice) {
    return allServicePrices + screenPrice;
}

let fullPrice = getFullPrice(allServicePrices, screenPrice);
console.log(fullPrice); 

function getServicePercentPrices(fullPrice, percentage) {
    return fullPrice - fullPrice/100*percentage;
} 

let servicePercentPrice = getServicePercentPrices(fullPrice, percentage);
console.log(servicePercentPrice);

function getRollbackMessage(fullPrice) {
    if (fullPrice > 50000) {
        let percentage = 10;
        console.log('Ваша скидка', percentage.toString(), 'процентов');
    } else if (fullPrice > 20000 && fullPrice < 50000) {
        let percentage = 5;
        console.log('Ваша скидка', percentage.toString(), 'процентов');
    } else if (fullPrice < 20000 && fullPrice > 0) {
        console.log('Скидка не предусмотрена');
    } else if (fullPrice < 0) {
        console.log('Что то пошло не так');
    } else if (fullPrice === 0) {
        console.log('Значение стоимости: 0');
    } else if (fullPrice === 20000) {
        console.log('Скидка не применяется к данной сумме');
    } else if (fullPrice === 50000) {
        console.log('Скидка не применяется к данной сумме');
    } else {
        console.log('Что то пошло не так');
    }
}

getRollbackMessage(fullPrice);
const screenPrice = 1000;
let percentage = 10;
let titleProject = prompt('Название проекта?')
let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
let responsive = confirm('Нужен ли респонсивный сайт?')
let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой еще сервис тебе нужен?')
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')

console.log(screensValue);
console.log(responsive); 
console.log(service1);
console.log(service2);

function getTitle(titleProject) {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1);
}

let titleUpperCaseFirst = getTitle(titleProject);
console.log(titleUpperCaseFirst); 

// const getAllServicePrices = function(servicePrice1, servicePrice2) {
//     return servicePrice1 + servicePrice2;
// }

// let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
// console.log(allServicePrices);

// function getFullPrice(allServicePrices, screenPrice) {
//     return allServicePrices + screenPrice;
// }

// let fullPrice = getFullPrice(allServicePrices, screenPrice);
// console.log(fullPrice); 

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

let discountAmount = getRollbackMessage(fullPrice, servicePercentPrice);
console.log(discountAmount);




const checkIsNumber = function(number) {
    return !isNaN(parseFloat(number)) && isFinite(number)
}

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
console.log(getAllServicePrices);
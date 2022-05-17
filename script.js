// Lesson03 Ветвления. 
'use strict';

const title = prompt('Как называется ваш проект?'); 
const screens = prompt('Какие типы экранов нужно разработать?\nПеречислите через запятую');
const screenPrice = +prompt('Сколько будет стоить данная работа?');
const adaptive = confirm('Нужен ли адаптив?');
let service1 = prompt('Какой дополнительный тип услуги №1 нужен?');
let servicePrice1 = +prompt(`Сколько будет стоить ${service1}?`);
let service2 = prompt('Какой дополнительный тип услуги №2 нужен?');
let servicePrice2 = +prompt(`Сколько будет стоить ${service2}?`);
const fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
const rollback = 10;  // % отката посреднику
let servicePercentPrice = Math.ceil( fullPrice - (fullPrice * (rollback / 100)));

if ( fullPrice >= 30000 ) { 
  console.log('Даем скидку в 10%'); 
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log('Даем скидку в 5%');
} else if (fullPrice > 0 && fullPrice < 15000 ) {
  console.log('Скидка не предусмотрена');
} else {
  console.log('Что то пошло не так...'); 
}

console.log(`Название проекта [${title}]`); 
console.log(`Необходимо разработать типы экранов: [${screens}]`); 
console.log(`Работа будет стоить [${screenPrice} рублей]`);
console.log(`Адаптив: [${adaptive ? 'нужен' : 'не нужен'}]`);
console.log(`${service1} - ${servicePrice1} рублей`);
console.log(`${service2} - ${servicePrice2} рублей`);
console.log(`Итоговая стоимость работы - [${fullPrice}]`);
console.log(`Доход разработчика - [${servicePercentPrice}] рублей`);
console.log(`Откат посреднику от стоимости заказа - [${rollback}%]`);
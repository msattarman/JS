// Lesson03 Ветвления. 
'use strict';

const title = prompt('Как называется ваш проект?'); 
console.log('Название проекта: [', title,'] '); 

const screens = prompt('Какие типы экранов нужно разработать? \n Перечислите через запятую');
console.log('Необходимо разработать типы экранов: [', screens,']'); 

const screenPrice = prompt('Сколько будет стоить данная работа?');
console.log(`Работа будет стоить [${screenPrice} рублей]`);
 
const adaptive = confirm('Нужен ли адаптив?');
console.log(`Адаптив: [${adaptive ? 'нужен' : 'не нужен'}]`);

let service1 = prompt('Какой дополнительный тип услуги №1 нужен?');

let servicePrice1 = prompt(`Сколько будет стоить ${service1}?`);
console.log(`${service1} - ${servicePrice1} рублей`);

let service2 = prompt('Какой дополнительный тип услуги №2 нужен?');

let servicePrice2 = prompt(`Сколько будет стоить ${service2}?`);
console.log(`${service2} - ${servicePrice2} рублей`);

const fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
console.log(`Итоговая стоимость работы - ${fullPrice}`);

const rollback = 10;  // % отката посреднику
console.log(`Откат посреднику от стоимости заказа - ${rollback}% `);
let servicePercentPrice = Math.ceil( fullPrice * (100-rollback) / 100 );
console.log(`ДОХОД разработчика - ${servicePercentPrice} рублей`);

if ( fullPrice >= 30000 ) { 
  console.log('Даем скидку в 10%'); 
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log('Даем скидку в 5%');
} else if (fullPrice > 0 && fullPrice < 15000 ) {
  console.log('Скидка не предусмотрена');
} else {
  console.log('Что то пошло не так...'); 
}
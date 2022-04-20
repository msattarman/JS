// Lesson02 Типы данных, операторы, методы, свойства. 

const title = 'JS';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 3;
const rollback = 25;
const fullPrice = 1000000;
const adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log("Длина строки screens = " + screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log( screens.toLocaleLowerCase().split(' '));
console.log(`Процент отката посреднику за работу ${rollback}%, ${fullPrice * (rollback/100)}`);
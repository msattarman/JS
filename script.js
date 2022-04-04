// Lesson02 Типы данных, операторы, методы, свойства. 

let title = 'JS';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 3;
let rollback = 25;
let fullPrice = 1000000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log("Длина строки screens = " + screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log( screens.toLocaleLowerCase().split(' '));
console.log(`Процент отката посреднику за работу ${rollback}%, ${fullPrice * (rollback/100)}`);
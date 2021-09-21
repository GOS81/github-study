// Task 2
console.log('My name Alex!');

// Task 3
let myName = 'Alex';
let age = 40;
document.write('My name ' + myName, '. I`m ' + age + '.');
age = myName;
document.write("<br />" + age);

// Task 4 
// Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
const myVar = {
   myString: "Hellow",
   myNumber: 22,
   isItTrue: true,
   mysteryNmbr: undefined,
   myNull: null
};

// Task 5 
// Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.

let isAdult = confirm("Are you 18 years old?");
console.log(isAdult);

// Task 6 
// В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
// 	- ваше ім’я
// 	- ваше прізвище
// 	- навчальна група
// 	- ваш рік народження.
// Присвойте змінним відповідні значення. 
const myFistName = 'Alex';
const myLastName = 'Golubchyk';
const group = 'Lv-636.JS Core';
const myYear = 1981;
// Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
let maritalStatus = true;
// Визначте тип кожної змінної.
// Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
console.log(typeof myYear);
console.log(typeof maritalStatus);
console.log(typeof myFistName);
console.log(typeof myLastName);
console.log(typeof group);
// Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.
let myNewNull = null;
let newNumber;
console.log(typeof myNewNull);
console.log(typeof newNumber);

// Task 7
//  За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.

let login = prompt('Type your login');
let eMail = prompt('Type your e-mail');
let password = prompt('Type your password');
alert('Dear ' + login + ', your email is - ' + eMail + ', your password is - ' + password);

// Task 8 
// Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.

const inMinute = 60;
const inHour = inMinute * 60;
const inDay = inHour * 24;
let days = prompt('How many days in month?', '30');
inMonth = Number(days) * inDay;
document.write('<br />' + inHour + ' seconds in hour');
document.write('<br />' + inDay + ' seconds in day');
document.write('<br />' + inMonth + ' seconds in month with ' + days + 'days');



// Task 1. Є такий код:

// let res1 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // "12"
// console.log(typeof res1); // "string"
let x = 1;
let y = 2;
let res1 = x + '' + y;
console.log(res1);
console.log(typeof res1);

// let res2 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"
let res2 = 'true' + x * y;
console.log(res2);
console.log(typeof res2);

// let res3 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // "boolean"
let res3 = Boolean(x * y);
console.log(res3);
console.log(typeof res3);

// let res4 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // "number"
let res4 = (x + y) * 'str';
console.log(res4);
console.log(typeof res4);


// Task 2. Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
// 	a) парним додатним;
// 	b) кратним числу 7.
// Результат перевірки вивести в консоль.
let nbr = prompt ('Type the number');
rem1 = nbr % 2;
rem2 = nbr % 7;
if (nbr === null) {
   console.log('Please, enter the number')
} else if (nbr >= 0 && rem1 === 0) {
   console.log('Your type paired positive number: ' + nbr);
} else if (rem2 === 0) {
   console.log('Your type number multiple of 7: ' + nbr);
} else console.log('Your type: ' + nbr);


// Task 3. Створіть порожній масив;
const arr = [];
// 1) У перший елемент масиву запишіть будь-яке число;
arr [0] = 5;
// 2) У другий елемент масиву запишіть будь-який рядок;
arr [1] = 'JS';
// 3) У третій елемент масиву запишіть будь-яке логічне значення;
arr [2] = true;
// 4) У четвертий елемент масиву запишіть значення null;
arr [3] = null;
// 5) Виведіть на екран число елементів, яке зберігається в масиві;
alert(arr.length);
// 6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
arr[4] = prompt('Type something');
// 7) Виведіть на екран п'ятий елемент масиву.
alert(arr[4]);
// 8) Видаліть 1-ий елемент масиву і виведіть масив на екран.
arr.shift();
alert(arr);


// Task 4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
// Початковий масив:
// Результуючий масив:
// "Rome*Lviv*Warsaw"
let cities = ["Rome", "Lviv", "Warsaw"]; 
let str = cities.join('*');
alert( str ); 


// Task 5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”, 
let isAdult = prompt('How old are you?');
if (isAdult >= 18) {
   alert('You are an adult!');
} else {
   alert("You're still young!");
}


//  Task 6. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно 
// a) визначити і вивести в консоль площу трикутника 
// b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).  
let a = +prompt('Enter the first side of the triangle');
if (isNaN(a) || a <= 0) {
   alert('Incorrect data');
   throw "stop";
}
let b = +prompt('Enter the second side of the triangle');
if (isNaN(b) || b <= 0) {
   alert('Incorrect data');
   throw "stop";
}
let c = +prompt('Enter the last side of the triangle');
if (isNaN(c) || c <= 0) {
   alert('Incorrect data');
   throw "stop";
}
if ((a+b) < c || (a+c) < b || (b+c) < a) {
   alert('It is impossible to construct a triangle with sides ' + a + ' ' + b + ' ' + c);
   throw "stop";
}
let p = (a + b + c) / 2;
let sqr = (p * (p - a) * (p - b) * (p - c)) ** (1/2);
alert('Area of a triangle - ' + +sqr.toFixed(3) );
if (a == b || a==c || b==c) {
   alert('This is a right triangle!');
}


// Task 7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.
let nowDate = new Date();
let nowTime = nowDate.getHours();
if (nowTime < 5 && nowTime >= 23) {
   alert('Доброї ночі');
} else if (nowTime >= 5 && nowTime < 11) {
   alert('Доброго ранку');
} else if (nowTime >= 11 && nowTime < 17) {
   alert('Доброго дня');
} else {
   alert('Доброго вечора');
}

// Switch 1
let nowDate = new Date();
let nowTime = nowDate.getHours();
switch (nowTime) {
   case 5:
   case 6:
   case 7:
   case 8:
   case 9:
   case 10:
      alert('Доброго ранку');
      break;
   case 11:
   case 12:
   case 13:
   case 14:
   case 15:
   case 16:
      alert('Доброго дня');
      break;
   case 17:
   case 18:
   case 19:
   case 20:
   case 21:
   case 22:
      alert('Доброго вечора');
      break;
   default:
      alert('Доброї ночі');
}

// Switch 2
let nowDate = new Date();
let nowTime = nowDate.getHours();
let morning = [5, 6, 7, 8, 9, 10];
let day = [11, 12, 13, 14, 15, 16];
let evning = [17, 18, 19, 20, 21, 22];
switch (true) {
   case (morning.includes(nowTime)):
      alert('Доброго ранку');
      break;
   case (day.includes(nowTime)):
      alert('Доброго дня');
      break;
   case (evning.includes(nowTime)):
      alert('Доброго вечора');
      break;
   default:
      alert('Доброї ночі');
}

//  Task 1. Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
let width = prompt('Enter width of the rectangle', '');
let height = prompt('Enter height of the rectangle', '');
function calcRectangleArea(width, height) {
   if (isNaN(width) || isNaN(height)) {
      throw new Error('It is not a number');
   }
   let sqr = width * height;
   return sqr;
} 
try {
   let result = calcRectangleArea(width, height);
   console.log(result);
} catch (exception) {
   console.log(exception.name);
   console.log(exception.message);
   console.log(exception.stack);
}


// Task 2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли: 
// 	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
// 	- нечислове значення
// 	- вік юзера менше 14 років. 
// В іншому разі юзер отримує доступ до перегляду фільму.
// В блокові catch передбачити виведення назви і опису помилки.

function checkAge() {
   let age = prompt('Enter your age');
   if (isNaN(age)) {
      throw new TypeError ('Incorrect data entered! Enter your age in numeric value');
   } else if (age < 14 && age > 0 ) {
      throw new RangeError ('You are under 14 years old!');
   } else if (age > 14) {
      alert('You can watch the movie!');
   } else throw new ReferenceError ('The field is empty! Please enter your age');
}
try {
   checkAge();
} catch (err) {
   alert(err.name + ' ' +err.message);
}


// Task 3. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// 	Приклад роботи програми:
// > console.log(showMonthName(5)); 
// May
// > console.log(showMonthName(14)); 
// MonthException Incorrect month number

class MonthException {
   constructor (message) {
      this.name = message;
   }
   showMessage() {
      alert(this.name);
    }
}
let monthYear = {
         1: 'January',
         2: 'February',
         3: 'March',
         4: 'April',
         5: 'May',
         6: 'June',
         7: 'July',
         8: 'August',
         9: 'September',
         10: 'October',
         11: 'November',
         12: 'December'
}
function showMonthName(month) {
   if (month > 0 && month <= 12) {
      return monthYear[month];
   } else throw new Error ('Incorrect month number');
}
try {
   console.log(showMonthName(5));
}
catch (err){
   let monthException = new MonthException(err.message);
   monthException.showMessage();
}


// Task 4. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
function showUser(id) {
   if (id <= 0) {
      throw new Error ('ID mast be > 0!');
   } else {
      let obj = {id};
   return obj; 
   }
}
try {
   showUser(45);
}
catch (err) {
   alert(err.message);
}
// 	Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.
// 	Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]
function showUser(id) {
   if (id <= 0) {
      throw new Error ('ID mast be > 0!');
   } else {
      let obj = {id};
   return obj; 
   }
}
function showUsers (ids) {
   let resultArray = [];
   for (let id of ids) {
      try {
         showUser(id);
      }
      catch (err) {
         alert(err.message);
      }
      finally {
         if (id > 0) resultArray.push({'id':id});
      }
   }
   return resultArray; 
}
console.log(showUsers([7, -12, 44, 22]));

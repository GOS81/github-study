// Task 1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. Також реалізуйте завдання через while.
const arr = [2, 3, 4, 5];
let res = 1;
for (let i in arr) {
   res = res * arr[i];
}
console.log(res);
// while
const arr = [2, 3, 4, 5];
let res = 1;
let i = 0;
while ( i < arr.length) {
   res = res * arr[i];
   i++;
}
console.log(res);


// Task 2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
// Sample Output: 
// "0 is even" 
// "1 is odd" 
// "2 is even"

for (let count = 0; count <= 15; count++) {
   if (count == 0 || count%2 == 0 ) {
      console.log(count + ' is even');
   } else {
      console.log(count + ' is odd');
   }
}


// Task 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
// Sample Output:
// randArray(5);  // 399,310,232,379,40
let arrRandom = [];
let minArr = +prompt('Enter the minimum value of the array', '1');
let maxArr = +prompt('Enter the maximum value of the array', '500');
let k = +prompt('Enter the length of the array', '5');
function myRandom(minArr, maxArr) {
   let rand = Math.floor((Math.random() * (maxArr - minArr + 1)) + minArr);
   return rand;
 } 
for (let i=0; i<k; i++) {
   arrRandom.push(myRandom (minArr, maxArr));
}
alert(arrRandom);

// Function
let minArr = +prompt('Enter the minimum value of the array', '1');
let maxArr = +prompt('Enter the maximum value of the array', '500');
let arrRandom = function randArray(k) {
   for (let i=0; i<k; i++) {
      arrRandom.push(myRandom (minArr, maxArr));
   }
}
function myRandom(minArr, maxArr) {
   let rand = Math.floor((Math.random() * (maxArr - minArr + 1)) + minArr);
   return rand;
 } 
alert(arrRandom(5));


// Task 4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.
// Sample Output:
// raiseToDegree(3, 4);  // 81

let a = prompt('Enter an integer', '');
let b = prompt('Enter the required degree', '');

function raiseToDegree(a, b) {
   let res = parseInt(a) ** parseInt(b);
   return res;
}
alert(raiseToDegree(a, b));


// Task 5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, який має найменше значення. Порада: для розв’язку можете скористатися спеціальним масивом arguments.
// Sample Output:
// findMin(12, 14, 4, -4, 0.2); // => -4

function findMin () {
   let minValue = arguments[0];
   for (let i=1; i<arguments.length; i++) {
      if (minValue > arguments[i]) {
         minValue = arguments[i];
      }
   }
   return minValue
}
console.log(findMin(12, 14, 4, -4, 0.2));



// Task 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// Sample Output:
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

function findUnique(arr) {
   let n = arr.length;
   for (let i=0; i<n-1; i++) {
      for (let k=i+1; k<n; k++) {
         if (arr[i] === arr[k]) return false;
      }
   }
   return true;
}
console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));


// Task 7. Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.
// Sample Output:
// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

function lastElem(arr, n) {
   let last = [];
   for (let i=arr.length-1; n!==0; i--) {
      if (arr[i] !== undefined) {
         last.push(arr[i]);
      }
      n -=1;
   }
   return last;
}
let arr = [3, 4, 10, -5];
console.log(lastElem(arr));
console.log(lastElem([3, 4, 10, -5],2));
console.log(lastElem([3, 4, 10, -5],8));



// Task 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.
// Input string: 'i love java script' 
// Output string: 'I Love Java Script'

function upCase(str) {
   let arrStr = str.split(' ');
   let resultStr = '';
   for (let i=0; i<arrStr.length; i++) {
      let oldValue = arrStr[i][0];
      let newValue = arrStr[i][0].toUpperCase();
      let convItem = arrStr[i].replace(oldValue, newValue);
      resultStr += convItem + ' ';
   }
   return resultStr.trim();
}
console.log(upCase('i love java script'));
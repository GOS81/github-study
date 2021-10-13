//  Task 1. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад для об’єкта
// let mentor = { 
//             course: "JS fundamental", 
//             duration: 3,
//             direction: "web-development" 
//         };
// Результат має бути 3.
// propsCount(mentor);  // 3
function propsCount() {
   let i=0;
   for (let key in mentor) {
      i++;
   }  return i;
}
let mentor = { 
   course: "JS fundamental", 
   duration: 3,
   direction: "web-development",

}
alert(propsCount(mentor));


// Task 2. Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), яка приймає даний об’єкт і виводить список його властивостей записаних в масив. Виведіть також масив значень властивостей об’єкта.
let obj = {
   name: 'Alex',
   surname: 'G',
   age: 40,
   dev: 'JS',
   experience : [1,2,3],
} 
function showProps(obj) {
   let resArr = [];
   let resArrKey = [];
   for (let key in obj) {
      resArr.push(obj[key]);
      resArrKey.push(key);
   }
   console.log(resArrKey);
   return resArr;
   
}
console.log(showProps(obj));


// Task 3. Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить ім’я і прізвище особи. 
// 	Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету).
// 	В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
// 	Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВУЗу year.
// 	Приклад результату:
// const stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 6
class Person {
   constructor (name, surname) {
      this.name = name;
      this.surname = surname;
   }
   showFullName() {
      alert(this.name + ' ' + this.surname);
   }
}
class Student extends Person {
   constructor (name, surname, year) {
      super (name, surname);
      this.year = year;
   }
   showFullName(midleName) {
      alert(this.name + ' ' + this.surname + ' ' + midleName);
   }
   showCourse () {
      let date = new Date();
      return date.getFullYear() - this.year;
   }
}
const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());


// Task 4. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).
// 1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
// 2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
// 3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
// 4) Вивести значення зарплати з новим experience.
// 5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value 

// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584
class Worker {
   #experience = 1.2;
   constructor (fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
   }
      showSalary() {
         console.log(this.fullName + ' selary: ' + this.dayRate * this.workingDays);
      }
      showExp() {
         return this.#experience;
      }
      showSalaryWithExperience() {
         let resultSalary = this.dayRate * this.workingDays * this.#experience
         console.log(this.fullName + ' selary: ' + resultSalary);
         return resultSalary;
      }
      set setExp(value) {
         this.#experience = value;
         this.showExp();
      }
      get setExp() {
         return this.#experience;
      }       
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp());
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp());
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 22, 50);
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.showExp());
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp());
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 16, 35);
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.showExp());
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp());
worker3.showSalaryWithExperience();

let worker4 = new Worker("Cris Clinton", 22, 15);
console.log(worker4.fullName);                 
worker4.showSalary();
console.log("New experience: " + worker4.showExp());
worker4.showSalaryWithExperience();
worker4.setExp = 1.5;
console.log("New experience: " + worker4.showExp());
worker4.showSalaryWithExperience();

let allArrayObj = [worker1, worker2, worker3, worker4];
function toCompare(a, b) {
    let comp = 0;
    if (a.showSalaryWithExperience() > b.showSalaryWithExperience()) {
        comp = 1;
    } else if (a.showSalaryWithExperience() < b.showSalaryWithExperience()) {
        comp = -1;
    }
    return comp;
}
function sortSalary() {
    let sorted = allArrayObj.sort(toCompare());
    for (let i = 0; i < sorted.length; i++) {
        console.log(sorted[i].fullName + " " + sorted[i].showSalaryWithExperience());
    }
}
console.log('Sorted salary: ' + sortSalary());



// Task 5. Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі getArea() та метод toString() для виведення назви класу.
// Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure. Кожен з дочірніх класів має свою реалізацію методу getArea(), для визначення площі фігури. В конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури, наприклад для кола - радіус r.
// Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів figures, перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування, виводитиме назву створеного об’єкту відповідної фігури, розраховану площу фігури та сумарну площу всіх фігур. Для реалізації функції можете використати метод reduce().
class GeometricFigure {
   getArea() {
      return 0;
   }
   toString(){
      return Object.getPrototypeOf(this).constructor.name;
      console.log(this.name);
   }
}
class Triangle extends GeometricFigure {
   constructor(a, b, c) {
      super();
      this.side1 = a;
      this.side2 = b;
      this.side3 = c;
   }
   getArea() {
      let p = (this.side1 + this.side2 + this.side3)/2;
      let sqrTriangle = (p*(p-this.side1)*(p-this.side2)*(p-this.side3))**1/2;
      return sqrTriangle;
   }
}
class Square extends GeometricFigure {
   constructor(l) {
      super();
      this.side = l;
   }
   getArea() {
      let sqrSquare = this.side ** 2;
      return sqrSquare;
   }
}
class Circle extends GeometricFigure {
   constructor(r) {
      super();
      this.radius = r;
   }
   getArea() {
      let sqrCircle = Math.PI*this.radius ** 2;
      return sqrCircle;
   }
}

function handleFigures(figures) {
   let totalArea = 0;
   for (let i = 0; i < figures.length; i++) {
       if (figures[i] instanceof GeometricFigure) {
           console.log("Geometric figure: " + figures[i].toString() + " area - " + figures[i].getArea());
           totalArea = totalArea + figures[i].getArea();
       } else console.log("The object is not an instance of GeometricFigure");
   }
   console.log(totalArea + " total area");
}

const figures = [new Triangle(3, 4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));




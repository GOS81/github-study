//  Task 1. Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
	// Приклад роботи:
   // upperCase('regexp');
   // upperCase('RegExp');
   // String's not starts with uppercase character 
   // String's starts with uppercase character
function upperCase(str) {
   let uc = /^[A-Z]/;
   if (str.match(uc)) console.log("String's starts with uppercase character");
   else console.log("String's not starts with uppercase character");
}


// Task 2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
	// Приклад роботи:
   // checkEmail("Qmail2@gmail.com");
   // true
   function checkEmail(str) {
      let result = /@/.test(str);
      console.log(result);
   }


// Task 3. Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, за якою йде одна чи більше b, за якими одна d. Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.
	// Приклад роботи:   
   // Для стрінги "cdbBdbsbz" результат ["dbBd", "bB", "d"]
let regExp = /db+d/ig;
let str = "cdbBdbsbz";
let result = regExp.exec(str);
console.log(result);


// Task 4. Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
	// Приклад роботи:
   // Вхідний рядок    "Java Script"
   // Вихід    “Script, Java”
   let re = /(\w+)\s(\w+)/
   let str = "Java Script";
   let newStr = str.replace (re, '$2, $1');
   console.log(newStr);


// Task 5 Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
let re = /(\d{4}-){3}\d{4}/;
let bankCard = "9999-9999-9999-9999";
console.log(re);
console.log(re.test(bankCard));


// Task 6. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
	// Вимоги:
   // •  Цифри (0-9).
   // •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
   // •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
   //  •  Символ “-” не може повторюватися.
   
   // checkEmail('my_mail@gmail.com');
   // Email is correct!
   // checkEmail('#my_mail@gmail.com');
   // Email is not correct!
   // checkEmail('my_ma--il@gmail.com');
   // Email is not correct!
function checkEmail (str) {
   if (str.match(/^_|^-|-{2,}/)) {
      console.log('Email is not correct!');
   } else {
      for (let number of str) {
         if (number.match(/\w|-|@|\./)) {
         } else {
            console.log('Email is not correct!');
            return;
         }
      } console.log('Email is correct!');
   }
}
checkEmail('my_mail@gmail.com');


// Task 7. Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та цифри, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
	// Приклад роботи:
   // checkLogin('ee1.1ret3');
   // true 
   // 1.1, 3
   
   // checkLogin('ee1*1ret3');
   // false 
   // 1, 1, 3
function checkLogin (str) {
   try {
      if (str.length>=2 && str.length<=10 && str.match(/^[A-Za-z]/)) {
         for (let smbl of str) {
            if (smbl.match(/[A-Za-z0-9]/)) {
            } else {
               console.log('false');
               return;
            }
         } 
         console.log('true');
      }
      else {
         console.log('Login is not correct!');
      }
   }
   catch (err) {
      console.log('Login is not correct!');
   }
   
   finally {
      console.log(str.match(/\d+\.\d+|\d+/g));
   }
}
checkLogin('ee1*1ret3');
//  Task 1. За допомогою методів об’єкта window створити:
	// 1) нове вікно розміром 300х300 пікселів.
// var newWindow = window.open("https://google.com", "google", "width=300,height=300");
// 2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
// setTimeout(() => newWindow.resizeTo(500, 500), 2000);
// 3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
// setTimeout(() => newWindow.moveTo(200, 200), 2000);
// 4) із затримкою 2 сек закрийте вікно
// setTimeout(() => newWindow.close(), 2000);

   // Task 2. Для заданої HTML-сторінки:
// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20 пс, шрифт сімейства "Comic Sans MS". */
// function changeCSS() {
//    const textP = document.getElementById('text');
//    textP.style.color = 'orange';
//    textP.style.fontSize = '20px';
//    textP.style.fontFamily ='Comic Sans MS';
// }

// Task 3. Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
	// 1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
   // let container = document.getElementById('container');
   // function changeBackgraund() {
   //    container.style.backgroundColor = 'blue';
   // }
	// 2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
   // function changeDobleClick() {
   //    container.style.backgroundColor = 'orange';
   // }
	// 3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
   // function brownColor() {
   //    container.style.backgroundColor = 'brown';
   // }
   // function witeColor() {
   //    container.style.backgroundColor = 'white';
   // }
   // myBtn.addEventListener("mousedown", brownColor);
   // myBtn.addEventListener("mouseup", witeColor);

	// 4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
   // function yellowColor() {
   //    container.style.backgroundColor = 'yellow';
   // }
   // link.addEventListener("mouseover", yellowColor);
   // link.addEventListener("mouseout", witeColor);


   // Task 4. Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.

// function deleteElem() {
//    const elementsList = document.getElementById('list');
//    elementsList.remove(elementsList.selectedIndex);
// }


   // Task 5. Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
// class Action {
//    handleEvent (event) {
//       switch (event.type) {
//          case "click":
//             document.body.insertAdjacentHTML('beforeend', '<p>I was pressed!</p>');
//             break;
//          case "mouseover":
//             document.body.insertAdjacentHTML('beforeend', '<p>Mouse on me!</p>');
//             break;
//          case "mouseout":
//             document.body.insertAdjacentHTML('beforeend', '<p>Mouse is not on me!</p>');
//             break;
//       }
//    }
// }
// let action = new Action();
// btn.addEventListener("click", action);
// btn.addEventListener("mouseover", action);
// btn.addEventListener("mouseout", action)


// Task 6. Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// window.addEventListener(`resize`, event => {
//    document.body.insertAdjacentHTML('beforeend', ' Ширина вікна: ' + window.outerWidth);
//    document.body.insertAdjacentHTML('beforeend', ' Висота вікна: ' + window.outerHeight);
//  });


// Task 7. На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
// function citiesSelect() {
//    let countrysName = document.getElementById('country').value;
//    let cities;
//    if (countrysName === 'ger') {
//        cities = ['Berlin', 'Hamburg', 'Munich', 'Cologne'];
//    } else if (countrysName === 'usa') {
//        cities = ['New York', 'Washington', 'Boston', 'Chicago'];
//    } else if (countrysName === 'ukr') {
//        cities = ['Kyiv', 'Kolomyia', 'Kaniv', 'Kalush'];
//    }
//    let addCities;
//    for (let city of cities) {
//       addCities += "<option>" + city + "</option>"
//    }
//    document.getElementById("cities").innerHTML = addCities;
// }
// function addText() {
//    let selectCountry = document.getElementById('country').selectedOptions[0].text;
//    let selectCity = document.getElementById('cities').selectedOptions[0].text;
//    document.querySelector('body>p').textContent = selectCountry + ", " + selectCity;
//    let p = document.createTextNode(selectCountry + ", " + selectCity)

// }
// document.getElementById('country').addEventListener('click', citiesSelect);
// document.getElementById('cities').addEventListener('click', addText);



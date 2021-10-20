//  Task 1. На HTML-сторінці є елемент div:	
//  Потрібно змінити вміст елемента із First на Last. Доступіться до елемента div хоча б 2 способами.

let id = document.getElementById('test'); 
id.innerHTML = 'Last';                          // 1 спосіб
let tag = document.getElementsByTagName('div'); 
tag[0].innerHTML = 'Last2';   // 2 спосіб
let select = document.querySelector('div#test');
select.innerHTML = 'Last3'; // 3 спосіб


// Task 2. На сторінці є елемент зображення:
// Потрібно змінити зображення dog.jpg на cat.jpg.
// Виведіть в модальному вікні вміст тегу img з новим зображенням.

let img = document.getElementById('image');
img.outerHTML = '<img id="image" src="img/cat.jpg">';
alert(document.getElementById('image').outerHTML);

// Task 3. 
/* На вказаній HTML-сторінці необхідно отримати всі елементи всередині тега div по селектору (використати метод document.querySelectorAll). І вивести їх вміст із вказанням номеру абзацу в такому форматі:
Selector text 0: First paragraph
Selector text 1: Second paragraph
Selector text 2: Third paragraph */

let txt = document.querySelectorAll('div>p');
alert(txt.length);
for (let i=0; i<txt.length; i++) {
   alert('Selector text ' + i + ': ' + txt[i].innerHTML);
}
// Task 4. На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
// 	1) першого елемента списку
// 	2) останнього елемента списку
// 	3) другого елемента списку
// 	4) четвертого елемента списку
// 	5) третього елемента списку
// Зробіть завдання 2 різними способами.	
// Приклад:
// •	1
// •	2
// •	3
// •	4
// •	5
// Результат виводу: 1, 5, 2, 4, 3
let ul = document.getElementById('list').children;
alert(ul[0].innerHTML);
alert(ul[4].innerHTML);
alert(ul[1].innerHTML);
alert(ul[3].innerHTML);
alert(ul[2].innerHTML);
// 2
alert(document.body.firstElementChild.firstElementChild.innerHTML);
alert(document.body.firstElementChild.lastElementChild.innerHTML);
alert(document.body.firstElementChild.firstElementChild.nextElementSibling.innerHTML);
alert(document.body.firstElementChild.lastElementChild.previousElementSibling.innerHTML);
alert(document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML);


// Task 5. Для сторінки... Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано нижче:
document.body.firstElementChild.style.background='green';
document.body.firstElementChild.nextElementSibling.firstElementChild.style.fontWeight='bold';
document.body.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.style.color='red';
document.body.firstElementChild.nextElementSibling.lastElementChild.style.fontStyle='italic';
document.body.firstElementChild.nextElementSibling.lastElementChild.previousElementSibling.style.textDecoration='underline';
document.body.firstElementChild.nextElementSibling.nextElementSibling.style.display='flex';
document.body.firstElementChild.nextElementSibling.nextElementSibling.style.listStyle='none';
document.body.lastElementChild.previousElementSibling.remove();


// Task 6.Задано HTML-сторінку...
//  1)	Користувач почергово вводить 2 повідомлення (використати prompt()). 1-е повідомлення записується в 1-ий <input>, 2-ге – в 2-ий.
//  2)	Поміняти значення 1-го і 2-го інпутів місцями.
let message1 = prompt('Enter the first message', 'message 1');
let message2 = prompt('Enter the second message', 'message 2');
input1.setAttribute('value', message1);
alert(document.body.firstElementChild.outerHTML);
input2.setAttribute('value', message2);
alert(document.body.firstElementChild.nextElementSibling.outerHTML);
// 2
input1.value=message2;
input2.value=message1;


// Task 7. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
/* <body>
   <main class="mainClass check item"> 	
      <div id="myDiv">
         <p>First paragraph</p>           
      </div>
   </main> 
</body> */

let main = document.createElement('main');
main.className = 'mainClass check item';
document.body.insertAdjacentElement("afterbegin", main);
let div = document.createElement('div');
div.id = 'myDiv';
div.innerHTML = '<p>First paragraph</p>';
document.body.firstElementChild.insertAdjacentElement("afterbegin", div);






'use strict';

// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке
// через if
let lang = prompt("Введите выбранный язык", "ru или en");
let weeks = [['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']];

if ( lang === 'ru') {
    console.log(weeks[0]);
}
if (lang === 'en') {
    console.log(weeks[1]);
}

//через switch-case
switch (lang) {
    case 'ru':
        console.log(weeks[0]);
    break;
    case 'en':
        console.log(weeks[1]);
    break;
}
// через многомерный массив без ифов и switch
let week = {
    'ru': weeks[0],
    'en': weeks[1],  
};
console.log(week[lang])

/*
У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, 
если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
*/

let namePerson = prompt("Введите имя");
namePerson === "Артем" ? console.log('Директор') : (namePerson === "Александр") ? console.log('Преподаватель') : console.log('Студент');
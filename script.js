'use strict';

// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке
// через if
let lang = prompt("Введите выбранный язык", "ru или en");
if (lang === 'ru') {
    let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    console.log(week);
} 
if (lang === 'en') {
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(week);
}

//через switch-case
lang = prompt("Введите выбранный язык", "ru или en");
switch (lang) {
    case 'ru':
        let weekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        console.log(weekRu)
    break;
    case 'en':
        let weekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        console.log(weekEn)
    break;
}
// через многомерный массив без ифов и switch
lang = prompt("Введите выбранный язык", "ru или en");
let week = {
    'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],  
};
console.log(week[lang])

/*
У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, 
если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
*/
let namePerson = prompt("Введите имя");
namePerson === "Артем" ? console.log('Директор') : (namePerson === "Александр") ? console.log('Преподаватель') : console.log('Студент');
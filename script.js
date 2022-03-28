'use strict';

let lang = ['ru', 'en'];
const weekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const weekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const week = [weekRu, weekEn]

let langSelekt = prompt("Выбранный язык", "Если русский - ru, если английский - en")
if (langSelekt === 'ru') {
    lang = 'ru';
} else if (langSelekt === 'en') {
    lang = 'en';
} else {
    confirm("Ошибка в вводе данных");
}

// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке

// через if
if (lang === 'ru') {
    console.log(weekRu);
} else if (lang === 'en') {
    console.log(weekEn);
} else {
    console.log("Ошибка в вводе данных");
}

//через switch-case
switch (lang) {
    case 'ru':
        console.log(weekRu);
        break
    case 'en':
        console.log(weekEn);
        break
    default:
        console.log("Ошибка в вводе данных");     
}

// через многомерный массив без ифов и switch
console.log(lang === 'ru' ? week[0] : week[1]); 
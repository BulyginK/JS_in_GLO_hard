// Для выполненения усложненных заданий

const weekArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let today = new Date();
let weekDay = getDay(today);

const week = function() {
    for (let i = 0; i < 7; i++) {
        let div = document.createElement('p');
        if(i < 5) {
            div.innerHTML = `${weekArray[i]}`;
        } else {
            div.innerHTML = `${weekArray[i]}`;
            div.style.fontStyle = 'italic';
        }
        document.body.append(div);
    }
}

week();

console.log(weekDay);
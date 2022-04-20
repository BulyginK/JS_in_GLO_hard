const weekArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let today = new Date();
let weekDay = today.getDay();


const week = function() {
    for (let i = 0; i < 7; i++) {
        let div = document.createElement('p');
        div.innerHTML = `${weekArray[i]}`;
        if (i > 4) {
            div.style.fontStyle = 'italic';
        }
        if (i == weekDay) {
            div.style.fontWeight = 'bold';
        }
        document.body.append(div);
    }
}

week();
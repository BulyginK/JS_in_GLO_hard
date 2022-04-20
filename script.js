const weekArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let today = new Date();
let today_index = (6 + today.getDay()) % 7;


const week = function() {
    console.log(today_index);

    for (let i = 0; i < 7; i++) {
        let div = document.createElement('p');
        div.innerHTML = `${weekArray[i]}`;
        if (i > 4) {
            div.style.fontStyle = 'italic';
        }
        if (i == today_index ) {
            div.style.fontWeight = 'bold';
        }
        document.body.append(div);
    }
}

week();
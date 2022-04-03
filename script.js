// Для выполненения усложненных заданий

let namber;

const isNamber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function numberOutput() {
    do {
        namber = +prompt("Введите число");
    } while (!isNamber(namber));
    return namber;
}

isNamber();
numberOutput();
console.log(namber, typeof namber);
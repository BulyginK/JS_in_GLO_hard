// Для выполненения усложненных заданий

// УСЛОЖНЕННОЕ ЗАДАНИЕ №2 1 задача
const arr = ['199283', '283', '385742', '4762534', '5379', '64253', '4908967457']

const newArr = arr.filter(function(item) {
    return item.charAt(0) == 2 || item.charAt(0) == 4;
})

console.log(newArr);


// УСЛОЖНЕННОЕ ЗАДАНИЕ №2 2 задача

let n = 100;

const sortOut = function() {
    next:
    for (let i = 2; i <= 100; i++) {
        
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                continue next;
            }
        }
        console.log(i + " Делители этого числа: 1 и " + i);
    }
    
}

sortOut();
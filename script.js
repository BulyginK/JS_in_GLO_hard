// Для выполненения усложненных заданий

const arr = ['199283', '283', '385742', '4762534', '5379', '64253', '4908967457']

const newArr = arr.filter(function(item) {
    return item.charAt(0) == 2 || item.charAt(0) == 4;
})

console.log(newArr);
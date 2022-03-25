let num = 266219;
let multiply = 1;

for (let i = 0; i < String(num).split('').length; i++) {
    multiply *= Number(String(num).split('')[i])
}

console.log(multiply);
console.log(String(multiply ** 3).substring(0, 2)); 
let num = 266219;
let arr = String(num).split('')
let multiply = 1;

for (let i = 0; i < arr.length; i++) {
    multiply *= Number(arr[i])
}

console.log(multiply);
console.log(String(multiply ** 3).substring(0, 2)); 
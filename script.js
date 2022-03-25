let num = 266219;
let str = String(num);
let arr = str.split('')
let multiply = 1;
let degree;
let strDegree;

for (let i = 0; i < arr.length; i++) {
    multiply *= Number(arr[i])
}

console.log(multiply);

degree = multiply ** 3
strDegree = String(degree);

console.log(strDegree.substring(0, 2)); 
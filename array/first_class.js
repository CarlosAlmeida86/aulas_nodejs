// 3. Escreva um programa que declare um array com os valores [1, 2, 3, 4, 5] e imprima o elemento na posição 2.
let numbers = [1,2,3,4,5];
console.log(numbers);
console.table(numbers);


// printing array positions.
console.log(numbers[2]);
console.log(numbers.shift()); // 'shift' gets the first index. also remove the first index.
console.table(numbers);


// array size.
console.log(numbers.length);


// random numbers.
console.log(Math.random());


// random number between min and max.
let randomNumber = (Math.random() * (10 - 1 + 1)) + 1;


// round numbers function.
console.log(Math.floor(randomNumber));
console.log(randomNumber);
console.log(Math.ceil(randomNumber));

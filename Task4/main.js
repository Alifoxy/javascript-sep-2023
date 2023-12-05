// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let a = +prompt('enter a');
let b = +prompt('enter b');
console.log(a,b);

function s_req(a, b) {
    return a * b;
}

document.write(s_req(a,b));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let r = +prompt('enter r');
// console.log(r);
//
// function s_cir(r) {
//     let pi = 3.14;
//     return pi * ( r * r );
// }
//
// document.write(s_cir(r));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let h = +prompt('enter h');
// let r = +prompt('enter r');
// console.log(h,r);
//
// function s_cyl(r,h) {
//     let pi = 3.14;
//     let base = pi * ( r * r );
//     let side = 2 * pi * r * h;
//     return side + 2 * base;
// }
//
// document.write(s_cyl(h,r));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let animals = ["goat","fox","wolf","bear","owl","bunny","raven","pig","cat","deer"]
// function arr_print(array) {
//     for (const item of array) {
//         document.write(`<div>${item}</div>`);
//     }
// }
// arr_print(animals)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, explicabo incidunt libero magni reprehenderit suscipit."
// function par_print(text) {
//     document.write( `<p>${text}</p>`)
// }
// par_print(lorem)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let item_text = "Lorem ipsum dolor"
// function list1_printer(item) {
//     document.write( `<ul>`)
//     {
//         for (let i = 0; i < 3; i++) {
//             document.write(`<li>${item}</li>`)
//         }
//     }
//     document.write(`</ul>`)
//
// }
// list1_printer(item_text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let x = +prompt('enter list size');
// let item_text = "Lorem ipsum dolor"
// function list1_printer(item,x) {
//     document.write( `<ul>`)
//     {
//         for (let i = 0; i < x; i++) {
//             document.write(`<li>${item}</li>`)
//         }
//     }
//     document.write(`</ul>`)
//
// }
// list1_printer(item_text,x);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let animals = ["goat","fox","wolf","bear","owl","bunny","raven","pig","cat","deer"]
// function list1_printer(arr) {
//     document.write( `<ul>`)
//     {
//         for (const item of arr) {
//         document.write(`<li>${item}</li>`);
//     }
//     }
//     document.write(`</ul>`)
//
// }
// list1_printer(animals);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// function list1_printer(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             let item = arr[i]
//             document.write(`<div>${i} - ${item.name} - ${item.age}</div>`);
//     }
// }
// list1_printer(users);

// - створити функцію яка повертає найменьше число з масиву

// const numbers = [-3434, 234, 55, 45, -432, 765, 3, 2, 6, 0];
//
// function minOfArr1(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (min > arr[i]) {
//             min = arr[i]
//         }
//     }
//     return min;
// }
//
// console.log(minOfArr1(numbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(arr) {
//     let result = 0;
//     for (const num of arr) {
//         result += num;
//     }
//     return result;
// }
//
// console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, index1, index2) {
//     const num1 = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = num1;
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 0, 2));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     for (const currency of currencyValues) {
//         if (currency.currency === exchangeCurrency) {
//             return sumUAH / currency.value
//         }
//     }
// }
//
// const currencies = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
//
// console.log(exchange(10000, currencies, 'USD'));
// console.log(exchange(10000, currencies, 'EUR'));


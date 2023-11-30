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


// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
//  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('enter time');
console.log(time);

if (time >= 0 && time <= 14) {
    document.write('<h2>this time belongs to the first quarter of an hour</h2>');
} else if (time >= 15 && time <= 29) {
    document.write('<h2>this time belongs to the second quarter of an hour</h2>');
} else if (time >= 30 && time <= 44) {
    document.write('<h2>this time belongs to the third quarter of an hour</h2>');
} else if (time >= 45 && time <= 59) {
    document.write('<h2>this time belongs to the fourth quarter of an hour</h2>');
} else{
    document.write('<h2>wrong time!!! (enter number from 0 to 59)</h2>');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('enter day');
// console.log(day);
//
// if (day >= 1 && day <= 10) {
//     document.write('<h2>this day belongs to the first decade of a month</h2>');
// } else if (day >= 11 && day <= 20) {
//     document.write('<h2>this day belongs to the second decade of a month</h2>');
// } else if (day >= 21 && day <= 31) {
//     document.write('<h2>this day belongs to the third decade of a month</h2>');
// } else{
//     document.write('<h2>wrong day!!! (enter number from 1 to 31)</h2>');
// }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let week = +prompt('enter day number');
// switch (week) {
//     case 1:
//         document.write('<h2>today is Sunday!</h2>');
//         break;
//     case 2:
//         document.write('<h2>today is Monday!</h2>');
//         break;
//     case 3:
//         document.write('<h2>today is Tuesday!</h2>');
//         break;
//     case 4:
//         document.write('<h2>today is Wednesday!</h2>');
//         break;
//     case 5:
//         document.write('<h2>today is Thursday!</h2>');
//         break;
//     case 6:
//         document.write('<h2>today is Friday!</h2>');
//         break;
//     case 7:
//         document.write('<h2>today is Saturday!</h2>');
//         break;
//     default:
//         document.write('<h2>????</h2>');
// }
// - Користувач вводить або має два числа.
//  Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.

// let number1 = +prompt('enter first number');
// let number2 = +prompt('enter second number');
// console.log(number1);
// console.log(number2);
//
// if (number1 > number2) {
//     document.write(`<h2>${number1} is bigger then ${number2}</h2>`);
// } else if (number1 < number2) {
//     document.write(`<h2>${number2} is bigger then ${number1}</h2>`);
// } else{
//     document.write('<h2>numbers are equal</h2>');
// }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//   за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x = prompt('enter x') || 'default';
// document.write(x);



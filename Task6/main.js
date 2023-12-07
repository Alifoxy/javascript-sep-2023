
let str1 = 'hello world'
let str2 = 'lorem ipsum'
let str3 = 'javascript is cool'

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

document.write(`<div>${str1.length}, ${str2.length}, ${str3.length}</div>`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let tUC1 = str1.toUpperCase();
let tUC2 = str2.toUpperCase();
let tUC3 = str3.toUpperCase();
document.write(`<div>${tUC1}, ${tUC2}, ${tUC3}</div>`);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

document.write(`<div>${tUC1.toLowerCase()}, ${tUC2.toLowerCase()}, ${tUC3.toLowerCase()}</div>`);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirty_str = ' dirty string   '
document.write(`<div>|${dirty_str}|</div>`);

let clean_str = dirty_str.trim()
document.write(`<div>|${clean_str}|</div>`);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str4 = 'Ревуть воли як ясла повні';
function stringToArray (str){
    return str.split(' ');
}
console.log(stringToArray(str4));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let nums = [10,8,-7,55,987,-1011,0,1050,0]
let str_arr = nums.map(value => value.toString());
console.log(str_arr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums2 = [11,21,3];
function sortNums (nums_arr, direction){
    if (direction === 'ascending') {
        nums_arr.sort((a,b) => a - b);
    } else if (direction === 'descending') {
        nums_arr.sort((a,b) => b - a);
    }
    return nums_arr;
}
document.write(`<div>${sortNums(nums2,'ascending')}</div>`);
document.write(`<div>${sortNums(nums2,'descending')}</div>`);

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

let descend_sort = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration)
console.log(descend_sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filtered = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filtered);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const card_suits = [
    {suit: 'heart', colour: 'red'},
    {suit: 'diamond', colour: 'red'},
    {suit: 'clubs', colour: 'black'},
    {suit: 'spade', colour: 'black'},
]
const card_names = [6,7,8,9,10,'jack','queen','king','ace'];
const deck = [];

for (const card_suit of card_suits) {
    for (const card_name of card_names) {
        const card = {suit:card_suit.suit,
            name:card_name,
            colour:card_suit.colour
        }
        deck.push(card)
    }
}
console.log(deck);
//
// - знайти піковий туз
let filter_spade_ace = deck.filter(value => value.suit === 'spade' && value.name === 'ace');
console.log(filter_spade_ace);

// - всі шістки
let filter_six = deck.filter(value => value.name === 6);
console.log(filter_six);

// - всі червоні карти
let filter_red = deck.filter(value => value.colour === 'red');
console.log(filter_red);

// - всі буби
let filter_diamond = deck.filter(value => value.suit === 'diamond');
console.log(filter_diamond);

// - всі трефи від 9 та більше
let filter_clubs_nine_plus = deck.filter(value => value.suit === 'clubs' && value.name >= 9 ||
    value.suit === 'clubs' && typeof value.name === "string");
console.log(filter_clubs_nine_plus);



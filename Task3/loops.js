// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let text = "this is text"
for (let i = 0; i < 10; i++) {
    document.write(`<div>${text}</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let animals = [
    {name:"tiger",quantity:2},
    {name:"deer",quantity:5},
    {name:"elephant",quantity:2},
    {name:"red panda",quantity:7},
    {name:"lion",quantity:4},
    {name:"zebra",quantity:4},
    {name:"polar bear",quantity:1},
    {name:"penguin",quantity:6},
    {name:"wolf",quantity:5},
    {name:"giraffe",quantity:2}
]
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i}: ${animal.name} - ${animal.quantity}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// let text2 = "this is bigger text"
// do {
//     document.write(`<h1>${text2}</h1>`);
//     i++
// } while (i < 20)

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let x = 0;
let products_list = [
    {name:"apple",quantity:5},
    {name:"chocolate bar",quantity:3},
    {name:"cake",quantity:1},
    {name:"yogurt",quantity:2},
    {name:"bag of flour",quantity:1},
    {name:"loaf of bread",quantity:2},
    {name:"lemon",quantity:3},
    {name:"cucumber",quantity:3},
    {name:"bottle of juice",quantity:2},
    {name:"tomato",quantity:5},
    {name:"bottle of soy sauce",quantity:1},
    {name:"pack of butter",quantity:2},
    {name:"bottle of milk",quantity:2},
    {name:"carrot",quantity:5},
    {name:"bottle of ketchup",quantity:1},
    {name:"orange",quantity:2},
    {name:"bottle of mustard",quantity:1},
    {name:"pack of waffles",quantity:2},
    {name:"bottle of red wine",quantity:1},
    {name:"melon",quantity:1}
]
// while (x < products_list.length) {
//         let product_item = products_list[x];
//         document.write(`<h1>${x}: ${product_item.name} - ${product_item.quantity}</h1>`);
//         x++;
//     }

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// for (let item of listOfItems) {
//     document.write(`<li>${item}</li>`);
// }
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
// for (let i = 0; i < products.length; i++) {
//     const product_card = products[i];
//     document.write(`<div class="product-card">
//                           <h3>${product_card.title}. Price - ${product_card.price} UAH</h3>
//                           <img src="${product_card.image}" alt="product image" class="product-image">
//                     </div>`);
// }
// --------------------
//є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
// - користувачів зі статусом true

// for (let i = 0; i < users.length; i++) {
//     let user = users[i]
//         if (user.status) {
//             document.write(`<div>status of ${user.name} is true</div>`);
//         }
// }

// - користувачів зі статусом false

// for (user of users) {
//     if (!user.status) {
//         document.write(`<div>status of ${user.name} is false</div>`);
//     }
// }

// - користувачів які старші за 30 років

// for (user of users) {
//     if (user.age > 30) {
//         document.write(`<div> age of user ${user.name} is more than 30</div>`);
//     }
// }
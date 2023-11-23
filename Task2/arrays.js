// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let animals = ["goat","fox","wolf","bear","owl","bunny","raven","pig","cat","deer"]
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);
console.log(animals[4]);
console.log(animals[5]);
console.log(animals[6]);
console.log(animals[7]);
console.log(animals[8]);
console.log(animals[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'The Hound of the Baskervilles' ,
    pageCount: 224,
    genre: 'detective'
}
console.log(book1);

let book2 = {
    title: 'Forgotten Place' ,
    pageCount: 330,
    genre: 'horror'
}
console.log(book2);

let book3 = {
    title: 'To Kill a Mockingbird' ,
    pageCount: 336,
    genre: 'novel'
}
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'It' ,
    pageCount: 1116,
    genre: 'horror',
    authors:[
        {name:'stephen king', age:'75'}
    ]
}
console.log(book4.authors);

let book5 = {
    title: 'The Sign of Four' ,
    pageCount: 129 ,
    genre: 'detective',
    authors:[
        {name:'Arthur Conan Doyle', age:'71'}
    ]
}
console.log(book5.authors);

let book6 = {
    title: 'Gone with the Wind' ,
    pageCount: 1037,
    genre: 'fiction',
    authors:[
        {name:'Margaret Mitchell', age:'49'}
    ]
}
console.log(book6.authors);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
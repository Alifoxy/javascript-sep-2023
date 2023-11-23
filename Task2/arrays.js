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
    title: 'Dark Valley' ,
    pageCount: 466,
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
let user =[
    {name:'Vasyl',username:'vasilisk555',password:345598},
    {name:'Anna',username:'alana369',password:375267},
    {name:'Grigorii',username:'greg16',password:531445},
    {name:'Dmytro',username:'dimix225',password:782565},
    {name:'Sofia',username:'safita1920',password:344565},
    {name:'Mihailo',username:'misha369',password:781363},
    {name:'Victoria',username:'viki675',password:423678},
    {name:'Maria',username:'ria28',password:786243},
    {name:'Oleg',username:'lego98',password:245678},
    {name:'Sergiy',username:'grey067',password:698054},
]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);

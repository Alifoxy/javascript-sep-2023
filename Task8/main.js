
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let user_id = 0
function User(name, surname, email, phone) {
           this.id = user_id++;
           this.name = name;
           this.surname = surname;
           this.email = email;
           this.phone = phone;
       }

let user1 = new User(  'vasyl', 'popov', 'tasda@gmail.com', 380897654);
let user2 = new User(  'fedor', 'ivanov', 'hturgf@gmail.com', 380985465);
let user3 = new User(  'olga', 'fedorova', 'hafuh@gmail.com', 380890765);
let user4 = new User(  'ivan', 'bilobokov', 'tyuri@gmail.com', 380857589);
let user5 = new User(  'natalia', 'lysychevska', 'jkehi@gmail.com', 380859764);
let user6 = new User(  'maria', 'orlovska', 'vgzsas@gmail.com', 380589640);
let user7 = new User(  'taras', 'mamedov', 'jufgu@gmail.com', 380483946);
let user8 = new User(  'sergiy', 'kalyna', 'gikifig@gmail.com', 380968597);
let user9 = new User(  'valentin', 'vysotsky', 'ncbob@gmail.com', 380546545);
let user10 = new User( 'boris', 'malyshko', 'utiry@gmail.com', 380325433);

let users = [];
users.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filtered_users = users.filter((user)=> user.id%2 === 0)
// console.log(filtered_users);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sorted_users_by_id = users.sort((a,b)=> b.id - a.id)
// console.log(sorted_users_by_id);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
let client_id = 0
function Client(name, surname, email, phone, order) {
    this.id = client_id++;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = [];
}
let client1 = new Client(  'vasyl', 'popov', 'tasda@gmail.com', 380897654,['product1','product2','product3']);
let client2 = new Client(  'fedor', 'ivanov', 'hturgf@gmail.com', 380985465,['product1','product2']);
let client3 = new Client(  'olga', 'fedorova', 'hafuh@gmail.com', 380890765,['product1','product2']);
let client4 = new Client(  'ivan', 'bilobokov', 'tyuri@gmail.com', 380857589,['product1','product2','product3','product4']);
let client5 = new Client(  'natalia', 'lysychevska', 'jkehi@gmail.com', 380859764,['product1','product2','product3']);
let client6 = new Client(  'maria', 'orlovska', 'vgzsas@gmail.com', 380589640,['product1','product2','product3','product4','product5']);
let client7 = new Client(  'taras', 'mamedov', 'jufgu@gmail.com', 380483946,['product1','product2']);
let client8 = new Client(  'sergiy', 'kalyna', 'gikifig@gmail.com', 380968597,['product1','product2','product3']);
let client9 = new Client(  'valentin', 'vysotsky', 'ncbob@gmail.com', 380546545,['product1','product2','product3','product4']);
let client10 = new Client( 'boris', 'malyshko', 'utiry@gmail.com', 380325433,['product1','product2']);

let clients = [];
clients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sorted_clients_by_order_count = clients.sort((a,b) => b.order.length - a.order.length)
console.log(sorted_clients_by_order_count);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car( model, producer, year, max_speed, engine_size ) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.engine_size = engine_size;
//
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.max_speed} км на годину`);
//         }
//
//         this.info = function(){
//             for (const car_inf in this) {
//                 if (typeof this[car_inf] !== 'function'){
//                     console.log(`${car_inf} - ${this[car_inf]}`)
//                 }
//             }
//         }
//         this.increase_max_speed = function (new_speed) {
//             this.max_speed += new_speed;
//             console.log(`тепер швидкість ${this.max_speed} км на годину`);
//         }
//
//         this.change_year = function (new_year) {
//             this.year = new_year;
//             console.log(`поточний рік змінено на ${new_year}`);
//         }
//
//         this.add_driver = function (new_driver) {
//             this.driver = new_driver;
//             console.log(`водієм машини є ${new_driver}`);
//         }
// }
// let car = new Car('model', 'producer', 1990, 100,10);
// console.log(car);
// car.info();
// car.drive();
// car.increase_max_speed(30);
// car.change_year(1980);
// car.add_driver('vasyl');
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car {

    constructor(model, producer, year, max_speed, engine_size) {
        this.model = model
        this.producer = producer
        this.year = year
        this.max_speed = max_speed
        this.engine_size = engine_size

        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.max_speed} км на годину`);
        }

        this.info = function () {
            for (const car_inf in this) {
                if (typeof this[car_inf] !== 'function') {
                    console.log(`${car_inf} - ${this[car_inf]}`)
                }
            }
        }

        this.increase_max_speed = function (new_speed) {
            this.max_speed += new_speed;
            console.log(`тепер швидкість ${this.max_speed} км на годину`);
        }

        this.change_year = function (new_year) {
            this.year = new_year;
            console.log(`поточний рік змінено на ${new_year}`);
        }

        this.add_driver = function (new_driver) {
            this.driver = new_driver;
            console.log(`водієм машини є ${new_driver}`);
        }
    }
}
let car = new Car ('model1','some producer',2001, 100, 3.5)
console.log(car);
car.drive();
car.info();
car.increase_max_speed(40);
car.change_year(1985);
car.add_driver('oleg');
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, foot_size) {
        this.name = name
        this.age = age
        this.foot_size = foot_size
    }
}
let cindie1 = new Cinderella('isabella', 22, 33);
let cindie2 = new Cinderella('maria', 25, 34);
let cindie3 = new Cinderella('sofia', 22, 35);
let cindie4 = new Cinderella('annabelle', 28, 35);
let cindie5 = new Cinderella('juliette', 20, 33);
let cindie6 = new Cinderella('sarah', 26, 38);
let cindie7 = new Cinderella('samantha', 30, 36);
let cindie8 = new Cinderella('ella', 25, 30);
let cindie9 = new Cinderella('mirabel', 27, 37);
let cindie10 = new Cinderella('zoe', 23, 32);

let cindies = [];
cindies.push(cindie1, cindie2, cindie3, cindie4, cindie5, cindie6, cindie7, cindie8, cindie9, cindie10)
console.log(cindies);

class Prince {

    constructor(name, age, shoe_size) {
        this.name = name
        this.age = age
        this.shoe_size = shoe_size

    }
}

function true_cindie(girls, the_prince) {
    for (const cindie of girls){
        if (cindie.foot_size === the_prince.shoe_size){
            console.log(`my cinderella is  ${cindie.name}`);
        }
    }
}

let prince = new Prince ('richard','30',30);
true_cindie(cindies, prince)
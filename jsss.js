// создать массив с 20 числами.
// let mass = [];
// for (let i = 0; i < 20; i++) {
//     mass[i] = Math.round(Math.random()*100);
// }
// console.log(mass);
//
// -- при помощи метода sort отсортировать массив.
// let sort = mass.sort();
//
// console.log(sort);
//
// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let downSort = mass.sort((a, b) => b - a);
// console.log(downSort);
//
// // -- при помощи filter получить числа кратные 3
// let filt = mass.filter((number) =>  number % 3 === 0) ;
// console.log(filt);
//
// // -- при помощи filter получить числа кратные 10
// let filt10 = mass.filter((number) => number % 10 === 0);
// console.log(filt10);
// -- перебрать (проитерировать) массив при помощи foreach()
//  mass.forEach((  index, array) =>{
//      console.log(index);
//      console.log(array);
//      console.log('__________');
//
//  });
//
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let newMass = mass.map((value) => value +=3);
// console.log(newMass);



// - создать массив со словами на 15-20 элементов.
// let massStr = ['Car','Abrikos', 'Abrums', 'Atribute', 'Bus', 'Center', 'Bank', 'Best', 'Button', 'Buttom', 'Bulean',  'Analitik',
//      'Disk', 'Zebra','Duck' ];
// -- отсортировать его по алфавиту в восходящем порядке.
// let massStrSort = massStr.sort();
// console.log(massStrSort);
// -- отсортировать его по алфавиту  в нисходящем порядке.
// let  SortRevers = massStr.sort((a, b) => {
//    if (b > a) {
//        return 1
//    }
//    else {
//        return -1
//    }
// });
// console.log(SortRevers);
// -- отфильтровать слова длиной менее 4х символов
// let filt = massStr.filter(filt1 => filt1.length < 4);
// console.log(filt);
//
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let oklick = massStr.map(str => str + ' !');
// console.log(oklick);




// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let us = users.sort((a, b) => {
//     if(a.age > b.age) {
//         return 1
//     }
//     else {
//         return -1
//     }
// } );
//   console.log(us);
//
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let use = users.sort((a, b) => {
//     if (a.name.length > b.name.length) {
//         return 1
//     }
//     else {
//         return -1
//     }
// });
// console.log(use);
//
// let use1 = users.sort((a, b) => {
//     if (a.name.length < b.name.length) {
//         return 1
//     }
//     else {
//         return -1
//     }
// });
// console.log(use1);
//
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let userId = users.map( (user, index) =>  user.id = index+1 );
// console.log(userId);
//
//
// - відсортувати його за індентифікатором
// let us = users.sort((a, b) => {
//     if (a.id < b.id) {
//         return 1
//     }
//     else {
//         return -1
//     }
// });
// console.log(us);




// -- наисать функцию калькулятора с 2мя числами и колбеком ---------
// -- наисать функцию калькулятора с 3мя числами и колбеком ----------




// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
// let cars = [
//     {
//         producer:"subaru",
//         model: "wrx",
//         year: 2010,
//         color:"blue",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
//     ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let a = cars.filter( a => a.volume > 3);
// console.log(a);
//
// - двигун = 2л
// let b = cars.filter(b => b.volume === 2);
// console.log(b);
//
// - виробник мерс
// let c = cars.filter(c => c.producer === 'mercedes');
// console.log(c);
//
// - двигун більше 3х літрів + виробник мерседес
// let d = cars.filter(a=> {
//     if (a.volume > 2 &&  a.producer === 'mercedes') {
//         return a
//     }
// });
// console.log(d);
//
// - двигун більше 3х літрів + виробник субару
// let e = cars.filter(a => {
//    if (a.volume >= 3 && a.producer === 'subaru') {
//        return a
//    }
// });
// console.log(e);
//
// - сили більше ніж 300
// let f = cars.filter(a => a.power > 300);
// console.log(f);
//
// - сили більше ніж 300 + виробник субару
// let g = cars.filter(a => {
//     if (a.power > 300 && a.producer === "subaru") {
//         return a
//     }
// });
// console.log(g);
//
// - мотор серіі ej
// let  h = cars.filter(a => a.engine.startsWith('ej'));
// console.log(h);
//
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let l = cars.filter(a => {
//     if (a.power > 300 && a.producer === 'subaru' && a.engine.startsWith('ej')) {
//         return a
//     }
// });
// console.log(l);
//
// - двигун меньше 3х літрів + виробник мерседес
// let m = cars.filter(a => {
//     if (a.volume < 3 && a.producer === 'mercedes') {
//         return a
//     }
// });
// console.log(m);
//
// - двигун більше 2л + сили більше 250
// let n  = cars.filter(a => {
//     if(a.volume > 2 && a.power > 250) {
//         return a
//     }
// });
// console.log(n);
//
// - сили більше 250  + виробник бмв
// let z = cars.filter(a => {
//     if (a.power > 250 && a.producer === 'bmw') {
//         return a
//     }
// } );
// console.log(z);


// - взять слдующий массив
//let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// let a = usersWithAddress.sort((a, b) => {
//     if (a.id > b.id) {
//         return a
//     }
//     else {
//         return b
//     }
// });
// console.log(a);
//
// -- отсортировать его по id пользователей в обратном опрядке
// let b = usersWithAddress.sort((a, b) => {
//    return b.id - a.id
// });
// console.log(b);
//
// -- отсортировать его по возрасту пользователей
// let c = usersWithAddress.sort((a, b) => {
//     return a.age - b.age
// });
// console.log(c);
//
// -- отсортировать его по возрасту пользователей в обратном порядке
// let d = usersWithAddress.sort((a, b) => {
//     return   b.age - a.age
// });
// console.log(d);
//
// -- отсортировать его по имени пользователей
// let e = usersWithAddress.sort((a, b) => {
//     if (a.name < b.name) {
//         return -1
//     }
//     else {
//         return 1
//     }
// });
// console.log(e);
//
// -- отсортировать его по имени пользователей в обратном порядке
// let f = usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
//         return -1
//     }
//     else {
//         return 1
//     }
// });
// console.log(f);
//
// -- отсортировать его по названию улицы  в алфавитном порядке
// let g = usersWithAddress.sort((a, b) => {
//     if (a.address.street < b.address.street) {
//         return -1
//     }
//     else {
//         return 1
//     }
// });
// console.log(g);
//
// -- отсортировать его по номеру дома по возрастанию
// let h = usersWithAddress.sort((a, b) => {
//     if (a.address.number > b.address.number) {
//         return 1
//     }
//     else {
//         return -1
//     }
// });
// console.log(h);



let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

// -- отфильтровать (оставить) тех кто младше 30
// let  a = usersWithAddress.filter(a => a.age < 30);
// console.log(a);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let b = usersWithAddress.filter(a => a.status === false);
// console.log(b);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let c = usersWithAddress.filter(a=> {
//     if (a.status === false && a.age < 30) {
//         return a
//     }
// });
// console.log(c);

// -- отфильтровать (оставить) тех у кого номер дома четный
// let d = usersWithAddress.filter(a => a.address.number%2 === 0);
// console.log(d);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.



// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
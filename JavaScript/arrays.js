// Создание массива

var dinosaurs = [
    "Тирранозавр",
    "Велоцираптор",
    "Стегозавр",
    "Трицераптос",
    "Брахиозавр",
    "Птеранодон",
    "Апатозавр",
    "Диплодок",
    "Компсогнат"
];

// Доступ к элементу

console.log(dinosaurs[0]);
console.log(dinosaurs[5]);

//Создание и изменение элементов

dinosaurs[0] = "Тирранозавр рекс";
console.log(dinosaurs[0]);

// Добавлять элементы

dinosaurs[33] = "Филосораптор";
dinosaurs[9] = 9;

console.log(dinosaurs);

var dinosaursAndNum = [
    3, 18, "Dinos", 
    ["трицератопс", "стегозавр", 3456.9],
    10, 678, 88
];

console.log(dinosaursAndNum);

// Как добраться до стегозавра?

console.log(dinosaursAndNum[3][1]);

// Как добраться до трицератопса

console.log(dinosaursAndNum[3][0]);

// Узнать длину массива .lenght

console.log(dinosaursAndNum.length);
console.log(dinosaurs.length);

console.log([dinosaursAndNum.length - 1]);
console.log([dinosaurs.length - 1]);

// Добавление элемента в массив .push .unshift

var animals = [];
animals.push("Cat");
animals.push("Dog");
animals.push("Lama");

console.log(animals.length);
console.log(animals);
console.log(animals[0]);

animals.unshift("Monkey");

console.log(animals.length);
console.log(animals);
console.log(animals[0]);

animals.unshift("White Bear");

console.log(animals.length);
console.log(animals);
console.log(animals[0]);

// Удаление элементов массива .pop() .shift()

var lastAnimal = animals.pop();

console.log(lastAnimal);
console.log(animals.length);
console.log(animals);

animals.unshift(lastAnimal);

console.log(animals);

var firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals.length);
console.log(animals);

// Объединить массивы

var furryAnimals = [
    "Альпака", 
    "Кольцехвостый лемур", 
    "Йети"
];
var scalyAnimals = ["Удав", "Годзилла"];

console.log(furryAnimals);
console.log(scalyAnimals);

var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScalyAnimals);

// Объединение нескольких массивов

var furryAnimals = [
    "Альпака", 
    "Кольцехвостый лемур", 
    "Йети"
]; 
var scalyAnimals = ["Удав", "Годзилла"];
var featheredAnimals = ["Ара", "Додо"];

var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);

console.log(furryAnimals);
console.log(scalyAnimals);
console.log(featheredAnimals);
console.log(allAnimals);

// Поиск индекса элемента в массиве

var colors = ["красный", "зеленый", "синий"];
console.log(colors.lastIndexOf("красный"));
console.log(colors.lastIndexOf("зеленый"));
console.log(colors.lastIndexOf("синий"));
console.log(colors.lastIndexOf("фиолетовый")); // вернет -1

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// Превратить массив в строку .join()

var boringAnimals = [
    "Мартышка", 
    "Кот", 
    "Рыба", 
    "Ящерица"
];

console.log(boringAnimals.join());
console.log(boringAnimals.join(", "));

var myNames = [
    "Николас", 
    "Эндрю", 
    "Максвелл", 
    "Морган"
];

console.log(myNames.join(" "));

// Поиск дороги домой

var landmarks = [];

landmarks.push ("Мой дом");
landmarks.push("Дорожка к дому");
landmarks.push("Мигающий фонарь");
landmarks.push("Протекающий гидрант");
landmarks.push("Пожарная станция");
landmarks.push("Приют для кошек");
landmarks.push("Моя бывшая школа");
landmarks.push("Дом подруги");

console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());

console.log(landmarks);

// Случайный выбор Math.random()

console.log(Math.random());

// Округление Math.floor()

console.log(Math.floor(4.1873));

console.log(Math.floor(Math.random() * 4)); // 4 кол-во элементов в массиве

var randomWords = [
    "Взрыв", 
    "Пещера", 
    "Принцесса", 
    "Карандаш"
];

//var randomIndex = Math.floor(Math.random() * 4);
//console.log(randomWords[Math.floor(Math.random() * 4)]);

console.log(randomWords[Math.floor(Math.random() * 4)]);

//Программа случайного выбора вариантов

var phrases = [
    "Звучит не плохо",
    "Да, это определенно надо сделать",
    "Не думаю, что это хорошая идея",
    "Может, не сегодня?",
    "Компьютер говорит нет"
];

// Мне выпить еще молочного коктеля?

console.log(phrases[Math.floor(Math.random() * 5)]);

// Генератор случайных дразнилок

var randomBodyParts = ["глаз", "нос", "череп", "лицо", "лоб"];
var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];

randomWords.push("черепашка");
randomWords.push("ламинария");

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

//console.log("У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + " !!!");

var randomTesult = ["У тебя", randomBodyPart, "словно", randomAdjective, randomWord + " !!!"].join(" ");

console.log(randomTesult);

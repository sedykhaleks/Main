// Создание объектов

var cat = {
    "legs": 3,           // ключ : значение
    "name": "Гармония",
    "color": "Черепаховый"
};

console.log(cat["name"]);
console.log(cat.color); // точечная нотация

// Какие ключи есть у данного объекта

console.log(Object.keys(cat));

var dog = { 
    name: "Оладушек", 
    age: 6, color: "белый", 
    bark: "Гав тяф тяф!" 
};
var catOne = { 
    name: "Гармония", 
    age: 8, 
    color: "черепаховый" 
};


// Object.keys(anyObject) возвращает массив содержащий все ключи обекта anyObject

console.log(Object.keys(dog));
console.log(Object.keys(catOne));

//Добавление элемента

var object = {};

var catMy = {};
catMy["legs"] = 3;
catMy["name"] = "Пушистик";
catMy["color"] = "Белый";
catMy.eyes = "Зеленые";

console.log(catMy);

//Массивы объектов

var dinosaurs = [
{   
    name: "Тираннозавр рекс", 
    period: "Верхнемеловой" 
}, 
{
    name: "Стегозавр", 
    period: "Верхнеюрский" 
},
{ 
    name: "Платеозавр", 
    period: "Триасовый" }
];

console.log(dinosaurs[2]); // получить доступ к объекту
console.log(dinosaurs[2].name);
console.log(dinosaurs[2]["period"]);

var anna = { 
    name: "Анна", 
    age: 11, 
    luckyNumbers: [2, 4, 8, 16] 
}; 

var dave = { 
    name: "Дэйв", 
    age: 5, 
    luckyNumbers: [3, 9, 40] 
};

var kate = { 
    name: "Кейт", 
    age: 9, 
    luckyNumbers: [1, 2, 3] 
};

var friends = [anna, dave, kate];

console.log(friends[1]);
console.log(friends[0].luckyNumbers[3]);

// Учет долгов

var owedMoney = {};
owedMoney["Джимми"] = 5;
owedMoney["Анна"] = 7;
owedMoney["Элис"];
owedMoney["Джимми"] += 3;

console.log(owedMoney);

// Хранение информации о фильмах

var movies = {
    "В поисках Немо": {
        releaseDate: 2003,
        duration: 100,
        actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
        format: "DVD"
    },
    "Звездные войны: Эпизод VI — Возвращение джедая": {
      releaseDate: 1983,
      duration: 134,
      actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
      format: "DVD"
    },
    "Гарри Поттер и Кубок огня": {
        releaseDate: 2005,
        duration: 157,
        actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"], 
        format: "Blu-ray"
    } 
};

console.log(movies["В поисках Немо"].duration);

var findingNemo = movies["В поисках Немо"];

console.log(findingNemo.duration);

var cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
    format: "Blu-ray"
};

movies["Тачки"] = cars; // добавить в объект

console.log(Object.keys(movies));

// Подсчет очков

var scores = {};

scores["Ivan"] = 4;
scores["Anna"] = 3;
scores["Lusy"] = 1;
scores["Iren"] = 0;

console.log(scores);

scores["Anna"] -= 1;
scores["Iren"] += 5;

console.log(scores);

// Как одной строкой извлечь 123 из этого объекта?

var myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
};

console.log(myCrazyObject["some array"][2].number);

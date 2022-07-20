// Draw cats

var drawCats = function(howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
    }
};
drawCats(10);

// Сколько секунд в часе?

var secondsInAMinute = 60;
var minutesInAnHour = 60;
var secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);

var hoursInADay = 24;
var secondsInADay = hoursInADay * secondsInAnHour;
console.log(secondsInADay);

var daysInAYear = 365;
var secondsInAYear = secondsInADay * daysInAYear;
console.log(secondsInAYear);

var age = 34;
console.log(age * secondsInAYear);

// Инкремент +1 и декремент -1

var highFives = 0;
++highFives;
console.log(highFives);

var highFives1 = 0;
highFives1++;
console.log(highFives1);

// Score +=  -=

var x = 10;
x += 5; // x = x + 5; 
console.log(x);

x -= 10; // x = x - 10;
console.log(x);

var balloons = 100;
balloons *= 2;
console.log(balloons);

balloons /= 4;
console.log(balloons);

// Строки

var numberNine = 9;
var stringNine = "9";
console.log(typeof numberNine);
console.log(typeof stringNine);

numberNine + numberNine;
stringNine + stringNine;
console.log(numberNine + numberNine);
console.log(stringNine + stringNine);

var greeting = "Привет, "; 
var myName = "Ник"; 
console.log(greeting + myName);

// Узнать длину строки

var strOne = "Java";
console.log(strOne.length);

var strTwo = "Script";
console.log(strTwo.length);

var OneTwo = strOne + strTwo;
console.log(OneTwo.length);

// Получить отдельный символ строки

var myName = "Alexander";
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);
console.log(myName[3]);

// Тайный шифр

var codeWord1 = "обернись";
var codeWord2 = "неужели";
var codeWord3 = "огурцы";
var codeWord4 = "липкие";
var codeWord5 = "?!";
console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);

// Получить часть строки

var longString = "Эта длинная строка такая длинная";
console.log(longString.slice(4, 18)); // начальная 4 и конечная 18
console.log(longString.slice(4));

// Перевод строки в заглавный или строчный регистр

var longString = "Эй, как дела?";
console.log(longString.toUpperCase());

console.log(longString.toLowerCase());

// Превратить строку "эЙ, кАК деЛа?" в "Эй, как дела?".

var sillyString = "эЙ, кАК деЛа?";
console.log("1 - " + sillyString);
var upperString = sillyString.toUpperCase();
console.log("2 - " + upperString);
var lowerString = upperString.toLowerCase();
var upperString = upperString[0];
console.log("3 - " + lowerString);
var sliceString = lowerString.slice(1);
console.log("4 - " + upperString + sliceString);

// Написать код в одну строчку

console.log(sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase());

// Булевы значения

//  && (и)

var oneThing = true;
var twoThing = false;
console.log(oneThing && twoThing);

// || (или)

var threeThing = true;
var fourThing = false;
console.log(threeThing || fourThing);

// ! (не)

var isWeekend = true;
var needToShowerToday = !isWeekend;
console.log(needToShowerToday);

// Совмещение логических операторов

var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
console.log(shouldGoToSchool);

// Сравнение чисел с помощью булевых значений

var height = 155;
var heightRestriction = 155;
console.log(height >= heightRestriction);

// Строгое сравнение ===

var mySecretNum = 5;
var chico = 3;
console.log(mySecretNum === chico);
var harpo = 7;
console.log(mySecretNum === harpo);
var groucho = 5;
console.log(mySecretNum === groucho);

// Нестрогое сравнение

var stringNumber = "5";
var actualNumber = 5;
console.log(stringNumber === actualNumber);
console.log(stringNumber == actualNumber);

// При применении == JS пытается преобразовать их к одному типу

console.log(0 == false);
console.log(1 == true);
console.log("false" == false);

// Напишите программу чтобы определить пускать ли зрителя на фильм,
// если 12 лет и старше - можно, если меньше 12 то только со взрослым

var age = 11;
var accompanied = true;
console.log(age >= 12 || (age < 12 && accompanied));

// undefined - значение не определено 
// null - пусто (значение отсутствует)

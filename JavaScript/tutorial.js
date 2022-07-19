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

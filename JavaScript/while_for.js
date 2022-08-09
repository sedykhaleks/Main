// цикл while

var sheepCounter = 0;
while (sheepCounter < 10) {
    console.log("Counted sheeps: " + sheepCounter + " !");
    sheepCounter++;
}
console.log("Hrrrrrrr-pssssss");

// цикл for

for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log("Counted sheeps: " + sheepCounted + " !");
}
console.log("Hrrrrrrr-pssssss");

var timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++) {
    console.log("Hello !");
}

// цикл for массивы и строки

// обращение к элементам массива

var animals = ["lion", "flamengo", "white bear", "shark"];
for (var i = 0; i < animals.length; i++) {
    console.log("The zoo has a " + animals[i] + ".");
}

//обращение к отдельным символам строки

var myName = "Aleksandr";
for (var i = 0; i < myName.length; i++) {
  console.log("My name has a letter " + myName[i] + ".");
}

// напечатать все степени 2 не превышающие числа 10000

for (var x = 2; x < 10000; x = x * 2) {
    console.log(x);
}

// написать цикл for который печатает степени тройки на превышающие 10000

for (var x = 3; x < 10000; x = x * 3) {
    console.log(x);
}

// перепишите цикл for используя цикл while

var x = 1;
while (x < 10000) {
    x = x * 3;
    console.log(x);
}

// Напишите цикл for, который изменяет массив животных, делая их прекрасными! 

var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];

for (var i = 0; i < animals.length; i++) {
    console.log(animals[i] + " - прекрасное животное");
}

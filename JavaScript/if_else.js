// Управляющие конструкции

var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;

if (lemonChicken) {
    console.log("Отлично! Я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
    console.log("Заказываю говядину.");
} else if (sweetAndSourPork) {
    console.log("Ладно, закажу свинину.");
} else {
    console.log("Что ж, остается рис с яйцом.");
}

// Напишите программу с переменной name. Если в этой переменной находится ваше имя, напечатайте: «Hi name!» — иначе напечатайте: 
// «Hi, stranger!» Затем дополните программу, чтобы она здоровалась с вашим папой, если в name его имя, и с вашей мамой, 
// если в name ее имя. Если же там что-то иное, по-прежнему печатайте «Привет, незнакомец!».

var name = "Olga";

if (name === "Aleksandr") {
    console.log("Hi, " + name + "!");
} else if (name === "Roman") {
    console.log("Hi, my father " + name + "!");
} else if (name === "Nina") {
    console.log("Hi, my mother " + name + "!");
} else {
    console.log("Hi, stranger!");
}

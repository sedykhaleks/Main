/*1. Скрипт должен на вход принимать строку.
2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
3. Минимум 5 символов в строке
4. Максимум 64 символа в строке
5. В строке должны быть буквы
6. Должна быть хотя бы одна буква в верхнем регистре
7. Должна быть хотя бы одна цифра
8. Должна быть хотя бы одна @
9. Строка не должна быть пустой */

var minSymbols
var maxSymbols 
var letters
var letterUpper
var numerOne
var symbolDog
var notEmpty

function validScript(check) {
    if (typeof check == 'string') {

        if (check.length < 5) {
            console.log("String is less than 5")
        } else {
            minSymbols = true
        } if (check.length > 64) {
            console.log("String is greater than 64")
        } else {
            maxSymbols = true
        } if (check.includes("@")) {
            symbolDog = true
        } else {
            console.log("Enter @")
        } if (/[A-za-zA-Яа-я]/.test(check)) {
            letters = true
        } else {
            console.log("Enter letters")
        } if (/[A-Za-z]/.test(check)) {
            letterUpper = true
        } else {
            console.log("Enter Upper letter")
        } if (/[0-9]/.test(check)) {
            numerOne = true
        } else {
            console.log("Enter number")
        } if (!check) {
            console.log("It's empty")
        } else {
            notEmpty = true
        } if (minSymbols && maxSymbols && letters && letterUpper && numerOne && symbolDog && notEmpty) {
            console.log("This is correct data")
        } 
    } else {
        console.log("This is not correct data")

    }
}
validScript("01FFрппро@")

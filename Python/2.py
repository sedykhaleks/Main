# 1) Создать 2 переменных типа String с разными значениями

var_1 = 'variable_one'
var_2 = 'variable_two'

# 2) Создать 4 переменных типа Integer с разными значениями

var_3 = 3
var_4 = 4
var_5 = 5
var_6 = 6
var_7 = 7

# 3) Создать 3 переменных типа Float с разными значениями

var_8 = 8.15
var_9 = 9.15
var_10 = 10.15

# 4) Реализовать 15 варианта сравнения int переменных с операторами >, <, >=, <=, !=.
# Pезультаты вывести в консоль.

print(var_3 < var_4)
print(var_3 > var_4)
print(var_3 <= var_4)
print(var_3 >= var_4)
print(var_3 != var_4)
print(var_6 < var_5)
print(var_6 > var_5)
print(var_6 <= var_5)
print(var_6 >= var_5)
print(var_6 != var_5)
print(var_7 < var_3)
print(var_7 > var_3)
print(var_7 <= var_3)
print(var_7 >= var_3)
print(var_7 != var_3)



# 5) Реализовать 9 варианта сравнения Float переменных с операторами >, <, >=, <=, !=.
# Pезультаты вывести в консоль.

print(var_8 > var_9)
print(var_8 < var_9)
print(var_8 >= var_9)
print(var_10 >= var_9)
print(var_10 <= var_9)
print(var_10 != var_9)
print(var_8 < var_10)
print(var_8 >= var_10)
print(var_8 != var_10)

# 6) Реализовать 10 вариантов сравнения int переменных с операторами >, <, >=, <=, != и
# условными выражениями (end, or, not). Pезультаты весвести в консоль.

print(var_3 < var_4) and (var_3 > var_4)
print(var_3 <= var_4) or (var_3 >= var_4)
print(var_3 != var_4) and not (var_6 < var_5)
print(var_6 > var_5) and (var_6 <= var_5)
print(var_6 >= var_5) and not (var_6 != var_5)
print(var_7 < var_3) or (var_7 > var_3) and (var_7 <= var_3)
print(var_7 >= var_3) or not (var_7 != var_3)
print(var_6 >= var_5) and not (var_6 != var_5) or (var_3 >= var_4)
print(var_3 <= var_4) or not (var_3 >= var_4)
print(var_3 < var_4) or (var_3 > var_4)

# 7) Сделать скрипт используя функцию input(). 1. Функция должна на вход принимать целое число.
# 2. Выводить должна "Вы вели число = (введённое число) которое (меньше/больше/равно) 30"

num = input('Введите число: ')
num = int(num)
if num < 30:
        print('Вы ввели число = ' + str(num) + ' которое ' + 'меньше 30')
if num == 30:
        print('Вы ввели число = ' + str(num) + ' которое ' + 'равно 30')
if num > 30:
        print('Вы ввели число = ' + str(num) + ' которое ' + 'больше 30')

:wq


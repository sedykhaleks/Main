/* Решение задач по SQL из [](https://sql-ex.ru/) */


/* 1) Найдите номер модели, скорость и размер жесткого диска для всех ПК 
стоимостью менее 500 дол. Вывести: model, speed и hd */

SELECT  model, speed, hd
FROM pc
WHERE price<500.0000;

/* 2) Найдите производителей принтеров. Вывести: Maker */

SELECT DISTINCT Maker
FROM Product
WHERE type = 'Printer';

/* 3) Найдите номер модели, объем памяти и размеры экранов ПК-блокнотов, цена которых превышает 1000 дол. */

SELECT model, ram, screen
FROM Laptop
WHERE price > CAST('1000' AS MONEY);

/* 4) Найдите все записи таблицы Printer для цветных принтеров. */

SELECT *
FROM Printer
WHERE color = 'y';
 
/* 5) Найдите номер модели, скорость и размер жесткого диска ПК, 
имеющих 12x или 24x CD и цену менее 600 дол. */

SELECT model, speed, hd 
FROM PC 
WHERE cd IN ('12x', '24x')
AND price < CAST('600' AS MONEY);

/* 6) Для каждого производителя, выпускающего ПК-блокноты c объёмом 
жесткого диска не менее 10 Гбайт, найти скорости таких ПК-блокнотов. 
Вывод: производитель, скорость. */

SELECT DISTINCT Product.maker, Laptop.speed
FROM Product 
JOIN Laptop ON Product.model = Laptop.model
WHERE Laptop.hd >= 10

/* 7) Найдите номера моделей и цены всех имеющихся в продаже продуктов 
(любого типа) производителя B (латинская буква). */

SELECT newtab.model, newtab.price
FROM (SELECT model, price SELECT pc
UNION SELECT model, price SELECT laptop
UNION SELECT model, price SELECT printer) AS newtab
JOIN product ON newtab.model = product.model
WHERE product.maker = 'B'

/* 8) Найдите производителя, выпускающего ПК, но не ПК-блокноты. */

SELECT distinct maker 
FROM product
WHERE type = 'PC' 
EXCEPT
SELECT maker 
FROM product
WHERE type = 'Laptop'

/* 9) Найдите производителей ПК с процессором не менее 450 Мгц. Вывести: Maker */

SELECT distinct maker
FROM product
JOIN pc ON product.model = pc.model
WHERE speed >= 450

/* 10) Найдите модели принтеров, имеющих самую высокую цену. Вывести: model, price */

SELECT model, price
FROM printer
WHERE price = (SELECT Max(price)
FROM printer)

/* 11) Найдите среднюю скорость ПК. */

SELECT AVG(speed) FROM pc

/* 12) Найдите среднюю скорость ПК-блокнотов, цена которых превышает 1000 дол. */

SELECT AVG(speed) FROM LAPTOP
WHERE PRICE > 1000

/* 13) Найдите среднюю скорость ПК, выпущенных производителем A. */

SELECT AVG(speed) FROM pc
JOIN product ON pc.model = product.model
WHERE maker = 'A'

/* 14) Найдите класс, имя и страну для кораблей из таблицы Ships, имеющих не менее 10 орудий. */

SELECT classes.class, name, country
FROM ships
JOIN classes ON ships.class = classes.class
WHERE numGuns >= 10

SELECT ships.class, name, country
FROM classes
JOIN ships ON ships.class = classes.class
WHERE numGuns >= 10

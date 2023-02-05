# 1) Создать переменную типа String

item_1 = 'Aleksey'
print(type(item_1))

#2) Создать переменную типа Integer

item_2 = 30
print(type(item_2))

# 3) Создать переменную типа Float

item_3 = 3.88
print(type(item_3))

# 4) Создать переменную типа Bytes

item_4 = b"Hello"
print(type(item_4))

# 5) Создать переменную типа List

item_5 = ["cola", "fanta", "sprite"]
print(type(item_5))

# 6) Создать переменную типа Tuple

item_6 = ("cola", "fanta", "sprite")
print(type(item_6))

# 7) Создать переменную типа Set

item_7 = {"cola", "fanta", "sprite"}
print(type(item_7))

# 8. Создать переменную типа Frozen set

item_8 = frozenset({"cola", "fanta", "sprite"})
print(type(item_8))

# 9) Создать переменную типа Dict

item_9 = {'color': 'red', 'model': 'VC6', 'dimensions': '30x50'}
print(type(item_9))

#10) Вывести в консоль все выше перечисленные переменные с добавлением типа данных.

print('item_1 - ' + item_1 + ' ' + str(type(item_1)))
print('item_2 - ' + str(item_2) + ' ' + str(type(item_2)))
print('item_3 - ' + str(item_3) + ' ' + str(type(item_3)))
print('item_4 - ' + str(item_4) + ' ' + str(type(item_4)))
print('item_5 - ' + str(item_5) + ' ' + str(type(item_5)))
print('item_6 - ' + str(item_6) + ' ' + str(type(item_6)))
print('item_7 - ' + str(item_7) + ' ' + str(type(item_7)))
print('item_8 - ' + str(item_8) + ' ' + str(type(item_8)))
print('item_9 - ' + str(item_9) + ' ' + str(type(item_9)))

#11) Создать 2 переменные String, создать переменную в которой сканкатенируете эти переменные. Вывести в консоль.

item_10 = 'John'
item_11 = 'Snow'
item_12 = item_10 + ' ' + item_11
print(item_12)

#12) Вывести в одну строку переменные типа String и Integer используя “,” (Запятую)

item_13 = 'Coca Cola'
item_14 = 0
print(item_13 + ', ' + str(item_14))

#13) Вывести в одну строку переменные типа String и Integer используя “+” (Плюс)

print(item_13 + ' + ' + str(item_14))



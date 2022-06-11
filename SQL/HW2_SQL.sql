SQL_DDL. Первая часть.

Таблица employees

1) Создать таблицу employees
- id. serial,  primary key,
- employee_name. Varchar(50), not null

CREATE TABLE employees(
	id SERIAL PRIMARY KEY,
	employee_name VARCHAR(50)
);

2) Наполнить таблицу employee 70 строками.

INSERT INTO employees (employee_name)
VALUES ('name_1'), ('name_2'), ('name_3'), ('name_4'),
('name_5'), ('name_6'), ('name_7'), ('name_8'), 
('name_9'), ('name_10'), ('name_11'), ('name_12'), 
('name_13'), ('name_14'), ('name_15'), ('name_16'),
('name_17'), ('name_18'), ('name_19'), ('name_20'),
('name_21'), ('name_22'), ('name_23'), ('name_24'),
('name_25'), ('name_26'), ('name_27'), ('name_28'),
('name_29'), ('name_30'), ('name_31'), ('name_32'),
('name_33'), ('name_34'), ('name_35'), ('name_36'),
('name_37'), ('name_38'), ('name_39'), ('name_40'),
('name_41'), ('name_42'), ('name_43'), ('name_44'),
('name_45'), ('name_46'), ('name_47'), ('name_48'), 
('name_49'), ('name_50'), ('name_51'), ('name_52'), 
('name_53'), ('name_54'), ('name_55'), ('name_56'), 
('name_57'), ('name_58'), ('name_59'), ('name_60'), 
('name_61'), ('name_62'), ('name_63'), ('name_64'), 
('name_65'), ('name_66'), ('name_67'), ('name_68'), 
('name_69'), ('name_70');

Таблица salary

3) Создать таблицу salary
- id. Serial  primary key,
- monthly_salary. Int, not null

CREATE TABLE salary(
	id SERIAL PRIMARY KEY,
	monthly_salary INT NOT NULL
);

4) Наполнить таблицу salary 15 строками

INSERT INTO salary (monthly_salary)
VALUES (1100), (1200), (1300), (1400),
(1500), (1600), (1700), (1800),
(1900), (2000), (2100), (2200),
(2300), (2400), (2500);

5) Создать таблицу employee_salary
- id. Serial  primary key,
- employee_id. Int, not null, unique
- salary_id. Int, not null

CREATE TABLE employee_salary(
	id SERIAL PRIMARY KEY,
	employee_id INT UNIQUE NOT NULL,
	salary_id INT NOT NULL
);

6) Наполнить таблицу employee_salary 40 строками:
- в 10 строк из 40 вставить несуществующие employee_id

INSERT INTO employee_salary (employee_id, salary_id)
VALUES (1, 1), (2, 2), (3, 3), (4, 4),
(5, 5), (6, 6), (7, 7), (8, 8), (9, 9),
(10, 10),(11, 11), (12, 12), (13, 13),
(14, 14), (15, 15), (16, 1), (17, 2),
(18, 3), (19, 4), (20, 5), (21, 6),
(22, 7), (23, 8), (24, 9), (25, 10),
(26, 11), (27, 12), (28, 13), (29, 14),
(30, 15), (80, 8), (81, 12), (82, 13),
(83, 14), (84, 15), (85, 1), (86, 2),
(87, 3), (88, 4), (89, 5);	

Таблица roles

7) Создать таблицу roles
- id. Serial  primary key,
- role_name. int, not null, unique

CREATE TABLE roles(
	id SERIAL PRIMARY KEY,
	role_name INT UNIQUE NOT NULL
);

8) Поменять тип столба role_name с int на varchar(30)

ALTER TABLE roles
ALTER column role_name TYPE VARCHAR(30);

9) Наполнить таблицу roles 20 строками:

INSERT INTO roles (role_name)
VALUES ('Junior Python developer'),
('Middle Python developer'),
('Senior Python developer'),
('Junior Java developer'),
('Middle Java developer'),
('Senior Java developer'),
('Junior JavaScript developer'),
('Middle JavaScript developer'),
('Senior JavaScript developer'),
('Junior Manual QA engineer'),
('Middle Manual QA engineer'),
('Senior Manual QA engineer'),
('Project Manager'),
('Designer'),
('HR'),
('CEO'),
('Sales manager'),
('Junior Automation QA engineer'),
('Middle Automation QA engineer'),
('Senior Automation QA engineer');

Таблица roles_employee

10) Создать таблицу roles_employee
- id. Serial  primary key,
- employee_id. Int, not null, unique (внешний ключ для таблицы employees, поле id)
- role_id. Int, not null (внешний ключ для таблицы roles, поле id)

CREATE TABLE roles_employee(
	id SERIAL PRIMARY KEY,
	employee_id INT UNIQUE NOT NULL,
	role_id int not null,
	foreign key (employee_id)
		references employees(id),
	foreign key (role_id)
		references roles(id)
);

11) Наполнить таблицу roles_employee 40 строками:

INSERT INTO roles_employee (employee_id, role_id)
VALUES (2, 3), (4, 5), (8, 7), (10, 9),
(13,11), (16, 13), (19, 15), (45, 12),
(20, 17), (23, 19), (26, 1), (28, 4),
(31, 6), (32, 8), (33, 10), (36, 13),	   
(38, 16), (41, 4), (43, 8), (44, 12),
(47, 14), (49, 18), (50, 20), (52, 2),
(53, 11), (55, 5), (56, 6), (57, 10),
(59, 13), (60, 1), (61, 8), (62, 9),	   
(63, 12), (65, 16), (66, 4), (67, 8),	   
(69, 11), (7, 15), (27, 3), (70, 7);

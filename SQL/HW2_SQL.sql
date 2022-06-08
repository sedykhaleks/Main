/*SQL_DDL. Первая часть.*/

/*Таблица employees*/

/*1) Создать таблицу employees
- id. serial,  primary key,
- employee_name. Varchar(50), not null */

CREATE TABLE employees(
	ID SERIAL PRIMARY KEY,
	employee_name VARCHAR(50)
);

/*2) Наполнить таблицу employee 70 строками.*/

INSERT INTO employees (employee_name)
VALUES ('name_1'),
('name_2'),
('name_3'),
('name_4'),
('name_5'),
('name_6'),
('name_7'),
('name_8'),
('name_9'),
('name_10'),
('name_11'),
('name_12'),
('name_13'),
('name_14'),
('name_15'),
('name_16'),
('name_17'),
('name_18'),
('name_19'),
('name_20'),
('name_21'),
('name_22'),
('name_23'),
('name_24'),
('name_25'),
('name_26'),
('name_27'),
('name_28'),
('name_29'),
('name_30'),
('name_31'),
('name_32'),
('name_33'),
('name_34'),
('name_35'),
('name_36'),
('name_37'),
('name_38'),
('name_39'),
('name_40'),
('name_41'),
('name_42'),
('name_43'),
('name_44'),
('name_45'),
('name_46'),
('name_47'),
('name_48'),
('name_49'),
('name_50'),
('name_51'),
('name_52'),
('name_53'),
('name_54'),
('name_55'),
('name_56'),
('name_57'),
('name_58'),
('name_59'),
('name_60'),
('name_61'),
('name_62'),
('name_63'),
('name_64'),
('name_65'),
('name_66'),
('name_67'),
('name_68'),
('name_69'),
('name_70');

/*Таблица salary*/

/*3) Создать таблицу salary
- id. Serial  primary key,
- monthly_salary. Int, not null */

CREATE TABLE salary(
	ID SERIAL PRIMARY KEY,
	monthly_salary INT NOT NULL
);

/*4) Наполнить таблицу salary 15 строками
- 1000
- 1100
- 1200
- 1300
- 1400
- 1500
- 1600
- 1700
- 1800
- 1900
- 2000
- 2100
- 2200
- 2300
- 2400
- 2500 */

INSERT INTO salary (monthly_salary)
VALUES (1100),
(1200),
(1300),
(1400),
(1500),
(1600),
(1700),
(1800),
(1900),
(2000),
(2100),
(2200),
(2300),
(2400),
(2500);

/*5) Создать таблицу employee_salary
- id. Serial  primary key,
- employee_id. Int, not null, unique
- salary_id. Int, not null */

CREATE TABLE employee_salary(
	ID SERIAL PRIMARY KEY,
	employee_id INT UNIQUE NOT NULL,
	salary_id INT UNIQUE NOT NULL
);


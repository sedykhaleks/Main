SQL_DDL. Вторая часть.

-- 1. Вывести всех работников чьи зарплаты есть в базе, вместе с зарплатами.
	  
select employee_name, monthly_salary
from employee_salary
	join employees on employee_id = employees.id
	join salary on salary_id = salary.id;
	  
-- 2. Вывести всех работников у которых ЗП меньше 2000.
	
select employee_name, monthly_salary
from employee_salary
	join employees on employee_id = employees.id
	join salary on salary_id = salary.id
	where monthly_salary < 2000;
 
-- 3. Вывести все зарплатные позиции, но работник по ним не назначен. (ЗП есть, но не понятно кто её получает.)

select monthly_salary, employee_name
from employee_salary
	join salary on salary_id = salary.id
	left join employees on employee_id = employees.id
	where employee_name is null;

-- 4. Вывести все зарплатные позиции  меньше 2000 но работник по ним не назначен. (ЗП есть, но не понятно кто её получает.)

select employee_name, monthly_salary
from employee_salary
	left join employees on employee_id = employees.id
	join salary on salary_id = salary.id
	where employee_name is null and monthly_salary < 2000;

-- 5. Найти всех работников кому не начислена ЗП.

select employee_name, monthly_salary
from employee_salary
	join salary on salary_id = salary.id
	right join employees on employee_id = employees.id
	where monthly_salary is null;

-- 6. Вывести всех работников с названиями их должности.

select employee_name, role_name
from roles_employee
	join employees on employee_id = employees.id
	join roles on role_id = roles.id;
	
-- 7. Вывести имена и должность только Java разработчиков.
	
select employee_name, role_name
from roles_employee
	join employees on employee_id = employees.id
	join roles on role_id = roles.id
	where role_name like '%Java %';
    
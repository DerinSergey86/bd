-- Роли
CREATE TABLE roles (
	id serial primary key,
	name text unique not null
);

-- Пользователи
CREATE TABLE users (
	id serial primary key,
	name text not null
);

-- Связь многие ко многим (пользователь <> роли)
CREATE TABLE user_roles (
	user_id INT REFERENCES users(id) on delete CASCADE,
	role_id INT REFERENCES roles(id) on delete cascade,
	primary key (user_id, role_id)
);

-- Жанры (справочник)
create table genres (
id serial primary key,
name text unique not null
);

--Книги
create table books (
id serial primary key,
title text not null,
genre_id int references genres(id) on delete restrict,
total_copies int not null check (total_copies >= 0),
available_copies int not null check (available_copies >= 0)
);

-- Выдачи
create table loans (
id SERIAL primary key,
user_id INT references users(id) on delete cascade,
book_id INT references books(id) on delete cascade,
quantity int not null check (quantity > 0),
loan_date timestamp default current_timestamp,
return_date Timestamp
);

-- Журнал
create table logs(
id serial primary key,
action text not null, -- "issue" or "return"
"user" text not null,
book text,
datetime timestamp default current_timestamp,
quantity int
);

INSERT INTO users ("name") VALUES 
('Serzh'),
('Kira');

INSERT INTO roles ("name") VALUES 
('admin'),
('manager'),
('user');

INSERT INTO user_roles (user_id, role_id) VALUES 
(1, 1),
(1, 2),
(2,3);

INSERT INTO genres ("name") VALUES 
('русская классика'),
('иностранное произведение');

INSERT INTO books (title, genre_id, total_copies, available_copies) VALUES
('Война и мир (Л. Толстой)', 1, 10, 10),
('Преступление и наказание (Ф. Достоевский)', 1, 8, 8),
('Евгений Онегин (А. Пушкин)', 1, 12, 12),
('Мертвые души (Н. Гоголь)', 1, 7, 7),
('Отцы и дети (И. Тургенев)', 1, 6, 6),
('Мастер и Маргарита (М. Булгаков)', 1, 15, 15),
('Герой нашего времени (М. Лермонтов)', 1, 5, 5),
('Вишневый сад (А. Чехов)', 1, 5, 5),
('Тихий Дон (М. Шолохов)', 1, 9, 9),
('Доктор Живаго (Б. Пастернак)', 1, 4, 4),
('Гарри Поттер (Дж. Роулинг)', 2, 25, 25);

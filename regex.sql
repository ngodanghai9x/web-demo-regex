create database demo_regex;
use demo_regex;

-- ALTER DATABASE demo_regex CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER SCHEMA `demo_regex`  DEFAULT COLLATE utf8mb4_vietnamese_ci ;

create table user (
	id int not null primary key auto_increment,
	-- account_id int not null,
	name varchar(255) not null,
	phone varchar(15),
    sex tinyint(4), -- 0: female, 1: male, 2: unknown
	website varchar(255),
	email varchar(255),
	birthday datetime,
    description varchar(2048)
);
create table account (
	id int not null primary key auto_increment,
	username varchar(50) not null unique,
	password varchar(255) not null,
    created_at timestamp default current_timestamp,
    modified_at timestamp default current_timestamp
);

-- alter table user add constraint fk_acc_id foreign key (account_id) references account(id);
-- alter table user add column phone varchar(25) after name;
alter table user add column created_at timestamp default current_timestamp;
alter table user add column modified_at timestamp default current_timestamp;
-- alter table account modify column password varchar(255);
ALTER TABLE `demo_regex`.`user` 
CHANGE COLUMN `name` `name` VARCHAR(255) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_vietnamese_ci' NOT NULL ;

insert into account (username, password) values ('admin','123456');
    
INSERT INTO user (name,phone,website,email,description) VALUES ("<img src='ab' onerror='alert(12)' />",'123','','','');
INSERT	 INTO user (name,phone,website,email,description) VALUES ("' or 1=1 --  ",'123','','','');
-- SELECT * FROM account WHERE username='' or 1=1 --  ' AND password='';
describe user;
describe account;

select * from account where username = 'admin' or 1=1;
SELECT * FROM account WHERE username='admin or 1=1' AND password='1234';
SELECT * FROM account WHERE username='admin' AND password=123456;

-- update many
INSERT INTO account (id, username, password) 
VALUES (3, 'user1', '123'), 
	(4, 'user2', '123'),
	(5, 'user3', '123'),
	(6, 'user4', '123')
ON DUPLICATE KEY UPDATE
	username = VALUES(username),
    password = VALUES(password);
    
INSERT INTO students 
    (id, score1, score2)
    VALUES 
        (1, 5, 8),
        (2, 10, 8),
        (3, 8, 3),
        (4, 10, 7)
    ON DUPLICATE KEY UPDATE 
        score1 = VALUES(score1),
    score2 = VALUES(score2);
-- --------
UPDATE students s
JOIN (
    SELECT 1 as id, 5 as new_score1, 8 as new_score2
    UNION ALL
    SELECT 2, 10, 8
    UNION ALL
    SELECT 3, 8, 3
    UNION ALL
    SELECT 4, 10, 7
) vals ON s.id = vals.id
SET score1 = new_score1, score2 = new_score2;
-- ---------
UPDATE students SET score1 = 5, score2 = 8 WHERE id = 1;
UPDATE students SET score1 = 10, score2 = 8 WHERE id = 2;
UPDATE students SET score1 = 8, score2 = 3 WHERE id = 3;
UPDATE students SET score1 = 10, score2 = 7 WHERE id = 4;
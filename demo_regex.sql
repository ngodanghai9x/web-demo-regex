create database demo_regex;
use demo_regex;

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

-- ALTER DATABASE demo_regex CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER SCHEMA `demo_regex`  DEFAULT COLLATE utf8mb4_vietnamese_ci ;
-- alter table user add constraint fk_acc_id foreign key (account_id) references account(id);
-- alter table user add column phone varchar(25) after name;
alter table user add column created_at timestamp default current_timestamp;
alter table user add column modified_at timestamp default current_timestamp;
-- alter table account modify column password varchar(255);
ALTER TABLE `demo_regex`.`user` 
CHANGE COLUMN `name` `name` VARCHAR(255) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_vietnamese_ci' NOT NULL ;

insert into account (username, password) values ('haind3','123456');
insert into account (username, password) values ('admin','123456');
INSERT INTO user (name,phone,website,email,description,sex) VALUES ('ngô đăng hải','0975336798','','dmtuan1@yopmail.com','','0');

describe user;
describe account;
-- ' or 1=1 -- -
select * from account where username = 'admin' or 1=1;
SELECT * FROM account WHERE username='admin or 1=1' AND password='1234';
SELECT * FROM account WHERE username='admin' AND password=123456;
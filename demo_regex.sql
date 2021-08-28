create database demo_regex;
use demo_regex;

create table user (
	id int not null primary key auto_increment,
	name varchar(255) not null,
    sex tinyint(4), -- 0: female, 1: male, 2: bi
	website varchar(255),
	email varchar(255),
	birthday date,
    decription varchar(2048),
    account_id int not null
);
create table account (
	id int not null primary key auto_increment,
	username varchar(50) not null,
	password varchar(50) not null,
    created_at timestamp default current_timestamp,
    modified_at timestamp default current_timestamp
);

alter table user add constraint fk_acc_id foreign key (account_id) references account(id);

describe user;
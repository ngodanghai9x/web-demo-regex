create database demo_regex;
use demo_regex;

create table user (
	id int not null primary key auto_increment,
	account_id int not null,
	name varchar(255) not null,
	phone varchar(15),
    sex tinyint(4), -- 0: female, 1: male, 2: bi
	website varchar(255),
	email varchar(255),
	birthday date,
    description varchar(2048)
);
create table account (
	id int not null primary key auto_increment,
	username varchar(50) not null unique,
	password varchar(255) not null,
    created_at timestamp default current_timestamp,
    modified_at timestamp default current_timestamp
);

alter table user add constraint fk_acc_id foreign key (account_id) references account(id);
-- alter table user add column phone varchar(25) after name;
alter table user add column created_at timestamp default current_timestamp;
alter table user add column modified_at timestamp default current_timestamp;
-- alter table account modify column password varchar(255);

insert into account (username, password) values ('haind3','123456');

describe user;
describe account;
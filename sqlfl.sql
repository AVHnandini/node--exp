create database todo;
use todo;

create table todoItems(
ID int primary key auto_increment,
itemDescription varchar(100),
completed boolean default false
);
select *from todoItems;
insert into todoItems(itemDescription) values('inserted from mysql');
update todoItems set itemDescription="Editing" where ID=3;

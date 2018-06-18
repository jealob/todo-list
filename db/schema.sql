### Schema
CREATE DATABASE todo_db;
USE todo_list_db;

CREATE TABLE tasks
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	task varchar(255) NOT NULL,
	complete BOOLEAN DEFAULT false
);
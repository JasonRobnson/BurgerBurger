
USE burgers_db;

CREATE TABLE burgers (
 id INT NOT NULL AUTO_INCREMENT,
 burger_name VARCHAR(200) NOT NULL, 
 devoured BOOLEAN NOT NULL,
 PRIMARY KEY(id)

);
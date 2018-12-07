CREATE DATABASE chat;

USE chat;

CREATE TABLE messages ( 
  id int NOT NULL AUTO_INCREMENT, 
  content varchar(200)  NOT NULL,  
  room VARCHAR(20), 
  createdAt TIMESTAMP,
  PRIMARY KEY (ID)

);
  /* Describe your table here.*/
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  PRIMARY KEY (ID)
);


  /* Describe your table here.*/
  

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/


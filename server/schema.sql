CREATE DATABASE chat;

USE chat;

CREATE TABLE messages ( id VARCHAR(4), content TEXT, createdAt TIMESTAMP, room VARCHAR(20));
  /* Describe your table here.*/
CREATE TABLE messages_and_users (id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE users ( id VARCHAR(4), username VARCHAR(20));
  /* Describe your table here.*/
  

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/


DROP TABLE IF EXISTS catagories cascade;

CREATE TABLE catagories (
	catagoryId SERIAL PRIMARY KEY,
    catagoryName VARCHAR(255)
);


DROP TABLE IF EXISTS tags;

CREATE TABLE tags (
	tagId SERIAL PRIMARY KEY,
    tagName VARCHAR(255),
    catagoryId int,
    FOREIGN KEY (catagoryId) REFERENCES catagories(catagoryId) 

);
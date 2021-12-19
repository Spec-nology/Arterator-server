DROP TABLE IF EXISTS catagories cascade;
DROP TABLE IF EXISTS categories cascade;

CREATE TABLE categories (
	categoryId SERIAL PRIMARY KEY,
    categoryName VARCHAR(255)
);


DROP TABLE IF EXISTS tags;

CREATE TABLE tags (
	tagId SERIAL PRIMARY KEY,
    tagName VARCHAR(255),
    categoryId int,
    FOREIGN KEY (categoryId) REFERENCES categories(categoryId) 

);
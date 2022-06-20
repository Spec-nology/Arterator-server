DROP TABLE IF EXISTS categories cascade;
CREATE TABLE categories (
	categoryId SERIAL PRIMARY KEY,
    categoryName VARCHAR(255)
);


DROP TABLE IF EXISTS tags CASCADE;
CREATE TABLE tags (
	tagId SERIAL PRIMARY KEY,
    tagName VARCHAR(255),
    categoryId int,
    FOREIGN KEY (categoryId) REFERENCES categories(categoryId) 
);

DROP TABLE IF EXISTS moods CASCADE;
CREATE TABLE moods (
    mood_id SERIAL PRIMARY KEY,
    mood_name VARCHAR(255)
);

DROP TABLE IF EXISTS prompt_fragments_categories CASCADE;
CREATE TABLE prompt_fragments_categories (
    prompt_fragment_category_id SERIAL PRIMARY KEY,
    prompt_fragment_category VARCHAR(255)
);


DROP TABLE IF EXISTS prompt_fragments CASCADE;
CREATE TABLE prompt_fragments (
    prompt_fragment_id SERIAL PRIMARY KEY,
    prompt_fragment_text VARCHAR(255),
    prompt_fragment_category_id int,
    FOREIGN KEY (prompt_fragment_category_id) REFERENCES prompt_fragments_categories(prompt_fragment_category_id) 
);



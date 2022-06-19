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

DROP TABLE IF EXISTS prompt_fragments CASCADE;
CREATE TABLE prompt_fragments (
    prompt_fragment_id SERIAL PRIMARY KEY,
    prompt_fragment_name VARCHAR(255)
);

DROP TABLE IF EXISTS prompt_fragment_moods CASCADE;
CREATE TABLE prompt_fragment_moods (
    prompt_fragment_id SERIAL PRIMARY KEY,
    mood_id int,
    FOREIGN KEY (prompt_fragment_id) REFERENCES prompt_fragments(prompt_fragment_id), 
    FOREIGN KEY (mood_id) REFERENCES moods(mood_id) 
);

DROP TABLE IF EXISTS subjects CASCADE;
CREATE TABLE subjects (
    subject_id SERIAL PRIMARY KEY,
    subject_text VARCHAR(255),
    subject_tag_id int,
    FOREIGN KEY (subject_tag_id) REFERENCES tags(tagId) 
);


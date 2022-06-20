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

DROP TABLE IF EXISTS prompt_fragment_tags CASCADE;
CREATE TABLE prompt_fragment_tags (
    prompt_fragment_tag_id SERIAL PRIMARY KEY,
    tag_id int,
    prompt_fragment_id int,
    FOREIGN KEY (tag_id) REFERENCES tags(tagId) ,
    FOREIGN KEY (prompt_fragment_id) REFERENCES prompt_fragments(prompt_fragment_id) 
);

-- this doesnt work yet.
-- SELECT tags.tagName, prompt_fragments.prompt_fragment_text
-- FROM tags
-- INNER JOIN prompt_fragments ON tags.tagId=prompt_fragments.prompt_fragment_id;
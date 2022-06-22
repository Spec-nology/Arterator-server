INSERT INTO categories (categoryName)
VALUES
    ('style'),
    ('medium'),
    ('mood'),
    ('subject'),
    ('color palette');

INSERT INTO tags (tagName, categoryId)
VALUES
    ('cubism', (SELECT categoryId from categories WHERE categoryName='style')),
    ('art nouveau', (SELECT categoryId from categories WHERE categoryName='style')),
    ('pop art', (SELECT categoryId from categories WHERE categoryName='style')),
    ('expressionism', (SELECT categoryId from categories WHERE categoryName='style')),
    ('futurism', (SELECT categoryId from categories WHERE categoryName='style')),
    ('surrealism', (SELECT categoryId from categories WHERE categoryName='style')),
    ('other', (SELECT categoryId from categories WHERE categoryName='style')),

    ('pencils', (SELECT categoryId from categories WHERE categoryName='medium')),
    ('oils', (SELECT categoryId from categories WHERE categoryName='medium')),
    ('pastels', (SELECT categoryId from categories WHERE categoryName='medium')),
    ('inks', (SELECT categoryId from categories WHERE categoryName='medium')),
    ('collage', (SELECT categoryId from categories WHERE categoryName='medium')),
    ('watercolour', (SELECT categoryId from categories WHERE categoryName='medium')),
    ('digital', (SELECT categoryId from categories WHERE categoryName='medium')),
    ('other', (SELECT categoryId from categories WHERE categoryName='medium')),

    ('happy', (SELECT categoryId from categories WHERE categoryName='mood')),
    ('gloomy', (SELECT categoryId from categories WHERE categoryName='mood')),
    ('distracted', (SELECT categoryId from categories WHERE categoryName='mood')),
    ('anxious', (SELECT categoryId from categories WHERE categoryName='mood')),
    ('joyful', (SELECT categoryId from categories WHERE categoryName='mood')),
    ('bright', (SELECT categoryId from categories WHERE categoryName='mood')),
    ('busy', (SELECT categoryId from categories WHERE categoryName='mood')),
    ('other', (SELECT categoryId from categories WHERE categoryName='mood')),

    ('people', (SELECT categoryId from categories WHERE categoryName='subject')),
    ('animals', (SELECT categoryId from categories WHERE categoryName='subject')),
    ('places', (SELECT categoryId from categories WHERE categoryName='subject')),
    ('still life', (SELECT categoryId from categories WHERE categoryName='subject')),
    ('landscapes', (SELECT categoryId from categories WHERE categoryName='subject')),
    ('other', (SELECT categoryId from categories WHERE categoryName='subject')),

    ('pastels', (SELECT categoryId from categories WHERE categoryName='color palette')),
    ('greys', (SELECT categoryId from categories WHERE categoryName='color palette')),
    ('muted', (SELECT categoryId from categories WHERE categoryName='color palette')),
    ('duo tone', (SELECT categoryId from categories WHERE categoryName='color palette')),
    ('other', (SELECT categoryId from categories WHERE categoryName='color palette'));

INSERT INTO prompt_fragments_categories (prompt_fragment_category) 
VALUES
    ('subjects'),
    ('locations'),
    ('endings');

INSERT INTO prompt_fragments (prompt_fragment_text, prompt_fragment_category_id)
VALUES
    ('a dog',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='subjects')),
    ('a cat',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='subjects')),
    ('a mother and daughter',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='subjects')),
    ('an old man',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='subjects')),
    ('a fox',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='subjects')),
    ('the postman',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='subjects')),

    ('at a football match',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='locations')),
    ('in paris',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='locations')),
    ('in a coffee shop',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='locations')),
    ('sitting in the park',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='locations')),
    ('on a hill',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='locations')),
    ('looking into the distance',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='locations')),
    ('resting their eyes',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='locations')),
    ('taking a photograph',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='locations')),

    ('and its raining',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='endings')),
    ('and its crowded',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='endings')),
    ('a windmill can be seen in the distance',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='endings')),
    ('a bull is running through the crowd',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='endings')),
    ('something has fallen over',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='endings')),
    ('their hat has blown off',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='endings')),
    ('theyre overdressed',
    (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category='endings'));

INSERT INTO prompt_fragment_tags (prompt_fragment_id, tag_id)
VALUES (
    (SELECT prompt_fragment_id FROM prompt_fragments WHERE prompt_fragment_text='sitting in the park'),
    (SELECT tagId FROM tags WHERE tagName='happy')
);

INSERT INTO prompt_fragment_tags (prompt_fragment_id, tag_id)
VALUES (
    (SELECT prompt_fragment_id FROM prompt_fragments WHERE prompt_fragment_text='and its raining'),
    (SELECT tagId FROM tags WHERE tagName='gloomy')
);

INSERT INTO prompt_fragment_tags (prompt_fragment_id, tag_id)
VALUES (
    (SELECT prompt_fragment_id FROM prompt_fragments WHERE prompt_fragment_text='and its raining'),
    (SELECT tagId FROM tags WHERE tagName='distracted')
);

INSERT INTO prompt_fragment_tags (prompt_fragment_id, tag_id)
VALUES (
    (SELECT prompt_fragment_id FROM prompt_fragments WHERE prompt_fragment_text='and its raining'),
    (SELECT tagId FROM tags WHERE tagName='anxious')
);

INSERT INTO prompt_fragment_tags (prompt_fragment_id, tag_id)
VALUES (
    (SELECT prompt_fragment_id FROM prompt_fragments WHERE prompt_fragment_text='looking into the distance'),
    (SELECT tagId FROM tags WHERE tagName='anxious')
);

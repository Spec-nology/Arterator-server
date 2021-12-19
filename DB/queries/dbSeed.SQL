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


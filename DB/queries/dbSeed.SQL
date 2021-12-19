INSERT INTO catagories (catagoryName)
VALUES
    ('style'),
    ('medium'),
    ('mood'),
    ('subject'),
    ('test'),
    ('color palette');

INSERT INTO tags (tagName, catagoryId)
VALUES
    ('cubism', (SELECT catagoryId from catagories WHERE catagoryName='style')),
    ('art nouveau', (SELECT catagoryId from catagories WHERE catagoryName='style')),
    ('pop art', (SELECT catagoryId from catagories WHERE catagoryName='style')),
    ('expressionism', (SELECT catagoryId from catagories WHERE catagoryName='style')),
    ('futurism', (SELECT catagoryId from catagories WHERE catagoryName='style')),
    ('surrealism', (SELECT catagoryId from catagories WHERE catagoryName='style')),
    ('other', (SELECT catagoryId from catagories WHERE catagoryName='style')),

    ('pencils', (SELECT catagoryId from catagories WHERE catagoryName='medium')),
    ('oils', (SELECT catagoryId from catagories WHERE catagoryName='medium')),
    ('pastels', (SELECT catagoryId from catagories WHERE catagoryName='medium')),
    ('inks', (SELECT catagoryId from catagories WHERE catagoryName='medium')),
    ('collage', (SELECT catagoryId from catagories WHERE catagoryName='medium')),
    ('watercolour', (SELECT catagoryId from catagories WHERE catagoryName='medium')),
    ('digital', (SELECT catagoryId from catagories WHERE catagoryName='medium')),
    ('other', (SELECT catagoryId from catagories WHERE catagoryName='medium')),

    ('happy', (SELECT catagoryId from catagories WHERE catagoryName='mood')),
    ('gloomy', (SELECT catagoryId from catagories WHERE catagoryName='mood')),
    ('distracted', (SELECT catagoryId from catagories WHERE catagoryName='mood')),
    ('anxious', (SELECT catagoryId from catagories WHERE catagoryName='mood')),
    ('joyful', (SELECT catagoryId from catagories WHERE catagoryName='mood')),
    ('bright', (SELECT catagoryId from catagories WHERE catagoryName='mood')),
    ('busy', (SELECT catagoryId from catagories WHERE catagoryName='mood')),
    ('other', (SELECT catagoryId from catagories WHERE catagoryName='mood')),

    ('people', (SELECT catagoryId from catagories WHERE catagoryName='subject')),
    ('animals', (SELECT catagoryId from catagories WHERE catagoryName='subject')),
    ('places', (SELECT catagoryId from catagories WHERE catagoryName='subject')),
    ('still life', (SELECT catagoryId from catagories WHERE catagoryName='subject')),
    ('landscapes', (SELECT catagoryId from catagories WHERE catagoryName='subject')),
    ('other', (SELECT catagoryId from catagories WHERE catagoryName='subject')),

    ('pastels', (SELECT catagoryId from catagories WHERE catagoryName='color palette')),
    ('greys', (SELECT catagoryId from catagories WHERE catagoryName='color palette')),
    ('muted', (SELECT catagoryId from catagories WHERE catagoryName='color palette')),
    ('duo tone', (SELECT catagoryId from catagories WHERE catagoryName='color palette')),
    ('other', (SELECT catagoryId from catagories WHERE catagoryName='color palette'));


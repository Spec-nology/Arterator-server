SELECT tags.tagName, categories.categoryName
FROM tags
INNER JOIN categories ON tags.categoryId=categories.categoryId;
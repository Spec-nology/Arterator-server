SELECT tags.tagName, catagories.catagoryName
FROM tags
INNER JOIN catagories ON tags.catagoryId=catagories.catagoryId;
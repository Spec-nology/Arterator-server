INSERT INTO catagories (catagoryName)
VALUES ('style');

INSERT INTO tags (tagName, catagoryId)
VALUES ('mood', (SELECT catagoryId from catagories WHERE catagoryName='style'));

INSERT INTO tags (tagName)
VALUES ('boobs');
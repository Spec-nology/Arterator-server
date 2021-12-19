const formatTagData = (categories, tags) => {
  categories.forEach((category) => {
    category.tags = [];
  });

  for (let i = 0; i < tags.length; i++) {
    for (let j = 0; j < categories.length; j++) {
      if (categories[j].categoryid === tags[i].categoryid) {
        categories[j].tags.push(tags[i].tagname);
        break;
      }
    }
  }

  return categories;
};

module.exports = { formatTagData };

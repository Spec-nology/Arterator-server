const { join: joinPath } = require('path');
const { QueryFile } = require('pg-promise')();

function sql(file) {
    const fullPath = joinPath(__dirname, file); // generating full path;
    return new QueryFile(fullPath, { minify: true });
}

const dbInit = async db => {
    try {
        await db.none(sql('init.SQL'));
    } catch (error) {
        console.log(error);
    }
};

const dbSeed = async db => {
    try {
        await db.none(sql('dbSeed.SQL'));
    } catch (error) {
        console.log(error);
    }
};

const getTagsWithCategories = async db => {
    try {
        const result = await db.any(sql('tagsWithCategories.SQL'));

        return result;
    } catch (error) {
        console.log(error);
    }
};

const getAllCatagories = async db => {
    try {
        const result = await db.any(sql('getAllCategories.SQL'));
        return result;
    } catch (error) {
        console.log(error);
    }
};

const getAllTags = async db => {
    try {
        const result = await db.any(sql('getAllTags.SQL'));
        return result;
    } catch (error) {
        console.log(error);
    }
};

const getAllPromptFragments = async db => {
    try {
        const promptFragments = await db.any(
            'SELECT tags.tagName, prompt_fragment_text AS text_content, prompt_fragment_category FROM prompt_fragment_tags INNER JOIN tags ON tags.tagId=prompt_fragment_tags.tag_id INNER JOIN prompt_fragments ON prompt_fragments.prompt_fragment_id = prompt_fragment_tags.prompt_fragment_id INNER JOIN prompt_fragments_categories ON prompt_fragments.prompt_fragment_category_id = prompt_fragments_categories.prompt_fragment_category_id;'
        );
        return promptFragments;
    } catch (error) {
        throw new Error('Error finding prompt fragments');
    }
};

const getAllPromptFragmentsByTagName = async (db, tagName) => {
    try {
        const promptFragments = await db.any(
            'SELECT tags.tagName AS tag_name, prompt_fragment_text AS text_content, prompt_fragment_category FROM prompt_fragment_tags INNER JOIN tags ON tags.tagId=prompt_fragment_tags.tag_id INNER JOIN prompt_fragments ON prompt_fragments.prompt_fragment_id = prompt_fragment_tags.prompt_fragment_id INNER JOIN prompt_fragments_categories ON prompt_fragments.prompt_fragment_category_id = prompt_fragments_categories.prompt_fragment_category_id WHERE tagName = $1;',
            tagName
        );
        return promptFragments;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    dbInit,
    dbSeed,
    getTagsWithCategories,
    getAllCatagories,
    getAllTags,
    getAllPromptFragments,
    getAllPromptFragmentsByTagName,
};

const db = require('../DB/dbConfig');
const { getPrompt } = require('../helpers');
const { getAllPromptFragments, getAllPromptFragmentsByTagName } = require('../DB/queries/dbQueries');
const { readFile } = require('../data/parseDatasource');

class Prompts {
    constructor(data) {}

    static async getPromptFromRequestForm(data) {
        try {
            const prompt = await getPrompt(data);
            return { prompt: prompt };
        } catch (error) {
            return error;
        }
    }

    static getAllPromptFragments() {
        return getAllPromptFragments(db);
    }

    static getPromptFragmentsByTagName(tagName) {
        return getAllPromptFragmentsByTagName(db, tagName);
    }

    static async seedDatabase() {
        await this.seedCategories();
        await this.seedTags();
        await this.seedPromptFragmentsCategories();
        await this.seedPromptFragments();
        await this.seedPromptFragmentTags();
    }

    static async seedCategories() {
        const categories = await readFile('/data/datasources/categories.csv');

        await db.tx(t => {
            const queries = categories.map(category => {
                return t.none('INSERT INTO categories (categoryName) VALUES ($1);', category.category_name);
            });
            return t.batch(queries);
        });
    }

    static async seedTags() {
        const tags = await readFile('/data/datasources/tags.csv');

        await db.tx(t => {
            const queries = tags.map(tag => {
                return t.none(
                    `
                INSERT INTO tags (tagName, categoryId) 
                VALUES ($1, (SELECT categoryId from categories WHERE categoryName=$2));`,
                    [tag.tag_name, tag.category_name]
                );
            });
            return t.batch(queries);
        });
    }

    static async seedPromptFragmentsCategories() {
        const pfcs = await readFile('/data/datasources/prompt_fragments_categories.csv');

        await db.tx(t => {
            const queries = pfcs.map(pfc => {
                return t.none(
                    `INSERT INTO prompt_fragments_categories (prompt_fragment_category) 
                    VALUES ($1);`,
                    pfc.prompt_fragment_category
                );
            });
            return t.batch(queries);
        });
    }

    static async seedPromptFragments() {
        const pfs = await readFile('/data/datasources/prompt_fragments.csv');

        try {
            await db.tx(t => {
                const queries = pfs.map(pf => {
                    return t.none(
                        `INSERT INTO prompt_fragments (prompt_fragment_text, prompt_fragment_category_id)
                        VALUES
                            ($1,
                            (SELECT prompt_fragment_category_id FROM prompt_fragments_categories WHERE prompt_fragment_category = $2));`,
                        [pf.prompt_fragment_text, pf.prompt_fragment_category]
                    );
                });
                return t.batch(queries);
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async seedPromptFragmentTags() {
        const pfts = await readFile('/data/datasources/prompt_fragment_tags.csv');

        await db.tx(t => {
            const queries = pfts.map(pft => {
                return t.none(
                    `INSERT INTO prompt_fragment_tags (prompt_fragment_id, tag_id)
                    VALUES (
                        (SELECT prompt_fragment_id FROM prompt_fragments WHERE prompt_fragment_text=$1),
                        (SELECT tagId FROM tags WHERE tagName=$2));`,
                    [pft.prompt_fragment_text, pft.tag_name]
                );
            });
            return t.batch(queries);
        });
    }
}

module.exports = Prompts;

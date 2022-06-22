const db = require('../DB/dbConfig');
const { getPrompt } = require('../helpers');
const { getAllPromptFragments, getAllPromptFragmentsByTagName } = require('../DB/queries/dbQueries');

class Prompts {
    constructor(data) {
        // const { style, colorPalette, medium, mood, subject } = data;
        // this.style = style;
        // this.colorPalette = colorPalette;
        // this.medium = medium;
        // this.mood = mood;
        // this.subject = subject;
    }

    static async getPromptFromRequestForm(data) {
        return { prompt: await getPrompt(data) };
    }

    static getAllPromptFragments() {
        return getAllPromptFragments(db);
    }

    static getPromptFragmentsByTagName(tagName) {
        return getAllPromptFragmentsByTagName(db, tagName);
    }
}

module.exports = Prompts;

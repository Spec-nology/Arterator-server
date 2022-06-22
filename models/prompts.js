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

    static getRandomPrompt() {
        return {
            prompt: getPrompt(),
        };
    }

    static getPromptFromRequestForm(data) {
        return {
            prompt: getPrompt(data),
        };
    }

    static getAllPromptFragments() {
        return getAllPromptFragments(db);
    }

    static getPromptFragmentsByTagName(tagName) {
        return getAllPromptFragmentsByTagName(db, tagName);
    }
}

module.exports = Prompts;

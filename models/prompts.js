const db = require('../DB/dbConfig');
const { getPrompt } = require('../helpers');

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
}

module.exports = Prompts;

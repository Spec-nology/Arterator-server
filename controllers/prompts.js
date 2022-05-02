// TODO bring in the model.
const Prompts = require('../models/prompts');

const getRandomPrompt = async (req, res) => {
    const prompt = Prompts.getRandomPrompt();
    console.log(req.body);
    res.status(200).send(prompt);
};

const getPromptFromRequestForm = async (req, res) => {
    const prompt = Prompts.getPromptFromRequestForm(req.body);
    console.log(req.body);
    res.status(200).send(prompt);
};

module.exports = { getRandomPrompt, getPromptFromRequestForm };

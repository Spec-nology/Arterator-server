// TODO bring in the model.
const Prompts = require('../models/prompts');

const getRandomPrompt = async (req, res) => {
    const prompt = Prompts.getRandomPrompt();
    console.log(req.body);
    res.status(200).send(prompt);
};

const getPromptFromRequestForm = async (req, res) => {
    const prompt = await Prompts.getPromptFromRequestForm(req.body);
    res.status(200).send(prompt);
};

const getAllPromptFragments = async (req, res) => {
    const promptFragments = await Prompts.getAllPromptFragments();
    res.status(200).send(promptFragments);
};

const getPromptFragmentsByTagName = async (req, res) => {
    const tagName = req.params.tag;
    const promptFragments = await Prompts.getPromptFragmentsByTagName(tagName);

    res.status(200).send(promptFragments);
};

module.exports = { getRandomPrompt, getPromptFromRequestForm, getAllPromptFragments, getPromptFragmentsByTagName };

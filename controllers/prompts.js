const Prompts = require('../models/prompts');

const getRandomPrompt = async (req, res) => {
    const prompt = Prompts.getRandomPrompt();
    res.status(200).send(prompt);
};

const getPromptFromRequestForm = async (req, res) => {
    const prompt = await Prompts.getPromptFromRequestForm(req.body);
    if (prompt.prompt) {
        res.status(200).send(prompt);
    } else {
        res.status(400).send({
            error: 'No data was returned for this query, please ensure you have sent all required fields with correct values.',
        });
    }
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

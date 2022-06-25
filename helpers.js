const { getAllPromptFragmentsByTagName } = require('./DB/queries/dbQueries');
const db = require('./DB/dbConfig');

const getServerGreeting = () => {
    const greetings = [
        'Mixing the oil paints',
        'Creating some happy accidents',
        'Putting up the easel',
        'Sharpening my pencils',
        'Adjusting my beret',
    ];

    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
};

const generatePrompt = (subject, location, theBut, theButTwo) => {
    return `${subject} ${location} ${theBut} and ${theButTwo} `;
};

const getPrompt = async options => {
    try {
        const subjects = await getAllPromptFragmentsByTagName(db, options.subject);
        const locations = await getAllPromptFragmentsByTagName(db, options.mood);

        if (subjects.length <= 0 || locations.length <= 0) {
            throw new Error('No results were returned for your query.');
        }

        const randomIndex = arr => {
            return Math.floor(Math.random() * arr.length);
        };

        return generatePrompt(
            subjects[randomIndex(subjects)].text_content,
            locations[randomIndex(locations)].text_content,
            locations[randomIndex(locations)].text_content,
            locations[randomIndex(locations)].text_content
        );
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getServerGreeting, getPrompt };

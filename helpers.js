const testHelpers = () => {
    console.log('I am a helper');
};

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

const getPrompt = options => {
    const subjects = [
        {
            id: 1,
            mood: ['people'],
            text: 'My Grandad',
        },
        {
            id: 1,
            mood: ['still life'],
            text: 'A bowl of oranges',
        },
        {
            id: 1,
            mood: ['people'],
            text: 'My Grandad',
        },
        {
            id: 2,
            mood: ['animals', 'heartwarming', 'bright'],
            text: 'A dog',
        },
        {
            id: 3,
            mood: ['animals', 'heartwarming', 'bright'],
            text: 'A cat',
        },
        {
            id: 4,
            mood: ['people', 'heartwarming', 'bright'],
            text: 'A bus full of tourists',
        },
        {
            id: 5,
            mood: ['people', 'heartwarming', 'bright'],
            text: 'A police man',
        },
        {
            id: 6,
            mood: ['people', 'heartwarming', 'bright'],
            text: 'A mother and daughter',
        },
    ];

    const locations = [
        {
            id: 1,
            mood: ['cold', 'heartwarming', 'bright'],
            text: 'at a football match',
        },
        {
            id: 2,
            mood: ['cold', 'heartwarming', 'bright'],
            text: 'in Paris',
        },
        {
            id: 3,
            mood: ['cold', 'heartwarming', 'bright'],
            text: 'in a coffee shop',
        },
        {
            id: 4,
            mood: ['cold', 'heartwarming', 'bright'],
            text: 'sitting in the park',
        },
        {
            id: 5,
            mood: ['cold', 'heartwarming', 'bright'],
            text: 'on a hill',
        },
        {
            id: 5,
            mood: ['cold', 'heartwarming', 'bright'],
            text: 'looking into the distance',
        },
        {
            id: 5,
            mood: ['cold', 'heartwarming', 'bright'],
            text: 'resting their eyes',
        },
        {
            id: 5,
            mood: ['cold', 'heartwarming', 'bright'],
            text: 'taking a photograph',
        },
    ];

    const theBut = [
        "but it's raining",
        "and it's crowded",
        'a windmill can be seen in the distance',
        'a bull is running through the crowd',
        'something has fallen over',
        'their hat has blown off',
        "they're overdressed",
    ];

    const filteredSubject = subjects.filter(item => item.mood.includes(options.subject));

    console.log(filteredSubject);

    const randomIndex = arr => {
        return Math.floor(Math.random() * arr.length);
    };

    //TODO - Refactor this
    //TODO - Filter from DB.
    //TODO - Add all the DB parts.

    return generatePrompt(
        filteredSubject[randomIndex(filteredSubject)].text,
        locations[randomIndex(locations)].text,
        theBut[randomIndex(theBut)],
        theBut[randomIndex(theBut)]
    );
};

module.exports = { testHelpers, getServerGreeting, getPrompt };

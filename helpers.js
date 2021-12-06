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

module.exports = { testHelpers, getServerGreeting };

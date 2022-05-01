const insult = [
  "when it comes to intelligence, I'm sure you have a six pack but you're missing the little plastic thing that holds it all together.",
  "you're posture is so bad that if you stood on a ball you would look like a question mark.",
  "you have the IQ of a raven-dolphin-human hybrid but the personality of an unseasoned breadstick.",
  "you make me want to take the mitochondria out of my cells.",
  "you act like a cosmic entity learning to interact with humans for the first time.",
  "your brain is the size of my dogs neutered balls.",
  "you sound like you were thrown violently down stairs as children by your inbred parents.",
  "your driving is so bad that you shouldn't be allowed to steer a shopping cart through a supermarket",
  "you're a bag of stale chips",
  "you are the exact reason why women orgasm with their eyes shut.",
];

function getInsult() {
  let insults = insult[getRandomInt(insult.length)];
  return insults;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = getInsult;

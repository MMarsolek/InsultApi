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
  "there are approximately 1,010,300 words in the English language, but I could never string enough words together to properly express how much I want to hit you with a chair.",
  "you're like a plunger. Always bringing up old shit.",
  "you drive like your patience is shorter than your dick.",
  "I can yell into a ravine and the echo I would hear could hold a better conversation that you.",
  "you're as bright as a black hole and twice as dense.",
  "the bar was so low that it was a tripping hazard in Hell, yet here you are, practically limbo dancing with the devil.",
  "it must have been a sad day when you slithered out of the abortion bucket.",
  "I bet your teacher always handed your tests back to you face down.",
  "you look like a goblin banker of Gringotts from the Harry Potter movies.",
];

function getInsult() {
  let insults = insult[getRandomInt(insult.length)];
  return insults;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = getInsult;

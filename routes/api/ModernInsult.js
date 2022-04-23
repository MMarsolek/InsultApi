const adjectives = [
  "Slutty",
  "Slimy",
  "Smelly",
  "Useless",
  "Ugly",
  "Snooty",
  "Bumpy",
  "Stupid",
  "Pompous",
  "Communist",
  "Duck nosed",
  "Duck lipped",
  "Brainless",
  "Booger",
  "High flying",
  "Son of a",
  "Blue ball",
  "9 stroked",
  "Teasing",
  "Stout",
  "Creepy",
  "Annoying",
  "Obnoxious",
  "Constipated",
  "Artificial",
  "Aged",
  "Gross",
  "White trash",
  "Psycho",
  "Elitist",
  "Idiotic",
  "Brown nosed",
  "Jackalope",
  "Spongy",
  "Attention seeking",
  "Preppy",
  "Shart",
  "Insecure",
  "Butterface",
  "Tone deaf",
  "Helmet wearing",
];

const elaborateAdjective = [
  "moist",
  "slut",
  "banana",
  "freak",
  "loser",
  "whore",
  "mistake",
  "dunce cap",
  "beanbag shaped",
  "may filled",
  "hook nosed",
  "golf brained",
  "turd",
  "sphincter",
  "ass",
  "dog faced",
  "douche",
  "prick",
  "turd",
  "brained",
  "ass hat",
  "bitch",
  "brony-ass",
  "wart faced",
  "boner",
  "ugly-assed",
  "rectum",
  "taint",
  "nut",
  "wad",
  "butt",
  "ball sucking",
];

const noun = [
  "clown",
  "waffle",
  "sucker",
  "muffin",
  "dingle berry",
  "cum-guzzler",
  "biscuit",
  "degenerate",
  "socket",
  "nerd",
  "gear head",
  "fool",
  "lettuce",
  "truck",
  "mistake",
  "boomer",
  "millennial",
  "gen-z",
  "uni-brow",
  "dragon",
  "captain",
  "hammer",
  "blossom",
  "cock sucker",
  "fucker",
  "hell monkey",
  "unicorn",
  "goblin",
  "witch",
  "mistake of God",
  "potato",
  "wall",
  "pirate",
  "gremlin",
  "boob",
  "ball sack",
  "champion",
  "school boy",
  "sheeple",
  "corpse",
  "geek",
  "shit hole",
  "tool bag",
  "canoe",
];

function getInsult() {
  let insultAdj = adjectives[getRandomInt(adjectives.length)];
  let insultElaborate =
    elaborateAdjective[getRandomInt(elaborateAdjective.length)];
  let insultNoun = noun[getRandomInt(noun.length)];
  return insultAdj + " " + insultElaborate + " " + insultNoun;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = getInsult;

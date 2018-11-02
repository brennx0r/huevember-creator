var express = require('express');
var router = express.Router();

function generatePromptWords() {
  
  randwordArray = []

  wordArray = [
    "ambitous", 
    "paradise", 
    "forkdoor", 
    "hope",
    "green",
    "overgrown",
    "icy",
    "festive",
    "complicated",
    "morose",
    "glittering",
    "bounty",
    "thankful",
    "serene",
    "challenging",
    "shocked",
    "basic",
    "flowering",
    "spacious",
    "grace",
    "slytherin",
    "muppet",
    "cuddly",
    "alien",
    "swamp",
    "rubies",
    "clammy",
    "vacation",
    "romantic",
    "cookie cat",
    "sweeping",
    "drowning",
    "pillow",
    "smooshed",
    "trapped",
    "verdant",
    "skull",
    "piece of cake",
    "swallow",
    "hibernate",
    "bark",
    "furry",
    "double",
    "retired",
    "fashionable",
    "gleaming",
    "lit",
    "smitten",
    "delicious",
    "strong",
    "compact",
    "timid",
    "miniature",
    "glass",
    "metallic",
    "cozy",
    "placid",
    "snowy",
    "festive",
    "forgetful",
    "anxious",
    "frantic",
    "experimental",
    "testing",
    "work",
    "play",
    "gaming",
    "travel",
    "election",
    "cast",
    "flip",
    "sway",
    "dance",
    "reflecting",
    "end",
  ]

  var day;

  for (day = 1; day < 31; day++) {
    wordResult = wordArray[Math.floor(Math.random() * wordArray.length)];
    randwordArray.push(wordResult); 
  }

  return randwordArray;
  
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Huevember Prompt-word and Color Creator',
    words: generatePromptWords()
 });

});

module.exports = router;

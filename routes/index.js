var express = require('express');
var router = express.Router();

function generatePromptWords() {
  
  randwordArray = []
  wordArray = ["ambitous", "over-reaching", "forkdoor", "slaw", "mayo", "winner"]
  var day;

  for (day = 1; day < 31; day++) {
    wordResult = wordArray[Math.floor(Math.random() * wordArray.length)];
    randwordArray.push(wordResult); 
  }

  return randwordArray;
  
}

function generateList() {
  return generatePromptWords()
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Huevember Prompt-word and Color Creator',
    words: generateList()
 });

});

module.exports = router;

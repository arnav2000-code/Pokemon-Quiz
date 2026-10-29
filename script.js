let questions = [
  {
    q: "In the Pokémon anime, what is the very first wild Pokémon that Ash Ketchum successfully catches after leaving Pallet Town with Pikachu?",
    option: ["Pidgeotto", "Bulbasaur", "Caterpie", "Weedle"],
    correctans: "Caterpie",
  },
  {
    q: "Which Pokémon has the highest base stat total among standard Pokémon forms, excluding Mega Evolutions?",
    option: ["Arceus", "Giratina", "Mewtwo", "Hoopa"],
    correctans: "Arceus",
  },
  {
    q: "Which Pokémon can evolve into five different forms, depending on the method?",
    option: ["Chimchar", "Scyther", "Ditto", "Eevee"],
    correctans: "Eevee",
  },
  {
    q: 'Which Pokémon is known as the "Guardian of the Seas?',
    option: ["Kyogre", "Lugia", "Suicuine", "Articuno"],
    correctans: "Lugia",
  },
  {
    q: "What is the first Pokémon movie?",
    option: [
      "Pokémon:Mewtwo Strikes Back",
      "Pokémon:Destiny Deoxys",
      "Pokémon:The Rise of Darkrai",
      "Pokémon:Secrets of the Jungle",
    ],
    correctans: "Pokémon:Mewtwo Strikes Back",
  },
  {
    q: "What is the only Pokémon with a dual Fire/Water type?",
    option: ["Infernape", "Volcanion", "Blaziken", "Charizard"],
    correctans: "Volcanion",
  },
  {
    q: ' In which region did Ash and his friends travel during the "Pokémon DP: Battle Dimension" series?',
    option: ["Danto", "Kanto", "Zato", "Sinnoh"],
    correctans: "Sinnoh",
  },
  {
    q: 'In which specific battle did Ash and Greninja first achieve the complete, synchronized "Ash-Greninja" form where Ash physically mirrored Greninja\'s movements and felt its pain?',
    option: [
      "Against Sawyer's Sceptile",
      "Against Wulfric's Mega Abomasnow",
      "Against Alain's Mega Charizard X",
      "Against Olympia's Meowstic",
    ],
    correctans: "Against Wulfric's Mega Abomasnow",
  },
  {
    q: "In the intense final match of the Kalos League between Ash and Alain, what was the final move used by Alain's Mega Charizard X to overcome Ash-Greninja and seal Ash's defeat?",
    option: ["Dragon Claw", "Flamethrower", "Blast Burn", "Thunder Punch"],
    correctans: "Blast Burn",
  },
  {
    q: "During the emotional climax of the final battle, Pikachu collapses from Charizard's attack but gets a vision that revives his strength. What does this spectral vision display?",
    option: [
      "A glimpse into the future Paldean region",
      "Team Rocket's secret backup plan",
      "Prof. Oak laboratory storage system",
      "All of the Pokemon Ash has owned and journeyed with",
    ],
    correctans: "All of the Pokemon Ash has owned and journeyed with",
  },
];
let numOfQuestion = questions.length;
let progressBar = document.getElementById("progressBar");
let progressMade = document.getElementById("progressMade");
let questionNumber = 0;
let score = 0;
let startGame = document.getElementById("startGame");
let homePage = document.getElementById("homePage");
let frame = document.getElementById("frame");
let quesNum = document.getElementById("questionNum");
let questionElement = document.getElementById("question");
let op1 = document.getElementById("option1");
let op2 = document.getElementById("option2");
let op3 = document.getElementById("option3");
let op4 = document.getElementById("option4");
let buttons = document.getElementsByClassName("options");
let nextQuestions = document.getElementById("nextQuestion");
let finalScore = document.getElementById("finalScore");
let result = document.getElementById("result");
let playAgain = document.getElementById("playAgain");

function beginTheGame() {
  homePage.style.display = "none";
  frame.style.display = "block";
  playAgain.style.display = "none";
  nextQuestions.style.display = "block";
  displayQuestion();
}

startGame.addEventListener("click", beginTheGame);

function displayQuestion() {
  progressMade.style.width = ((questionNumber + 1) / numOfQuestion) * 100 + "%";
  quesNum.textContent =
    "Question " + (questionNumber + 1) + " / " + numOfQuestion;
  questionElement.textContent = questions[questionNumber].q;
  op1.textContent = questions[questionNumber].option[0];
  op2.textContent = questions[questionNumber].option[1];
  op3.textContent = questions[questionNumber].option[2];
  op4.textContent = questions[questionNumber].option[3];
}

function buttonclicked(event) {
  if (event.target.textContent == questions[questionNumber].correctans) {
    event.target.style.backgroundColor = "green";
    event.target.style.color = "white";
    score++;
  } else {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white";
  }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}
for (let i = 0; i < buttons.length; i++) {
  let clicked = buttons[i];
  clicked.addEventListener("click", buttonclicked);
}
function changeQues() {
  if (questionNumber < numOfQuestion - 1) {
    questionNumber++;
    displayQuestion();
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
      buttons[i].style.backgroundColor = "";
      buttons[i].style.color = "";
    }
  } 
  else 
  {
    submitTest();
  }
}

let nextQues = document.getElementById("nextQuestion");
nextQues.addEventListener("click", changeQues);

function restart() {
  nextQuestions.style.display = "none";
  frame.style.display = "none";
  result.style.display = "none";
  playAgain.style.display = "none";
  homePage.style.display = "block";
  score = 0;
  questionNumber = 0;
  progressMade.style.width = "0%";
  document.body.style.background = "";
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].style.backgroundColor = "";
    buttons[i].style.color = "";
  }
}
function submitTest() {
  frame.style.display = "none";
  nextQuestions.style.display = "none";
  result.style.display = "block";
  document.body.style.background = "#fff";
  finalScore.textContent ="Your Quiz Score is " + (score + " / " + numOfQuestion);
  playAgain.style.display = "block";
}

playAgain.addEventListener("click", restart);

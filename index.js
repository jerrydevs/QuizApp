// load questions in PouchDB object
let DATA = new PouchDB("questions");
DATA.bulkDocs([
  {
    _id : "1",
    question : "A perfectly competitive market has",
    answers : {
      A : "Firms that set their own prices.",
      B : "Only one seller.",
      C : "At least a few sellers.",
      D : "Many buyers and sellers."},
    correct : "D"
  },
  {
    _id : "2",
    question : "The law of demand states that an increase in the price of a good",
    answers : {
      A : "Increases the supply of that good.",
      B : "Decreases the quantity demanded for that good along its demand curve.",
      C : "Decreases the demand for that good.",
      D : "Increases the quantity supplied of that good along its supply curve."},
    correct : "A"
  },
  {
    _id : "3",
    question : "The law of supply states that an increase in the price of a good",
    answers : {
      A : "increases the quantity supplied of that good along its supply curve.",
      B : "increases the supply of that good.",
      C : "decreases the demand for that good.",
      D : "decreases the quantity demanded for that good along its demand curve."},
    correct : "A"
  },
  {
    _id : "4",
    question : "If an increase in consumer incomes leads to a decrease in the demand for camping equipment, then camping equipment is",
    answers : {
      A : "a normal good.",
      B : "an inferior good.",
      C : "a substitute good.",
      D : "a complementary good."},
    correct : "B"
  },
  {
    _id : "5",
    question : "That the supply curve for ice cream cones is upward sloping indicates that",
    answers : {
      A : "the marginal cost of providing ice cream cones increases as more cones are produced.",
      B : "as the price of ice cream cones increases, the production technology is upgraded.",
      C : "as the price increases, the opportunity cost of making ice cream cones decreases.",
      D : "all of the above."},
    correct : "A"
  },
  {
    _id : "6",
    question : "Which of the following shifts the demand for watches to the right?",
    answers : {
      A : "an increase in the price of watches",
      B : "a decrease in the price of watch batteries if watch batteries and watches are complements",
      C : "a decrease in consumer incomes if watches are a normal good",
      D : "a decrease in the price of watches"},
    correct : "B"
  },
  {
    _id : "7",
    question : "If the price of a good is above the equilibrium price,",
    answers : {
      A : "there is a surplus (i.e. an excess supply) and the price will rise.",
      B : "there is a shortage (i.e. an excess demand) and the price will fall.",
      C : "there is a shortage (i.e. an excess demand) and the price will rise.",
      D : "there is a surplus (i.e. an excess supply) and the price will fall."},
    correct : "D"
  },
  {
    _id : "8",
    question : "Suppose there is an increase in both the supply and demand for personal computers. In the market for personal computers, we would expect",
    answers : {
      A : "the equilibrium quantity to rise and the equilibrium price to rise.",
      B : "the equilibrium quantity to rise and the equilibrium price to fall.",
      C : "the change in the equilibrium quantity to be ambiguous and the equilibrium price to rise.",
      D : "the equilibrium quantity to rise and the change in the equilibrium price to be ambiguous."},
    correct : "D"
  },
  {
    _id : "9",
    question : "A decrease (leftward shift) in the supply for a good will tend to cause",
    answers : {
      A : "an increase in the equilibrium price and quantity.",
      B : "a decrease in the equilibrium price and an increase in the equilibrium quantity.",
      C : "a decrease in the equilibrium price and quantity.",
      D : "an increase in the equilibrium price and a decrease in the equilibrium quantity."},
    correct : "D"
  }, 
  {
    _id : "10",
    question : "Suppose both buyers and sellers of wheat expect the price of wheat to rise in the near future. What would we expect to happen to the equilibrium price and quantity in the market for wheat today?",
    answers : {
      A : "The impact on both price and quantity is ambiguous.",
      B : "Price will increase; quantity will increase.",
      C : "Price will increase; quantity is ambiguous.",
      D : "Price will increase; quantity will decrease."},
    correct : "C"
  }
]);

// initialize global variables that will be used
let questionIndex;
let playerScore;
let allQuestions = [];
loadQuestions();

// push each individual object in PouchDB object into array
function loadQuestions() {
  DATA.allDocs({include_docs: true}, function(err, doc) {
  doc.rows.forEach(function (row) {
    allQuestions.push(row.doc);
  })})
}


// clear and set up screen for next appropriate render step
function refreshScreen() {
  document.body.innerHTML = "";
  renderHeader();
  renderQuestionNum();
  renderScore();
}

// create top header of webpage
function renderHeader() {
  let header = `
  <header role="banner">
  <h1>Supply &amp; Demand Quiz</h1>
  </header>`;
  document.body.insertAdjacentHTML("afterbegin", header);
}

// create text player's current score 
function renderScore() {
  document.body.insertAdjacentHTML("beforeend", `<p id="scoreText">Score: ${playerScore}/10</p>`);
}

// create text showing current question number
function renderQuestionNum() {
  document.body.insertAdjacentHTML("beforeend", `<p id="questionNum">Question: ${questionIndex+1}/10</p>`);
}

// reset global variables and create quiz landing page
function initializeQuiz() {
  questionIndex = 0;
  playerScore = 0;
  document.body.innerHTML = "";
  renderHeader();
  const start = `
  <main role="main">
    <section role="region" id="start-screen">
      <p id="quizIntroText">Test your knowledge of supply and demand!</p>
      <p>Click down below when you're ready to start.</p>
    </section>
    <button onclick="startQuiz()" id="startBtn" class="btn">Start</button>
  </main>`;
  document.body.insertAdjacentHTML("beforeend", start);
}

// begins quiz by rendering first question
function startQuiz() {
  questionIndex = 0;
  playerScore = 0;
  renderQuestionScreen(questionIndex);
}

// get single question object from array
function getQuestionObj(index) {
  return allQuestions[index];
}

// get array of strings representing answer choices given a question object
function getAnswers(question) {
  return Object.values(question["answers"]);
}

// get string representing question to ask player given a question object
function getQuestionText(question) {
  return question["question"];
}

// get string representing correct answer of question given question object (either 'A', 'B', 'C', or 'D')
function getCorrectAnswer(question) {
  return question["correct"];
}

// returns template string containing the question text, all choices in a form of radio buttons, and a button to submit answer
function generateQuestion(index) {
  const question = getQuestionObj(index);
  const answers = getAnswers(question);
  return `
  <main role="main">
  <h3 class="questionText">${getQuestionText(question)}</h3>
  <form>
    <fieldset class="optionField">
      <div onclick="checkRadio('A')" class="labelChoiceContainer">
        <label for="A" class="answerLabel">A</label>
        <div class="customRadio"></div>
        <input type="radio" id="A" name="answerA" required value="A"><span class="answerChoice">${answers[0]}</span><br>
      </div>
      <div onclick="checkRadio('B')" class="labelChoiceContainer">
        <label for="B" class="answerLabel">B</label>
        <div class="customRadio"></div>
        <input type="radio" id="B" name="answerB" value="B"><span class="answerChoice">${answers[1]}</span><br>
      </div>
      <div onclick="checkRadio('C')" class="labelChoiceContainer">
        <label for="C" class="answerLabel">C</label>
        <div class="customRadio"></div>
        <input type="radio" id="C" name="answerC" value="C"><span class="answerChoice">${answers[2]}</span><br>
      </div>
      <div onclick="checkRadio('D')" class="labelChoiceContainer">
        <label for="D" class="answerLabel">D</label>
        <div class="customRadio"></div>
        <input type="radio" id="D" name="answerD" value="D"><span class="answerChoice">${answers[3]}</span><br>
      </div>
    </fieldset>
    <input type="submit" class="submitAnswerBtn btn" onclick="validateAnswer(event)">
  </form>
  </main>`;
}


function checkRadio(choice) {
  document.getElementById(String(choice)).checked= true;
}

// these two functions are used to enable and disable submit as necessary. Submit button is disabled after user submits their answer and re-enabled when user moves onto next question
function disableSubmit() {
  document.getElementsByClassName("submitAnswerBtn")[0].setAttribute("disabled", "true");
  document.getElementsByClassName("submitAnswerBtn")[0].setAttribute("style", "background-color:#2D0072");
}
function enableSubmit() {
  document.getElementsByClassName("submitAnswerBtn")[0].setAttribute("disabled", "false");
  document.getElementsByClassName("submitAnswerBtn")[0].setAttribute("style", "background-color:#EF02FF");
}

// get the id of the radio button that is checked
function getChoice() {
  if (document.querySelector("input[name='answer']:checked") !== null) {
    return document.querySelector("input[name='answer']:checked").getAttribute("id");
  }
}

// inserts HTML template string returned by generateQuestion
function renderQuestionScreen() {
  refreshScreen();
  document.body.insertAdjacentHTML("beforeend", generateQuestion(questionIndex));
}

// flow control determining depending on if user answer is correct or incorrect.
function validateAnswer(event) {
  event.preventDefault();
  disableSubmit();
  const playerChoice = getChoice();
  const question = getQuestionObj(questionIndex);
  questionIndex++;
  if (playerChoice === getCorrectAnswer(question)) {
    playerScore++;
    renderCorrect();
  } else {
    renderIncorrect(getCorrectAnswer(question));
  }
}

// create and insert template string for button moving onto next question in quiz
function nextQuestionButton() {
  const button = `<input type="button" onclick="nextQuestion()" class="nextQuestionBtn btn" value="Next">`;
  document.body.insertAdjacentHTML("beforeend", button);
}

// create message telling user their answer is correct
function renderCorrect() {
  const message = `
  <section id="questionMessage">
  <h2>Correct!</h2>
  </section>`;
  document.body.insertAdjacentHTML("beforeend", message)
  nextQuestionButton();
}

// create message telling user their answer is incorrect and inform them of the correct answer
function renderIncorrect(correctAnswer) {
  const message = `
  <section id="questionMessage">
  <h2>Sorry!</h2>
  <p>The correct answer was: ${correctAnswer}</p>
  </section>`;
  document.body.insertAdjacentHTML("beforeend", message);
  nextQuestionButton();
}

// called each time nextQuestionBtn is pressed (see function nextQuestionButton()). Ends quiz if finished all questions. Otherwise go to next question
function nextQuestion() {
  enableSubmit();
  if (questionIndex === allQuestions.length) {
    renderEndScreen();
  } else {
    renderQuestionScreen();
  }
}

// create message informing user end of quiz and create button to return to landing page
function renderEndScreen() {
  document.body.innerHTML = "";
  renderHeader();
  renderScore();
  let message = `
  <main role="main">
  <div id="endOfQuizText">
    <h4>That's the end of the quiz!</h4>
    <input type="button" class="btn" onclick="initializeQuiz()" value="Back to Home">
  </div>
  </main>`;
  document.body.insertAdjacentHTML("beforeend", message);
}

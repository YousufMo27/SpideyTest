const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-btns'));
const images = document.getElementById('imgs');


let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];
// let currentImage = {};
// let availableImages = [];
let B1 = 0;
let B2 = 0;
let B3 = 0;
let B4 = 0;

let questions = [
    {
        question: 'On a Friday Night, which of these movies are you watching?',
        choice1: 'Spider-Man',
        choice2: 'Blade Runner 2049',
        choice3: 'LeBron Comp',
        choice4: '',
        imageUrl: "images/2099608.jpg",
    },

    {
        question: 'What Movie',
        choice1: 'Af',
        choice2: 'Bf',
        choice3: 'Cv',
        choice4: 'Df',
        imageUrl: "https://mcdn.wallpapersafari.com/medium/76/19/XhIijY.jpg",
    },

    {
        question: 'What Mov',
        choice1: 'f',
        choice2: 'ff',
        choice3: 'Cd',
        choice4: 'cf',
        imageUrl: "images/imageFam.jpg",
    }


];

const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    const sum = B1 + B2 + B3 + B4;

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('Score', sum);
        //go to end
        return window.location.assign('/new.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    // const imageIndex = Math.floor(Math.random() * availableImages.length);
    currentQuestion = availableQuestions[questionIndex];
    document.getElementById("question-image").src = currentQuestion.imageUrl;
    // currentImage = availableImages[imageIndex];

    question.innerText = currentQuestion.question;
    // images.innerText = currentImage.images;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex,1);
    
    acceptingAnswers = true;

    
};

choices.forEach (choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        getNewQuestion();
    });
});

function B1Input () {
    B1+=1;
}

function B2Input () {
    B2+=2;
}

function B3Input () {
    B3+=3;
}

function B4Input () {
    B4+=4;
}


startGame();

 
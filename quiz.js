const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-btns'));
const images = document.getElementById('imgs');


let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];


let B1 = 0;
let B2 = 0;
let B3 = 0;
let B4 = 0;

let questions = [
    {
        question: 'What Marvel Hero is Your Favourite?',
        choice1: 'Spider-Man',
        choice2: 'Iron Man',
        choice3: 'Captain America',
        choice4: 'Hawkeye',
        imageUrl: "images/2099608.jpg",
    },

    {
        question: 'Which matters most to you?',
        choice1: 'Family',
        choice2: 'Safety',
        choice3: 'Friendship',
        choice4: 'Money',
        imageUrl: "https://mcdn.wallpapersafari.com/medium/76/19/XhIijY.jpg",
    },

    {
        question: 'Which artist is your favourite?',
        choice1: 'Drake',
        choice2: 'Tame Impala',
        choice3: 'Nirvana',
        choice4: 'Taylor Swift',
        imageUrl: "images/imageFam.jpg",
    },

    {
        question: 'Which superhero movie is your favourite?',
        choice1: 'Spider-Man Into The Spider-Verse',
        choice2: 'The Dark Knight',
        choice3: 'Black Panther',
        choice4: 'Deadpool',
        imageUrl: "images/imageFam.jpg",
    },

    {
        question: 'Which trait represents you the best?',
        choice1: 'Optimistic',
        choice2: 'Angry',
        choice3: 'Rebellious',
        choice4: 'Sad',
        imageUrl: "images/imageFam.jpg",
    },

    {
        question: 'What\'s your favourite school subject?',
        choice1: 'Art',
        choice2: 'Math',
        choice3: 'Science',
        choice4: 'English',
        imageUrl: "images/imageFam.jpg",
    },
    
    {
        question: 'Which is an ideal night to you?',
        choice1: 'Going out with family',
        choice2: 'Staying at home alone',
        choice3: 'Going for a walk on your own',
        choice4: 'Watching a movie with friends',
        imageUrl: "images/imageFam.jpg",
    },

    {
        question: 'What superpower would you choose?',
        choice1: 'Invisibility',
        choice2: 'Super Strength',
        choice3: 'Super Speed',
        choice4: 'Flight',
        imageUrl: "images/imageFam.jpg",
    },

    {
        question: 'You get to hang out with one spidey, which one?',
        choice1: 'Gwen',
        choice2: 'None, I work better alone',
        choice3: 'Miles',
        choice4: 'Miguel',
        imageUrl: "images/imageFam.jpg",
    },


    {
        question: 'Who\'s your Spider-Man?',
        choice1: 'Shameik Moore',
        choice2: 'Tobey Maguire',
        choice3: 'Andrew Garfield',
        choice4: 'Tom Holland',
        imageUrl: "images/imageFam.jpg",
    }

];

const MAX_QUESTIONS = 10;

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

    currentQuestion = availableQuestions[questionIndex];
    document.getElementById("question-image").src = currentQuestion.imageUrl;

    question.innerText = currentQuestion.question;

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
    B1+=2;
}

function B2Input () {
    B2+=3;
}

function B3Input () {
    B3+=5;
}

function B4Input () {
    B4+=7;
}


startGame();

 
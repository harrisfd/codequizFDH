const startButton = document.getElementById('start-btn')
const questtionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const ansswerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questtionContainerElement.classList.remove('hide')
    setNextQuestion()
}


function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

    function showQuestion(question) {
        questionElement.innerText = question.question
    }
}

funtion selectAnswer() {

}

const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false}
        ]
    }
]
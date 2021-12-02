const quizData = [
  {
    question: 'Q1: What is the National flower of Japan?',
    a: 'Rose',
    b: 'Cherry Blossom',
    c: 'Red Rose',
    d: 'Sunflower',
    Correct:'b'
  },{

  question: 'Q2: How many stripes are there on the US flag?',
  a: '14',
  b: '17',
  c: '13',
  d: '15',
  Correct:'c'
},{

  question: 'Q3: How many days does it take for the Earth to orbit the Sun? ',
  a: '365',
  b: '363',
  c: '362',
  d: '364',
  Correct:'a'
},{

  question: 'Q4: How many time zones are there in Russia?',
  a: '12',
  b: '11',
  c: '10',
  d: '22',
  Correct:'b'
},{

  question: 'Q5: How many keys does a classic piano have? ',
  a: '80',
  b: '82',
  c: '84',
  d: '88',
  Correct:'d'
},
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');


let questionCount = 0;
let score = 0;

const loadQuestion = () => {

  const questionList = quizData[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
}
loadQuestion();

const getCheckedAnswer = () => {
 let answer;

 answers.forEach((curAnsElem) => {
   if(curAnsElem.checked){
     answer = curAnsElem.id;
   }
 });

 return answer;

};

const deselectAll = () => {
  answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
const checkedAnswer = getCheckedAnswer();


if(checkedAnswer === quizData[questionCount].Correct){
score++;
};

questionCount++;

deselectAll();

if(questionCount < quizData.length){
  loadQuestion();
}else{

 showScore.innerHTML = `
 <h3> You scored = ${score}/${quizData.length}✌</h3>
 <button class="btn" onclick="location.reload()">Play Again</button>
 `;


 showScore.classList.remove('scoreArea');
}

});

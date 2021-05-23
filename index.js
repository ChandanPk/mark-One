//WeakZero MarkOne

const readlineSync = require('readline-sync');

var score = 0;

function ask(question){
  return readlineSync.question(question);
} 

const questions = [

  {question: "Is my name tanay (yes / no)? ", answer:"no"},
  {question: "Do i leave in the city Bnglore(yes / no)?", answer:"yes"},
  {question: "Do i got any sorta pets (yes / no)? ", answer:"no"},
  {question: "what about my girlFriends, do i have any (yes / no)? ", answer:"no"},
  {question: "I'm i vegeterian (yes / no)? ", answer:"no"},
  {question: "Topper in schools & colleges(yes / no)? ", answer:"no"},
  {question: "Do i extremly hate PUBG (yes / no)? ", answer:"yes"},
  {question: "You think i Love Cooking (yes / no)? ", answer:"yes"}

]

console.log("How well do you know me, lets see..")

for(var i=0; i < questions.length; i++){
  let userAnswer = ask(questions[i].question);

  if (userAnswer.toLowerCase() === questions[i].answer){
    score++
  }
}

console.log(`Your Score is: ${score}`)
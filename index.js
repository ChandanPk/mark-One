// WeakZero MarkOne

const readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question("Please enter your name: \n");


function ask(question){
  return readlineSync.question(question);
} 

const questions = [

  {question: "1. Is my name chandan (yes / no)? ", answer:"no"},

  {question: "2. Do i leave in the city Bnglore(yes / no)?", answer:"yes"},

  {question: "3. Do i got any sorta pets (yes / no)? ", answer:"no"},

  {question: "4. what about my girlFriends, do i have any (yes / no)? ", answer:"no"},

  {question: "5. I'm i vegeterian (yes / no)? ", answer:"no"},

  {question: "6. Topper in schools & colleges(yes / no)? ", answer:"no"},

  {question: "7. Do i extremly hate PUBG (yes / no)? ", answer:"yes"},

  {question: "8. You think i Love Cooking (yes / no)? ", answer:"yes"}

]

console.log("--> How well do you know me ?, let's find out. <--\n")

for(var i=0; i < questions.length; i++){
  let userAnswer = ask(questions[i].question);

  if (userAnswer.toLowerCase() === questions[i].answer){
    score++
  }
}

console.log(`${userName} your Score is: ${score} out of 8`)
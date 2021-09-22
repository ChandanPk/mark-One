// WeakZero MarkOne

const readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question("Please enter your name: \n");


function ask(question){
  return readlineSync.question(question);
} 

const questions = [

  {question: "1. Is my surname 'yadav' (yes / no)? : ", answer:"no"},

  {question: "2. Do i leave in the city Banglore(yes / no)?", answer:"yes"},

  {question: "3. Do i got any pets (yes / no)? ", answer:"no"},

  {question: "4. what about girlFriends, do i have any (yes / no)? ", answer:"no"},

  {question: "5. I'm i vegeterian (yes / no)? ", answer:"no"},

  {question: "6. Topper in schools & colleges(yes / no)? ", answer:"no"},

  {question: "7. Do i extremly hate PUBG (yes / no)? ", answer:"yes"},

  {question: "8. You think i Love Cooking (yes / no)? ", answer:"yes"}

]

console.log(`--> How well do you know me ${userName}?, let's find out. <--\n`)

for(var i=0; i < questions.length; i++){
  let userAnswer = ask(questions[i].question);

  if (userAnswer.toLowerCase() === questions[i].answer){
    score++
    console.log(`Yay!\nYour current score is: ${score}`);
  }
  else {
    console.log(`oops!\nYour current score is: ${score}`);
  }
}

console.log(`\n\n Your Final Score is: ${score} out of 8`)
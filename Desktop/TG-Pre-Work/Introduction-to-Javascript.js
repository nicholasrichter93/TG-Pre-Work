console.log("Banana Peppers!");
console.log("Hitchhikers Guide to the Universe");
console.log("Banana Peppers!");
console.log("Hitchhikers Guide to the Universe");
console.log('JavaScript');
console.log(33.7);
console.log(true);
console.log(null);
console.log("Banana Peppers!");
console.log("Hitchhikers Guide to the Universe");
console.log('JavaScript');
console.log(33.7);
console.log(true);
console.log(null);
console.log(3.5+24);
console.log(2018-1969);
console.log(65/240);
console.log(0.2708*100);
console.log('Teaching the world how to code'.length);
console.log('Codecademy'.toUpperCase());
console.log('    Remove whitespace   '.trim()); 
console.log(Math.random()*100);
console.log(Math.floor(Math.random()*100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));
// Opening line
console.log('It was love at first sight.');

/*console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');*/

// Beginning of Variables lesson.

// This line of code sets the variable location to the string New York City
const location = 'New York City';

// This line of code sets the variable latitude to the number 40.7
let latitude = 40.7;

// This line of code sets the variable inNorthernHemisphere to true
let inNorthernHemisphere = true;
console.log(location);
console.log(latitude);
console.log(inNorthernHemisphere);
const entree = 'Enchiladas';
const price = 12;
console.log(entree);
console.log(price);
entree = 'Tacos';
let changeMe = true;
changeMe=false;
console.log(changeMe);
let notDefined;
console.log(notDefined);
let valueless;
console.log(valueless);
let molecule = 16;
let particle = 18;
let assay = 3;

// Add and assign to molecule below
molecule +=16;

// Multiply and assign to particle below
particle*=6.02;

// Increment assay by 1
assay++;
let favoriteAnimal='Albatross';
console.log('My favorite animal: '+ favoriteAnimal);
let myName = 'Nick';
let myCity = 'Boulder';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

//Beginning of Controls lesson. 

let userName = 'Nick';
let knowsJavaScript = true;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}

//Creates a variable isSoccerFan and adds an if/else command. 

let isSoccerFan = true;

if(isSoccerFan = true){
  console.log('Goal!');
} 
else{
  console.log('No goal!')
}

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'A';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'A';

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

let hungerLevel = 10;

if(hungerLevel > 7){console.log('Time to eat!')} else {console.log('We can eat later!')}

let moonPhase = 'full';
if(moonPhase==='full'){
  console.log('Howl!')
}else {console.log('I swear I am not a werewolf.')}

let moonPhase = 'solar eclipse';
if(moonPhase==='full'){
  console.log('Howl!')
} else if (moonPhase === 'mostly full'){
          console.log('Arms and legs are getting hairier.')
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet.')
} else {console.log('Invalid moon phase.')}

let moonPhase = 'full';
let isFoggyNight = false;
if(moonPhase==='full' || isFoggyNight ===true){
  console.log('Howl!')
} else if (moonPhase === 'mostly full'){
          console.log('Arms and legs are getting hairier.')
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet.')
} else {console.log('Invalid moon phase.')}

let moonPhase = 'full';

switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier.');
    break;
  case 'mostly new':
    console.log('Back on two feet.');
    break;
  default: 
    console.log('Invalid moon phase.');
    break;
}

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//Beginning of Functions lesson. 

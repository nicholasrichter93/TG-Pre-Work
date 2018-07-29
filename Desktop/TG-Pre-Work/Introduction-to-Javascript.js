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

let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.

const takeOrder = () => {
    console.log('Order: pizza');
  };
  
  takeOrder();

  const takeOrder = (topping) => {
    console.log('Order: pizza');
    console.log('Order: pizza topped with' + topping);
  };
  
  takeOrder('mushrooms');

  let orderCount = 0;
const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
}

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');
console.log(getSubTotal(orderCount));

let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (itemCount) => {
  return getSubTotal(itemCount) * 0.06;
};

const getTotal = (itemCount) => {
  return getSubTotal(itemCount) + getTax(itemCount);
};

console.log(getTotal(orderCount));

function isGreaterThan (numberOne, numberTwo) {
    if (numberOne > numberTwo) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(isGreaterThan(5,9));

  const isGreaterThan =(numberOne, numberTwo) =>{
    if(numberOne > numberTwo){
      return true;
    } else {
      return false;
    }
  }
  
  isGreaterThan(4, 8)

  const volumeOfSphere = diameter => 
(1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

//Beginning of Scope lesson. 

const satellite ='The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const myNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());

const satellite ='The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
console.log(stars);

const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    console.log(lightWaves);
  };
  
  visibleLightWaves();
  console.log(lightWaves);

  const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
    console.log(lightWaves);
  };
  
  visibleLightWaves();

  const starCount = () => {
    let i = 5;
    console.log(i);
    for (let i = 0; i < 12; i++){
      console.log(i);
    }
  };
  
  starCount();
  console.log(i);

  let bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];

console.log(bucketList);

let newYearsResolutions = ['Call my mom more.', 'Eat well.','Make new frieds.'];

console.log(newYearsResolutions);

let newYearsResolutions = ['Call my mom more.', 'Eat well.','Make new frieds.'];

console.log(newYearsResolutions);

let listItem = newYearsResolutions[0];
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);

let newYearsResolutions = ['Call my mom more.', 'Eat well.','Make new frieds.'];

console.log(newYearsResolutions);

let listItem = newYearsResolutions[0];
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);

newYearsResolutions[1] = 'Learn a new language';

let newYearsResolutions = ['Call my mom more.', 'Eat well.','Make new frieds.'];

console.log(newYearsResolutions);

let listItem = newYearsResolutions[0];
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);

newYearsResolutions[1] = 'Learn a new language';

console.log(newYearsResolutions.length);

let newYearsResolutions = ['Call my mom more.', 'Eat well.','Make new frieds.'];

console.log(newYearsResolutions);

let listItem = newYearsResolutions[0];
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);

newYearsResolutions[1] = 'Learn a new language';

console.log(newYearsResolutions.length);

newYearsResolutions.push('Travel!', 'Floss!');
console.log(newYearsResolutions);

newYearsResolutions.pop();

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Franks Red Hot');

condiments = ['Ketchup'];

console.log(condiments);

utensils.pop();

utensils = ['Spork'];

let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

for (let i = 0; i<cookies.length; i++) {
  console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
}

let vacationSpots = ['Thailand', 'Australia', 'Dubai' ]

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

let vacationSpots = ['Thailand', 'Australia', 'Dubai' ]

for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex])
};

let vacationSpots = ['Thailand', 'Australia', 'Dubai' ]

for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0 ; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex])
};

let myPlaces = ['Thailand', 'Australia', 'Dubai'];

let friendPlaces = ['China', 'Japan', 'Dubai'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
		if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(friendPlaces[friendPlacesIndex]);
    }
  }
}

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() *4)];
}

console.log('You found a spade!');

let flag = true;
let counter = 0;
while(flag === true){
  console.log(counter);
  counter+=1;
  if (counter === 37){
    break;
  }
}

let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(function(artist) {
  console.log(artist + ' is one of my favorite artists.');
});

let numbers = [1, 2, 3, 4, 5];

let squareNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squareNumbers);

let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

let onlyNumbers = things.filter(function(thing) {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach(fruitItem => {
  console.log('I want to eat a ' + fruitItem);
});

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

let secretMessage = animals.map(animal => animal.charAt(0));

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

let smallNumbers = bigNumbers.map(num => num/100);

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter(number => 
   number < 250);

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7); 
  
let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array

let interestingWords = words.filter(word => word.length > 5);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word =>  word.length > 5      ));

let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

//Beginning of Objects lesson. 

let person = {
    name: 'Nick',
    age: 24,
  };

  let person = {
    name: 'Nick',
    age: 24,
  };
  
  console.log(person.name);
  console.log(person.age);

  let person = {
    name: 'Nick',
    age: 24,
  };
  
  console.log(person['name']);
  console.log(person['age']);

  let person = {
    name: 'Nick',
    age: 24,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
  };
  
  console.log(person['name']);
  console.log(person['age']);
  
  let day = 'Sunday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person[alarm]);

  let person = {
    name: 'Nick',
    age: 24,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
  };
  
  person.hobbies = ['Rock Climbing','Cooking']
  
  console.log(person['name']);
  console.log(person['age']);
  console.log(person.hobbies);
  
  let day = 'Sunday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person[alarm]);

  let person = {
    name: 'Nick',
    age: 24,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
  };
  
  person.hobbies = ['Rock Climbing','Cooking'];
  person.hobbies = ['Rock Climbing'];
  
  console.log(person['name']);
  console.log(person['age']);
  console.log(person.hobbies);
  
  let day = 'Sunday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person[alarm]);

  let person = {
    name: 'Nick',
    age: 24,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    sayHello: () => {
      return 'Hello, there!'
    }
  };
  
  person.hobbies = ['Rock Climbing','Cooking'];
  person.hobbies = ['Rock Climbing'];
  
  console.log(person['name']);
  console.log(person['age']);
  console.log(person.hobbies);
  console.log(person.sayHello());
  
  let day = 'Sunday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person[alarm]);

  let person = {
    name: 'Nick',
    age: 24,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    sayHello: () => {
      return 'Hello, there!'
    },
    sayGoodbye() {
    return 'Goodbye!'
  }
  };
  
  person.hobbies = ['Rock Climbing','Cooking'];
  person.hobbies = ['Rock Climbing'];
  
  console.log(person['name']);
  console.log(person['age']);
  console.log(person.hobbies);
  console.log(person.sayHello());
  
  let day = 'Sunday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person[alarm]);

  let person = {
    name: 'Nick',
    age: 24,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    
    sayHello: function() {
      return `Hello, my name is ${this.name}`;
    },
    
    sayGoodbye() {
      return 'Goodbye!';
    }
    
  };
  
  console.log(person.sayHello());
  
  person.hobbies = ['Rock Climbing', 'Cooking'];
  person.hobbies = ['Rock Climbing'];
  console.log(person.hobbies);
  
  
  console.log(person['name']);
  console.log(person['age']);
  
  let day = 'Tuesday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person[alarm]);
//forEach y callback functions
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(printFruit => console.log('I want to eat a '+ printFruit));


//map Method (returns a array)
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animals => {
  return animals[0];
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumbers => {
  return bigNumbers / 100;
});


// filter method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomN => {
  return randomN < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
});


//practice iterators
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

//project
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
let con1 = 0; 
let con2 = 0; 
let con3 = 0;
let conSentences = 0;

let betterWords = storyWords.filter(words => {
  if(!words.includes(unnecessaryWords[0]) || !words.includes(unnecessaryWords[1]) || !words.includes(unnecessaryWords[2])){
    return words;
  }
});

storyWords.forEach(words => {
  if(words.includes(overusedWords[0])){
    con1 += 1;
  }
  else if(words.includes(overusedWords[1])){
    con2 += 1;
  }
  else if(words.includes(overusedWords[2])){
    con3 += 1;
  }
});

storyWords.forEach(words => {
  if(words[words.length - 1] === '.' || words[words.length - 1] === '!'){
    conSentences += 1;
  }
});

const prettyMessage = (wordCount, sentenceCount, overusedCount1, overusedCount2, overusedCount3) => {
  return `The total words are: ${wordCount}, the number of sentences are: ${sentenceCount} and the count of the overused words are: really with ${overusedCount1}, very with ${overusedCount2} and basically with ${overusedCount3}`;
};

console.log(prettyMessage(storyWords.length, conSentences, con1, con2, con3));

console.log(betterWords.join(' '));

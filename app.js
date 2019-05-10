const flashcards = [
  // {
  //   cardTitle: `array.indexOf()`,
  //   setup: [`const fruit = ['apple', 'orange', 'pineapple', 'orange'];`],
  //   example: [
  //     {
  //       call: `console.log(fruit.indexOf('orange'));`,
  //       returns: ` //  1`
  //     },
  //     {
  //       call: `console.log(fruit.indexOf('banana'));`,
  //       returns: ` // -1`
  //     },
  //     {
  //       call: `console.log(fruit.indexOf('orange', 2));`,
  //       returns: ` //  3`
  //     }
  //   ],
  //   definition: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.",
  //   source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
  //   wasShown: false
  // },
  {
    cardTitle: `array.indexOf()`,
    example: [`const fruit = ['apple', 'orange', 'pineapple', 'orange'];`, `console.log(fruit.indexOf('orange')); console.log(fruit.indexOf('banana')); console.log(fruit.indexOf('orange', 2));`],
    returns: [`// 1`, `// -1`, `// 3`],
    definition: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
    wasShown: false
  },
  {
    cardTitle: `array.includes()`,
    example: [`const dogs = ['Rosie', 'Strudel', 'Border Collie', 'Pumpkin']`, `console.log(dogs.includes('Rosie'));
    console.log(dogs.includes('Whippet'));`],
    returns: [`// true`, `// false`],
    definition: "The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",
    wasShown: false
  },
  {
    cardTitle: `array.findIndex()`,
    example: [`const nums = [2, 12, 4, 45]`, `console.log(nums.findIndex(x => x > 10));`],
    returns: [`// 1`],
    definition: "The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.",
    source: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex`,
    wasShown: false
  },
  {
    cardTitle: `array.some()`,
    example: [`const nums = [1, 2, 3, 4, 5, 8]`, `console.log(nums.some(x => x >= 7)); console.log(nums.some(x => x >= 9));`],
    returns: [`// true`, `// false`],
    definition:`The some() method tests whether at least one element in the array passes the test implemented by the provided function. Note: This method returns false for any condition put on an empty array.`,
    source: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some`,
    wasShown: false
  }
  // ,
  // {
  //   cardTitle: `array.filter()`,
  //   example: [``, ``],
  //   returns: [``],
  //   definition:`The filter() method creates a new array with all elements that pass the test implemented by the provided function.`,
  //   source: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter`,
  //   wasShown: false
  // },
  // {
  //   cardTitle: ``,
  //   example: [``, ``],
  //   returns: [``],
  //   definition:``,
  //   source: ``,
  //   wasShown: false
  // }
];

const $cardContent = $('.card-content');
const $cardTitle = $('.c-title');
const $codeBlock = $('.code');
const $backCard = $('.back-card');
const $flipBtnDiv = $('.flip-btn-div');
const $flipBtn = $('.flip-btn');
const $nextBtn = $('.next-btn');

const checkIfShown = num => flashcards[num].wasShown;
const randomCard = () => Math.floor(Math.random() * Math.floor(flashcards.length));

// function that makes sure there unseen flashcards
// then generates a random number
// If the card corresponding to that random number has been used in this round,
// it generates another random number and checks again.
function getRandomCard() {
  if (flashcards.some(el => el["wasShown"] == false)) {
    let random = randomCard();
    while (checkIfShown(random)) {
      random = randomCard();
    }
  return random;
  } else {
    //if all cards have been shown, then reset "wasShown" property to false for all flashcard objects & return a random number
    flashcards.forEach(el => el.wasShown = false);
    return randomCard();
  }
}


function printCard(cardNum) {
  $cardTitle.text(flashcards[cardNum].cardTitle);
  for (let i = 0; i < flashcards[cardNum].example.length; i++) {
    $codeBlock.append(`<p class="example">${flashcards[cardNum].example[i]}</p>`);
  }
  for (let i = 0; i < flashcards[cardNum].returns.length; i++) {
    $codeBlock.append(`<p class="answer">${flashcards[cardNum].returns[i]}</p>`);
  }
  $backCard.append(`<p class="definition">${flashcards[cardNum].definition}</p>`);
  flashcards[cardNum].wasShown = true;
  $('.answer').hide();
  $('.definition').hide();
}

printCard(getRandomCard());

$flipBtn.click((event) => {
  $(event.target).hide();
  $('.answer').show();
  $('.definition').show();
});

$nextBtn.click(() => {
  $('.example').remove();
  $('.answer').remove();
  $('.definition').remove();
  printCard(getRandomCard());
  $flipBtn.show();
});

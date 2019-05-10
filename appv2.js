const flashcards = [
  {
    cardTitle: `array.indexOf()`,
    setup: [`const fruit = ['apple', 'orange', 'pineapple', 'orange'];`],
    examples: [
      {
        call: `console.log(fruit.indexOf('orange'));`,
        returns: `  //  1`
      },
      {
        call: `console.log(fruit.indexOf('banana'));`,
        returns: `  // -1`
      },
      {
        call: `console.log(fruit.indexOf('orange', 2));`,
        returns: `  //  3`
      }
    ],
    definition: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. ",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
    wasShown: false
  },
  {
    cardTitle: `array.includes()`,
    setup: [`const dogs = ['Rosie', 'Strudel', 'Border Collie', 'Pumpkin']`],
    examples: [
      {
        call: `console.log(dogs.includes('Rosie'));`,
        returns: `  //  true`
      },
      {
        call: `console.log(dogs.includes('Whippet'));`,
        returns: `  //  false`
      }
    ],
    definition: "The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. ",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",
    wasShown: false
  },
  {
    cardTitle: `array.findIndex()`,
    setup: [`const nums = [2, 12, 4, 45];`],
    examples: [
      {
        call: `console.log(nums.findIndex(x => x > 10));`,
        returns: `  //  1`
      },
      {
        call: `console.log(nums.findIndex(x => x < 2));`,
        returns: `  //  -1`
      }
    ],
    definition: "The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test. ",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex",
    wasShown: false
  },
  {
    cardTitle: `array.some()`,
    setup: [`const nums = [1, 2, 3, 4, 5, 8];`],
    examples: [
      {
        call: `console.log(nums.some(x => x >= 7));`,
        returns: ` //  true`
      },
      {
        call: `console.log(nums.some(x => x >= 9));`,
        returns: ` //  false`
      }
    ],
    definition: "The some() method tests whether at least one element in the array passes the test implemented by the provided function. Note: This method returns false for any condition put on an empty array. ",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
    wasShown: false
  },
  {
    cardTitle: `array.flat()`,
    setup: [`const arr1 = [1, 2, [3, 4, [5, 6]]];`],
    examples: [
      {
        call: `console.log(arr1.flat());`,
        returns: `  //  [1, 2, 3, 4, [5, 6]]`
      },
      {
        call: `console.log(arr1.flat(2));`,
        returns: `  //  [1, 2, 3, 4, 5, 6]`
      }
    ],
    definition: "The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. The depth level specifies how deep a nested array structure should be flattened. Defaults to 1. The flat method removes empty slots in arrays. ",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat",
    wasShown: false
  },
  {
    cardTitle: `array.concat()`,
    setup: [`const array1 = ['a', 'b', 'c'];`, `const array2 = ['d', 'e', 'f']`],
    examples: [
      {
        call: `console.log(array1.concat(array2))`,
        returns: `  // ['a', 'b', 'c', 'd', 'e', 'f'] `
      }
    ],
    definition: "The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. ",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat",
    wasShown: false
  },
  {
    cardTitle: `array.join()`,
    setup: [`const elements = ['Fire', 'Wind', 'Rain'];`],
    examples: [
      {
        call: `console.log(elements.join());`,
        returns: `  //  'Fire,Wind,Rain'`
      },
      {
        call: `console.log(elements.join(''))`,
        returns: `  //  'FireWindRain'`
      },
      {
        call: `console.log(elements.join(' '))`,
        returns: `  //  'Fire Wind Rain'`
      }
    ],
    definition: "The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. ",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
    wasShown: false
  },
  {
    cardTitle: `Bracket Notation`,
    setup: [`let obj = {
  cat: 'meow',
  dog: 'woof'
};`, `let sound = obj['cat'];`, `let dog = 'cat'`],
    examples: [
      {
        call: `console.log(sound);`,
        returns: `  //  meow`
      },
      {
        call: `console.log(obj[dog])`,
        returns: `  //  meow`
      },
      {
        call: `console.log(obj['dog'])`,
        returns: `  //  woof`
      }
    ],
    definition: "You can access properties on an object by specifying the name of the object followed by the property name in brackets. When working with bracket notation, property identifiers only have to be a String. They can include any characters, including spaces. Variables may also be used as long as the variable resolves to a String. ",
    source: "https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781",
    wasShown: false
  },
  {
    cardTitle: `Dot Notation`,
    setup: [`let obj = {
  cat: 'meow',
  dog: 'woof',
  13: 'spooky sounds'
};`],
    examples: [
      {
        call: `console.log(obj.cat);`,
        returns: `  //  meow`
      },
      {
        call: `console.log(obj.13);`,
        returns: `  // Uncaught SyntaxError: missing ) after argument list`
      },
      {
        call: `console.log(obj['13']);`,
        returns: `  //  spooky sounds`
      }
    ],
    definition: "Dot notation is the most frequently used way to access the property of an object. You can access properties on an object by specifying the name of the object, followed by a dot (period) followed by the property name. When working with dot notation, property identifiers can only be alphanumeric (and _ and $). Property identifiers can’t start with a number and can't contain variables. ",
    source: "https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781",
    wasShown: false
  }
  // {
  //   cardTitle: ``,
  //   setup: [``],
  //   examples: [
  //     {
  //       call: ``,
  //       returns: ``
  //     },
  //     {
  //       call: ``,
  //       returns: ``
  //     },
  //     {
  //       call: ``,
  //       returns: ``
  //     }
  //   ],
  //   definition: "",
  //   source: "",
  //   wasShown: false
  // }
];

let currentCardNumber = 0;
let cardDiv = document.querySelector('.card');
let cardContent = document.querySelector('.card-content');
let cardTitle = document.querySelector('.c-title');
let codeBlock = document.querySelector('.code');
let flipBtnDiv = document.querySelector('.flip-btn-div');
let nextBtnDiv = document.querySelector('.next-btn-div');

const checkIfShown = num => flashcards[num].wasShown;
const randomCard = () => Math.floor(Math.random() * Math.floor(flashcards.length));

// function that makes sure there still unseen flashcards
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

function printCard(number) {
  let thisCard = flashcards[number];
  let setupCodeDiv = document.createElement('div');
  let numberOfExamples = thisCard.examples.length;
  let codeExampleDiv = document.createElement('div');
  setupCodeDiv.setAttribute('class', 'setup-div');
  thisCard.setup.forEach((el) => {
    let setupCode = document.createElement('p');
    setupCode.textContent = el;
    setupCode.setAttribute('class', 'setup');
    setupCodeDiv.append(setupCode);
  })
  for (let i = 0; i < numberOfExamples; i ++) {
    let callPara = document.createElement('p');
    let returnSpan = document.createElement('span');
    returnSpan.classList.add('return-span');
    returnSpan.textContent = thisCard.examples[i].returns;
    callPara.textContent = thisCard.examples[i].call;
    callPara.append(returnSpan);
    codeExampleDiv.append(callPara);
  }
  codeExampleDiv.setAttribute('class', 'example-div');
  cardTitle.textContent = flashcards[number].cardTitle;
  codeBlock.append(setupCodeDiv);
  codeBlock.append(codeExampleDiv);
  currentCardNumber = number;
}

printCard(getRandomCard());

flipBtnDiv.addEventListener('click', (event) => {
    let showSpan = document.querySelectorAll('.return-span');
    let thisCard = flashcards[currentCardNumber];
    let backCard = document.querySelector('.back-card');
    let definition = document.createElement('p');
    let sourceLink = document.createElement('a');
    let flipBtn = document.querySelector('.flip-btn');
    let flipBtnDiv = flipBtn.parentNode;
    definition.textContent = thisCard.definition;
    definition.setAttribute('class', 'definition');
    sourceLink.setAttribute('target', '_blank');
    sourceLink.setAttribute('href', thisCard.source);
    sourceLink.textContent = "Read more.";
    definition.append(sourceLink);
    backCard.append(definition);
    showSpan.forEach((el) => el.style.opacity = '1');
    flipBtnDiv.removeChild(flipBtn);
    thisCard.wasShown = true;
});

nextBtnDiv.addEventListener('click', (event) => {
  // let flipBtnDiv = document.querySelector('.flip-btn-div');
  let flipBtn = document.createElement('button');
  let setupToRemove = document.querySelector('.setup-div');
  let codeDivToRemove = document.querySelector('.example-div');
  let block = setupToRemove.parentNode;
  let defToRemove = document.querySelector('.definition');
  let parentBlock = defToRemove.parentNode;
  flipBtn.textContent = "Flip";
  flipBtn.classList.add('flip-btn', 'btn');
  flipBtnDiv.append(flipBtn);
  block.removeChild(setupToRemove);
  block.removeChild(codeDivToRemove);
  parentBlock.removeChild(defToRemove);
  printCard(getRandomCard());
});

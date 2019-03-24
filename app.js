const flashcards = [
  {
    cardTitle: "array.indexOf()",
    example: [`const fruit = ['apple', 'orange', 'pineapple'];`, `console.log(fruit.indexOf('orange')); console.log(fruit.indexOf('banana'));`],
    returns: [`// 1`, `// -1`],
    definition: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"
  },
  {
    cardTitle: "array.includes()",
    example: [`const dogs = ['Rosie', 'Strudel', 'Border Collie', 'Pumpkin']`, `console.log(dogs.includes('Rosie'));
    console.log(dogs.includes('Whippet'));`],
    returns: [`// true`, `// false`],
    definition: "The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
  }
];

let cardNum = 0;

const $cardContent = $('.card-content');
const $cardTitle = $('.c-title');
const $codeBlock = $('.code');
const $backCard = $('.back-card');
const $flipBtnDiv = $('.flip-btn-div');
const $flipBtn = $('.flip-btn');
const $nextBtn = $('.next-btn');

function genCard(cardNum) {
  $cardTitle.text(flashcards[cardNum].cardTitle);
  for (let i = 0; i < flashcards[cardNum].example.length; i++) {
    $codeBlock.append(`<p class="example">${flashcards[cardNum].example[i]}</p>`);
  }
  for (let i = 0; i < flashcards[cardNum].returns.length; i++) {
    $codeBlock.append(`<p class="answer">${flashcards[cardNum].returns[i]}</p>`);
  }
  $backCard.append(`<p class="definition">${flashcards[cardNum].definition}</p>`);
  $('.answer').hide();
  $('.definition').hide();
}

genCard(cardNum);

$flipBtn.click((event) => {
  $(event.target).hide();
  $('.answer').show();
  $('.definition').show();
});

$nextBtn.click(() => {
  cardNum ++;
  $('.example').remove();
  $('.answer').remove();
  $('.definition').remove();
  genCard(cardNum);
  $flipBtn.show();
});



// function genBackCard(cardNum) {
//   let codeReturnsHtml = '';
//   for (let i = 0; flashcards[cardNum].returns.length; i++) {
//     codeReturnsHtml += `<p class="answer">${flashcards[cardNum].returns[i]}</p>`);
//   }
//   return $codeBlock.append(codeReturnsHtml);
//   // $backCard.append(`<p class="definition">${flashcards[cardNum].definition}>/p>`);
// }

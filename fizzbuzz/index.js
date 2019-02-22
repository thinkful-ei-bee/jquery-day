'use strict';

function fizzBuzz(num) {
  if (num % 15 === 0) {
    return 'fizzbuzz';
  }
  if (num % 3 === 0) {
    return 'fizz';
  }
  if (num % 5 === 0) {
    return 'buzz';
  }
  return num;
}

function fizzBuzzTo(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(fizzBuzz(i));
  }
  return arr;
}

function createDiv(v) {
  let fizzClass = '';
  if (typeof v === 'string') {
    fizzClass = v;
  }
  return `
    <div class="fizz-buzz-item ${fizzClass}">
      <span>${v}</span>
    </div>`;
}

function main() {
  let yourNum = null;
  $('form').on('submit', function(event) {
    event.preventDefault();
    yourNum = $('#number-choice').val();
    const divArray = fizzBuzzTo(yourNum).map(createDiv);
    let htmlStr = '';

    for (let i = 0; i < divArray.length; i++) {
      htmlStr += divArray[i];
    }
    $('.js-results').html(htmlStr);
  });
}

$(main);

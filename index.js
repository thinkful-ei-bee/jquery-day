'use strict';

function main() {
  $('.thumbnail').on('click', function(event) {
    $('.hero img').attr('src', $(this).find('img').attr('src'));
    $('.hero img').attr('alt', $(this).find('img').attr('alt'));
  });
}

$(main);


'use strict';

function main() {
  $('.thumbnail').on('click', function(event) {
    $(event.target).remove();
  });
}

$(main);
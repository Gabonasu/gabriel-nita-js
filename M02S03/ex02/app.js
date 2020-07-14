$('<p>', {
  class: 'msg',
  text: 'Acesta este un mesaj de eroare!',
})
  .appendTo($('body'))
  .addClass('error');

  let errorNumber = 1;
  let supElement = $(`<sup>${errorNumber}</sup>`).prependTo('.error');

  supElement.addClass('test');
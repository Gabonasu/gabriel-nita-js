$(document).ready(() => {
  $('#dialog').dialog({
    autoOpen: false,
    show: 1000,
    hide: 1000,
  });

  window.alert = (message) => {
    $('#dialog')
    .find('.dialog-text')
    .text(message)
    .end()
    .dialog('option', 'title', message)
    .dialog('open');
  };

  $('#dialog-open').on('click', () => {
    alert('Hello World!');
  });

  $('#dialog-close').on('click', () => {
    $('#dialog').dialog('close');
  });
});
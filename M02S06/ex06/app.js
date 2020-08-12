$(document).ready(() => {
  buildPersonList();

  let $form = $('form');
  let requestBody = {
    person: {
      name: '',
      skills: [],
    },
  };

  $form.find('.addSkill').on('click', (event) => {
    let $button = $(event.currentTarget);
    let $buttonParent = $button.parent();
    let inputValue = $button.prev().val();

    if (inputValue.length < 1) {
      return;
    }

    requestBody.person.skills.push(inputValue);

    let $ul = $button.parents('form').find('ul');

    if ($ul.length === 0) {
      $ul = $('<ul>');
    }

    $('<li>', {
      text: inputValue,
    }).appendTo($ul);

    $buttonParent.after($ul);

    $button.prev().val('');
  });

  $form.on('submit', function (event) {
    event.preventDefault();
    let $form = $(event.currentTarget);
    let $nameInput = $form.find('input[name="name"]');
    let inputValue = $nameInput.val();

    if (inputValue.length < 1) {
      return;
    }

    requestBody.person.name = inputValue;
    // remove /server folder from this repo
    // use npm i -g static-server
    // cd /test
    // static-server
    createPerson(requestBody).done((response) => {
      if (response.success === true) {
        buildPersonList();
        $form.find('ul').remove();
      }
    });
  });

  function createPerson(requestJson) {
    let personRequest = $.post('http://localhost:8080/persons', requestJson);

    return personRequest;
  }

  function buildPersonList(ulClassName = 'person-list') {
    let personRequest = $.get('http://localhost:8080/persons').done((data) => {
      $(`.${ulClassName}`).remove();

      let $ul = $('<ul>', {
        class: ulClassName,
      });

      data.persons.forEach((person) => {
        let $li = $('<li>', {
          text: person.name,
        });

        let $skillsUl = $('<ul>');
        person.skills.forEach((skill) => {
          let $skillLi = $('<li>', {
            text: skill,
          });

          $skillLi.appendTo($skillsUl);
        });

        $li.append($skillsUl).appendTo($ul);
      });

      $('body').append($ul);
    });
  }
});

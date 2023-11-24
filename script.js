$(document).ready(function () {

  
    $('form').on('submit', function (e) {
      e.preventDefault();
      
      const novaTarefa = $('#nova-tarefa').val();

      const novaLinha = $('<li></li>')

      $(`<input type="checkbox" value="${novaTarefa}"/>
      <label for="${novaTarefa}">${novaTarefa}</label>`).appendTo(novaLinha);


      $(`${novaTarefa}`).appendTo(novaLinha);

        $(novaLinha).appendTo('ul');
      $('#nova-tarefa').val(' ');
    
    })
  });
  
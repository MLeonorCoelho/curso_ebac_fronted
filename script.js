$(document).ready(function () {

  
    $('form').on('submit', function (e) {
      e.preventDefault();
      
      const novaTarefa = $('#nova-tarefa').val();

      const novaLinha = $('<li></li>')

      $(`<p>${novaTarefa}</p>`).appendTo(novaLinha);


      $(`${novaTarefa}`).appendTo(novaLinha);

        $(novaLinha).appendTo('ul');
      $('#nova-tarefa').val(' ');


      $('li').click(function() {
        $(this).addClass('selected');
    });
    
    })
});


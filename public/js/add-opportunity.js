$(document).ready(function() {

  $('#submitOpportunity').on('click', function (event) {
    event.preventDefault();
    var newOp = {
      name: $('#name').val().trim(),
      description: $('#description').val().trim(),
      category: $('#category').val().trim(),
      deadline: $('#deadline').val().trim()
    };

    $.ajax('/api/opportunities', {
      type: 'POST',
      data: newOp
    }).then(
      function () {
        console.log('posted opportunity', newOp);
        window.location.replace('/');
      }
    );
  });

});
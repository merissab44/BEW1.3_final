$(document).ready(function() {
  $('.favorite').submit(function(e) {
    e.preventDefault();

    const postId = $(this).data('id');
    $.ajax({
      type: 'PUT',
      url: 'posts/' + postId + '/favorite',
      success: function(data) {
        console.log('you favorited this post!');
      },
      error: function(err) {
        console.log(err.messsage);
      }
    });
  });
});
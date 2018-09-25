// close 'Create new playlist' Modal
$('.closeModal').click(function() {
  $('.createPlaylistForm').fadeOut('high', function() {
  });
})
// close 'Songs List' Modal
$('.closeModal').click(function() {
  $('.createSongsList').fadeOut('high', function() {
  });
})

// close 'edit playlist' Modal
$('.closeModal').click(function() {
  $('.editPlaylistForm').fadeOut('high', function() {
  });
})
// close 'edit Songs List' Modal
$('.closeModal').click(function() {
  $('.editSongsList').fadeOut('high', function() {
  });
})


$('#backPlaylist').click(function () {
  $('.createSongsList').fadeOut('fast', function() {});
  $('.createPlaylistForm').fadeIn('high', function() {});
})

$('#backPlaylist').click(function () {
  $('.editSongsList').fadeOut('fast', function() {});
  $('editPlaylistForm').fadeIn('high', function() {});
})

// HidePlayer
$('.player').hide();
$('#hidePlayer').click(function () {
  $('.player').fadeOut('fast', function() {});
  $('#showPlayer').fadeIn('fast', function() {});
  $('#showPlayer').click(function () {
    $('#showPlayer').fadeOut('fast', function() {});
    $('.player').fadeIn('fast', function() {});

  })
})

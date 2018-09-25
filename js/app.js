var module = angular.module('app', []);

module.service('PlaylistService', function () {
    // array DATA
    var playlists = [];
      // add to array {PUSH} and save to localStorage
    this.add = function (dataForm) {
      playlists.push(dataForm);
      this.save();
    }
      // save to localStorage
    this.save =  function () {
      localStorage.setItem('playlists', JSON.stringify(playlists));
      console.log('save to localstorage' , playlists)
    }
    this.remove =  function (playlists, id) {
      // localStorage.removeItem('playlists');
      this.playlists = playlists
      console.log(this.playlists)

      // setInterval(function() {
      //   location.reload();
      // }, 1000)
    }
      // get all data from local array
    this.get = function (playlists) {
      this.player = playlists
    }
      // Delete from local array and localStorage
    this.delete = function (playlists, playlist) {
      localStorage.removeItem('playlists');
    }
    this.list = function () {
      var playlistJSON = localStorage.getItem('playlists');
      if  (playlistJSON){
        playlists = JSON.parse(playlistJSON);
        return playlists;
      }
    }
});

module.controller('myApp', function ($scope, PlaylistService) {
    $scope.playlists = PlaylistService.list();
    $scope.playlistName = '';
    $scope.imgUrl = '';
    $scope.songName = '';
    $scope.songUrl = [];
    // click on "Create new playlist"
    $scope.createPlaylist = function (playlists) {
        $('.createPlaylistForm').fadeIn("slow", function() {
        });
        $('#moveToSong').click(function () {
          $('.createPlaylistForm').fadeOut('fast', function() {});
          $('.createSongsList').fadeIn('high', function() {});
        })
    }
    // create new playlist --
    $scope.savePlaylist = function (playlistName, imgUrl, songName, songUrl) {
      $scope.dataForm = {

              'name': $scope.playlistName,
              'image': $scope.imgUrl,
              "nameSong": $scope.songName,
              "songs": [
                      {
                        "nameSong": $scope.songName,
                        "url": $scope.songUrl
                      }
                    ]
      };
      console.log($scope.dataForm)
        if ($scope.playlistName == "" ||
            $scope.imgUrl == "" ||
            $scope.songName == "" ||
            $scope.songUrl == ""
        ) {
          $('#errorMsg').fadeIn("fast", function() {
          });
        } else {
          $('#errorMsg').fadeOut("fast", function() {
          });
          PlaylistService.add($scope.dataForm);
          $('.succsesContainer').fadeIn("slow", function() {
          });
          setInterval ( function() {
            $('.succsesContainer').fadeOut("slow", function() {
            });
            $('.createSongsList').fadeOut("fast", function() {
            });
            location.reload();
         }, 100);
        }
    }
    $scope.delete = function (playlists) {
      // console.log(playlists)
      if (confirm('Are you sure you want to delete the playlist?')) {
        $scope.playlists.splice($scope.playlists.indexOf(playlists), 1);
        localStorage.setItem("playlists", JSON.stringify($scope.playlists));
      } else {}
    }
    $scope.deleteAll = function (playlists) {
      if (confirm('Are you sure you want to delete the playlist?')) {
        if (confirm('Really?$@#?$@?')) {
          PlaylistService.delete()
          location.reload();
        } else {
          console.log('okay.')
        }
      } else {}
    }
    $scope.getPlaylist = function (playlists, e) {
        $('.player').fadeIn('fast', function() {});
        PlaylistService.get(playlists);
        $scope.player = playlists;

    }
    $scope.edit = function (playlists, dataForm) {
      $("input[type=submit]").val("Save Playlist");
      $scope.dataPlaylist = playlists;
      $('.editPlaylistForm').fadeIn("slow", function() {
      });
      $scope.saveEdit = function (dataForm) {
        $scope.dataForm = {
          'name': $('#playlistNameID').val(),
          'image': $('#imageUrlID').val(),
          "nameSong": '',
          "songs": [
            {
              "nameSong": $('#songNameID').val(),
              "url": $('#songsUrlID').val()
            }
          ]
        };
        if (
          $('#playlistNameID').val() === $scope.playlistName
        ) {
          console.log('the data is same shit.')
        } else {
          console.log('its difrent')
        }
      }
    }
    $scope.audioPlayer = function (e){
          e.preventDefault()
          // console.log();
          $('#audioPlayer').attr('src', $(e.target).attr('href'));
          $('#audioPlayer')[0].play();
    }
    $scope.BuildSongColum = function () {
      $('<label>', {
        "class": 'buildLabel'
      }).appendTo('.buildShow');
      $('<span>', {
        "text": 'Enter Song name:'
      }).appendTo('.buildLabel');
      $('<input>', {
        "id": "resetVal",
        "type": "text",
        "ng-model": "songName"
      }).appendTo('.buildLabel');
      $('<span>', {
        "text": 'Enter Song URL:'
      }).appendTo('.buildLabel');
      $('<input>', {
        "id": "resetVal",
        "type": "text",
        "ng-model": "songUrl"
      }).appendTo('.buildLabel');
      $('<hr>', {
      }).appendTo('.buildLabel');
      console.log('soon')
    }
    $scope.moveToSong = function () {
        $('.editPlaylistForm').fadeOut('fast', function() {});
        $('.editSongsList').fadeIn('high', function() {});
      }
})
// var playlists = [
//     {
//       'name': "Bob Marley",
//       'image': "http://cdn8.bigcommerce.com/s-ff8dchx/images/stencil/1280x1280/products/78/611/bob2xl_ebay__31530.1384318569.jpg",
//       'songs': [
//         {
//           'nameSong': "Jammin",
//           'url': "audio/coldplay-VivaLaVida.mp3"
//         },
//         {
//           'nameSong': "haha",
//           'url': "audio/Hymn.mp3"
//         },
//         {
//           'nameSong': "haha",
//           'url': "audio/Hymn.mp3"
//         }
//       ]
//     },
//     {
//       "name": "ColdPlay",
//       "image": "https://vignette.wikia.nocookie.net/marinaandthediamonds/images/f/fc/Coldplay.jpg",
//       "songs": [
//         {
//           "nameSong": "ColdPlay - Hymn",
//           "url": "./audio/Hymn.mp3"
//         },
//         {
//           "nameSong": "ColdPlay - Viva La Vida",
//           "url": "./audio/coldplay-VivaLaVida.mp3"
//         }
//       ]
//     },
//   ]
//
//   // Check and create Element from localStorage



// https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3

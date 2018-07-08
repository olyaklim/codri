
$(document).ready(function () {

   // mob-menu
  if ($(window).width() < 1024) {
    $('.js-parent .main-menu__link').removeAttr('href');

    $('.js-parent .main-menu__link').click(function () {
      $(this).closest('.js-parent').find('.main-menu__submenu').slideToggle(300);
    });
  }

  // modal +
  $('[data-modal]').click(function () {
    var thisId = $(this).attr('data-modal');
    $('body').toggleClass('fixed');
    $('[data-id=' + thisId +']').toggleClass('active');

    setTimeout(function() {
      $('[data-id=' + thisId +']').toggleClass('open');
    }, 50);
  });

  $('[data-close]').click(function () {
    setTimeout(function() {
      $('body').removeClass('fixed');
      $('[data-id]').removeClass('active');
    }, 500);

    $('[data-id]').removeClass('open');
  });
  // modal -   

});


// YouTube player +
var player;
// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('player', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
  var pauseButton = document.getElementById("stop");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });

  var pauseButton = document.getElementById("win3");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });
  
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTube player -



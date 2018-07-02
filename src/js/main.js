
$(document).ready(function () {

  // lang-list
  $('.js-lang-list .lang-list__btn').click(function() {
    $(this).closest('.js-lang-list').toggleClass('active');
    $(this).closest('.lang-list__item').addClass('active').siblings().removeClass('active');
  });


    
//  circle-silder
  $(window).on('load resize', function(){
    if( $(document).width() > 1030) {
      var firstTitleSect = $('[data-number="item-1"]').find('.circ-item__title').text()
      var firstMainImg =   $('.circ-item .circ-item__pic').attr('src');

      // $('.circle-nav__item-title').text(firstTitleSect);
      $('.circle-nav__pic').attr('src', firstMainImg);

      $('.circ-item').click(function() {

        circ_item_click($(this));
        
      });

      $('.circle-nav__photo--top').click(function() {
        circ_item_click($('.circ-item--top'));
        
        $('.circle-nav__photo').removeClass('circle-nav__photo--active-photo');

        $(this).toggleClass('circle-nav__photo--active-photo');
      });

      $('.circle-nav__photo--left').click(function() {
        circ_item_click($('.circ-item--left'));
        $('.circle-nav__photo').removeClass('circle-nav__photo--active-photo');
        $(this).toggleClass('circle-nav__photo--active-photo');
      });

      $('.circle-nav__photo--right').click(function() {
        circ_item_click($('.circ-item--right'));
        $('.circle-nav__photo').removeClass('circle-nav__photo--active-photo');
        $(this).toggleClass('circle-nav__photo--active-photo');
      });

      $('.circle-nav__photo--bottom').click(function() {
        circ_item_click($('.circ-item--bottom'));
        $('.circle-nav__photo').removeClass('circle-nav__photo--active-photo');
        $(this).toggleClass('circle-nav__photo--active-photo');
      });

      function circ_item_click(circ_btn) {

        $('.circle-nav__item').css('opacity', '0');
        $('.circle-nav__item').animate({
          opacity: "1"
        },500);

        //    id rotate
        var dataNumb = circ_btn.attr('data-number');

        circ_btn.closest('.slider-list').removeAttr('id');
        circ_btn.closest('.slider-list').attr('id', dataNumb);

        //    color title
        $('.circ-list__item').removeClass('active');
        circ_btn.closest('.circ-list__item').addClass('active');

        //    add title
        var titleSect = circ_btn.find('.circ-item__title').text();

        // $('.circle-nav__item-title').text('');
        // $('.circle-nav__item-title').text(titleSect);

        //    add img 
        var mainImg = circ_btn.find('.circ-item__pic').attr('src');

        $('.circle-nav__pic').attr('src', false);
        $('.circle-nav__pic').attr('src', mainImg);
      }

    }
    
    if( $(document).width() < 1030  && $(document).width() > 777) { 
      $('.circ-list__item').equivalent();
    }
  });



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

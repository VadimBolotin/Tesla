$(function(){
  $('.slider').slick({
    arrows:false,
    dots: true,
    fade: true,
    autoplay: 3000,
  });

  $('.header__btn').on('click', function(){
    $('.menu').addClass('active');
  });
  $('.close-btn').on('click', function(){
    $('.menu').removeClass('active');
  });

});
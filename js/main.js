$(function(){

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
    infinite: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    arrows: false, 
    centerMode: false,
    infinite: true,
    focusOnSelect: false,
  });
  function putter(a){
    return a < 10 ? '0' + a : a;
  }
  $('#slick-slide-control00').html(putter($('#slick-slide-control00').html()));
  $('#slick-slide-control01').html(putter($('#slick-slide-control01').html()));
  $('#slick-slide-control02').html(putter($('#slick-slide-control02').html()));
  $('#slick-slide-control03').html(putter($('#slick-slide-control03').html()));
  $('#slick-slide-control04').html(putter($('#slick-slide-control04').html()));
  $('#slick-slide-control05').html(putter($('#slick-slide-control05').html()));
});

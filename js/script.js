$(function(){
  let currentIndex = 0;
  $('.slider').hide().first().show();

  setInterval(function(){
    let nextIndex = (currentIndex+1) % 3;

    $('.slider').eq(currentIndex).fadeOut(1500);
    $('.slider').eq(nextIndex).fadeIn(1500);

    currentIndex = nextIndex;
  },4000);
});

$(document).ready(function() {
  $('.menu-item').mouseover(function(){
      $(this).find(".submenu").stop().slideDown(300);
  });
  $('.menu-item').mouseout(function(){
      $(this).find(".submenu").stop().slideUp(300);
  });
});

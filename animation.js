$(document).ready(function () {
  indexAnimation();
});

$(function indexAnimation(){
  $('#index').animate({'left' : '0', 'opacity' : '1'}, 500, 'swing');
  setTimeout(function(){$('.texta1').animate({'top' : '0', 'opacity' : '1'}, 500, 'swing');}, 1400);
  setTimeout(function(){$('.texta2').animate({'top' : '0', 'opacity' : '1'}, 500, 'swing');}, 1500);
})

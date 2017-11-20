var $lastId;

$(document).ready(function () {
  indexAnimation();
});

$("#nav-button-home").click(function(){
  resetAnimation();
  indexAnimation();
});

$("#nav-button-about").click(function(){
  resetAnimation();
  aboutAnimation();
});

$("#nav-button-gallery").click(function(){
  resetAnimation()
  galleryAnimation();
});

$("#nav-button-team").click(function(){
  resetAnimation();
  teamAnimation();
});

$("#nav-button-contact").click(function(){
  resetAnimation();
  contactAnimation();
});

function indexAnimation(){
  $('#index').animate({'opacity' : '1', 'left' : '0'}, 500, 'swing');
  setTimeout(function(){$('.texta1').animate({'top' : '0', 'opacity' : '1'}, 500, 'swing');}, 1400);
  setTimeout(function(){$('.texta2').animate({'top' : '0', 'opacity' : '1'}, 500, 'swing');}, 1500);
  $lastId = "#"+$('#index').attr('id');
}

function aboutAnimation(){
  $('#about').animate({'opacity' : '1', 'left' : '0'}, 500, 'swing');
  $lastId = "#"+$('#about').attr('id');
}

function galleryAnimation(){
  $('#gallery').animate({'opacity' : '1', 'left' : '0'}, 500, 'swing');
  $lastId = "#"+$('#gallery').attr('id');
}

function teamAnimation(){
  $('#team').animate({'opacity' : '1', 'left' : '0'}, 500, 'swing');
  $lastId = "#"+$('#team').attr('id');
}

function contactAnimation(){
  $('#contact').animate({'opacity' : '1', 'left' : '0'}, 500, 'swing');
  $lastId = "#"+$('#contact').attr('id');
}

function resetAnimation(){
  if($lastId == "#index"){
    $('.texta1').animate({'top' : '45px', 'opacity' : '0'}, 500, 'swing');
    $('.texta2').animate({'top' : '45px', 'opacity' : '0'}, 500, 'swing');
  }
  $($lastId).animate({'opacity' : '0', 'left' : '45px'}, 500, 'swing');
}

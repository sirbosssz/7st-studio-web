var $lastId;

$(document).ready(function(){
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
  $('#index').animate({'opacity' : '1'}, 500, 'swing');
  setTimeout(function(){$('.texta1').animate({'top' : '0', 'opacity' : '1'}, 500, 'swing');}, 1200);
  setTimeout(function(){$('.texta2').animate({'top' : '0', 'opacity' : '1'}, 500, 'swing');}, 1400);
  $lastId = "#"+$('#index').attr('id');
}

function aboutAnimation(){
  $('#about').animate({'opacity' : '1'}, 500, 'swing');
  $lastId = "#"+$('#about').attr('id');
}

function galleryAnimation(){
  $('#gallery').animate({'opacity' : '1'}, 500, 'swing');
  $lastId = "#"+$('#gallery').attr('id');
}

function teamAnimation(){
  $('#team').animate({'opacity' : '1'}, 500, 'swing');
  setTimeout(function(){$('.texta3').animate({'top' : '0', 'opacity' : '1'}, 500, 'swing');}, 1000);
  setTimeout(function(){$('.texta4').animate({'top' : '0', 'opacity' : '1'}, 500, 'swing');}, 1200);
  setTimeout(function(){$('.pic1').animate({'bottom' : '0', 'opacity' : '1'}, 500, 'swing');}, 2000);
  setTimeout(function(){$('.pic2').animate({'bottom' : '0', 'opacity' : '1'}, 500, 'swing');}, 2200);
  setTimeout(function(){$('.pic3').animate({'top' : '0', 'opacity' : '1'}, 500, 'swing');}, 2600);
  setTimeout(function(){$('.pic4').animate({'top' : '0', 'opacity' : '1'}, 500, 'swing');}, 2400);
  $lastId = "#"+$('#team').attr('id');
}

function contactAnimation(){
  $('#contact').animate({'opacity' : '1'}, 500, 'swing');
  $lastId = "#"+$('#contact').attr('id');
}

function resetAnimation(){
  if($lastId == "#index"){
    $('.texta1').css({'top' : '45px', 'opacity' : '0'});
    $('.texta2').css({'top' : '45px', 'opacity' : '0'});
  }
  else if($lastId == "#team"){
    $('.texta3').css({'top' : '45px', 'opacity' : '0'});
    $('.texta4').css({'top' : '45px', 'opacity' : '0'});
    $('.pic1').css({'bottom' : '45px', 'opacity' : '0'});
    $('.pic2').css({'bottom' : '45px', 'opacity' : '0'});
    $('.pic3').css({'top' : '45px', 'opacity' : '0'});
    $('.pic4').css({'top' : '45px', 'opacity' : '0'});
  }
  $($lastId).css({'opacity' : '0'});
}

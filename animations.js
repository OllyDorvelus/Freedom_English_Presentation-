

$(document).ready(function() {
// Home Page Animations
var y= true;
var x = true;
var a = true;
var b = true;
var audio = document.getElementsByTagName("audio")[0];

  $('#intro1').hide();
  $('#first').hide();
  $('#second').hide();
  $('#third').hide();
  $('#fourth').hide();
  $('#fifth').hide();
  $('#first').fadeIn(6000);
  $('#second').hide();
 $('#intro1').fadeIn(3000);
 $('#first').click(function() {
   $('#first').hide();
   $('#second').fadeIn(3000);
   audio.play();
   audio.stop();

 });
 $('#second').click(function() {
   $('#second').hide();
   $('#third').fadeIn(3000);
   audio.play();
   audio.stop();
 });
 $('#third').click(function() {
   $('#third').hide();
   $('#fourth').fadeIn(3000);
   audio.play();
   audio.stop();
 });
 $('#fourth').click(function() {
   $('#fourth').hide();
   $('#fifth').fadeIn(3000);
   audio.play();
   audio.stop();
 });
 $('#fifth').click(function() {
   $('#fifth').hide();
   $('#first').fadeIn(3000);
   audio.play();
   audio.stop();
 });
// Awakening Animations
$('#a1').hide();
$('#a2').hide();
$('#a3').hide();
$('#a1').slideDown(3000);
$('#awakeintro > center > h1').click(function() {
  if(y && x) {
  $('#a1').slideUp(3000);
  audio.play();
  setTimeout(function(){$('#a2').slideDown(3000)}, 2000);
  setTimeout(function(){y = false;}, 5000);
  setTimeout(function(){x = false;}, 5000);
  audio.play();
};
 if(!y && !x) {
    $('#a2').slideUp(3000);
    audio.play();
    setTimeout(function(){$('#a3').slideDown(3000)}, 2000);
    setTimeout(function(){y = true;}, 5000);
    setTimeout(function(){x = false;}, 5000);

  };
   if (y && !x) {
    $('#a3').slideUp(3000);
    audio.play();
    setTimeout(function(){$('#a1').slideDown(3000)}, 2000);
    setTimeout(function(){y = true;}, 5000);
    setTimeout(function(){x = true;}, 5000);
  };
});
// Huck Finn Animation




$(function() {
  var hintro = $('#hintro');
  var backgrounds = ['url(Images/huck_finn.jpg)', 'url(Images/raft.jpg)', 'url(Images/slavemind.jpg)'];
var current = 0;

hintro.css('background-size', 'cover');
hintro.css('padding-bottom', '120px');
hintro.css('background-repeat', 'no-repeat');


function nextBackground() {
  hintro.css(
   'background',
    backgrounds[current = ++current % backgrounds.length]);
    hintro.css('background-size', 'cover');
    hintro.css('padding-bottom', '120px');
    hintro.css('background-repeat', 'no-repeat');
    audio.play();

 setTimeout(nextBackground, 20000);
 }
 setTimeout(nextBackground, 20000);
   hintro.css('background', backgrounds[0]);
 });
 $('#h1').hide();
 $('#h2').hide();
 $('#h3').hide();
 $('#h1').fadeIn(2000);
 setTimeout(function(){$('#h2').fadeIn(4000)}, 2000);
 setTimeout(function(){$('#h3').fadeIn(6000)}, 6000);



// Jungle Animations

$('#j1').css('opacity', '.5');
$('#j2').css('opacity', '.5');
$('#j3').css('opacity', '.5');

$('#j1').mouseover(function() {
  $('#j1').css('opacity', '1');
  $('#j1').css('cursor', 'default');
  $('#j1').css('color', 'black');
  $('#j1').css('font-weight', 'bold');
  audio.play();


});

$('#j2').mouseover(function() {
  $('#j2').css('opacity', '1');
  $('#j2').css('cursor', 'default');
  $('#j2').css('color', 'black');
  $('#j2').css('font-weight', 'bold');
  audio.play();
});

$('#j3').mouseover(function() {
  $('#j3').css('opacity', '1');
  $('#j3').css('cursor', 'default');
  $('#j3').css('color', 'black');
  $('#j3').css('font-weight', 'bold');
  audio.play();
});

$('#j1').mouseleave(function() {
  $('#j1').css('opacity', '.5');
  $('#j1').css('color', 'white');
  $('#j1').css('font-weight', 'normal');
});

$('#j2').mouseleave(function() {
  $('#j2').css('opacity', '.5');
  $('#j2').css('color', 'white');
  $('#j2').css('font-weight', 'normal');
});

$('#j3').mouseleave(function() {
  $('#j3').css('opacity', '.5');
  $('#j3').css('color', 'white');
  $('#j3').css('font-weight', 'normal');
});

});

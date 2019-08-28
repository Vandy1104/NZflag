console.log('My javascript is working');
$(document).ready(function(){
$('.nz-flag').hide();
$('.indiaFlag').hide();
$('.btn1').click(function(){
$('.nz-flag').show();
$('.indiaFlag').hide();
$('.btn2').show();
    $(this).hide();
});
  $('.btn2').click(function(){
  $('.indiaFlag').show();
  $('.nz-flag').hide();
  $('.btn1').show();
  $(this).hide();
});
});

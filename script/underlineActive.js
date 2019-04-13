$('.navigation a').click(function() {
  $('.navigation a').css('textDecoration', 'none');
  $(this).css('textDecoration', 'underline');
  return false;
});

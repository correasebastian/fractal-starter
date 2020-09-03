import $ from 'jquery'

$(function(){

    $('.tcs-jumbo__btn').on('click', function(e) {
      var nextSection = $(this).closest('section').next('section');
      $('html, body').animate({
          scrollTop: $(nextSection)
      }, 2000);
      });
})
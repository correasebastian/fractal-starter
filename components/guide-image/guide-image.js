import $ from 'jquery'

$(function(){

    $('.tcs-guide-jumbo__btt').on('click', function(e) {
        $('html, body').animate({scrollTop:0}, '300');
      });
})
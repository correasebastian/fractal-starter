import $ from 'jquery'

$(function(){

    $('.tcs-jumbo__btt').on('click', function(e) {
        $('html, body').animate({scrollTop:0}, '300');
      });
})
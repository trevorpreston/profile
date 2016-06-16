$(function(){
  $('.smooth').on('click', function() {
    $.smoothScroll({   ///thanks codeplanet.io for the code that automatically scrolls to sections from the navbar
      scrollElement: $('body'),
      scrollTarget: '#' + this.id
    })
  })



var scroller = ['a creator.','a designer.','a builder.','a problem solver.','a ninja.'];

function cycleScroller(arr){
  $('#scroller-2').text(arr[0]);
  var i = 1;
  setInterval(
    function(){
      $('#scroller-2').text(arr[i]);
      i++;
      if(i >= scroller.length) i = 0;
    },2000);
}
cycleScroller(scroller);


// var num = 50

// $(window).bind('scroll', function () {
//     if ($(window).scrollTop() > num) {
//         $('.menu').addClass('fixed');
//     } else {
//         $('.menu').removeClass('fixed');
//     }
// });


})

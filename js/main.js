(function($){
  var PLAYGROUND_HEIGHT  = window.innerHeight;
  var PLAYGROUND_WIDTH  = window.innerWidth;
  var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
  ];
  var html = jQuery('html'); 
  html.data('scroll-position', scrollPosition);
  html.data('previous-overflow', html.css('overflow'));
  html.css('overflow', 'hidden');
  window.scrollTo(scrollPosition[0], scrollPosition[1]);


  $('body').attr('id', 'playground');

  var pg = $('#playground');

/*
  $("#playground").playground({height: PLAYGROUND_HEIGHT, 
             width: PLAYGROUND_WIDTH, keyTracker: true});

*/
  pg.append("<div id='littleDude'></div>")

    $(document).click(function() {
       $('#littleDude').animate({
         'marginTop' : "-=30px"
       })
    });
})(jQuery);

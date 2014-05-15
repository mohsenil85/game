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
  _.each(_.range(10), function(i){
  pg.append("<div id='tree" +i+ "'></div>")
  }, this)

  pg.append("<div id='tree'></div>")

  $(document).keydown(function(e) {
    switch(e.which){
      case 74: 
        $('#littleDude').animate({
          'marginTop' : "+=10px"
        }, 10);
        break;
      case 75: 
        $('#littleDude').animate({
          'marginTop' : "-=10px"
        }, 10);
        break;
      case 76: 
        $('#littleDude').animate({
          'marginLeft' : "+=10px"
        }, 10);
        break;
      case 72: 
        $('#littleDude').animate({
          'marginLeft' : "-=10px"
        }, 10);
        break;
    }
  });

  console.log("h = " + window.innerHeight)
  console.log("w = " + window.innerWidth)

})(jQuery);

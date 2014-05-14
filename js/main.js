(function($){
  var charWidth = 7;
  var charHeight = 14;
  var ListView = Backbone.View.extend({
    el: $('body'),

    events: {
      'click button#add': 'addItem',
      'click button#add10': 'addItem10',
      'click button#clearAll': 'clear'
    },



    initialize: function(){
      _.bindAll(this, 'render',  'fillRow', 'fillCol');

      $(window).on('resize', this.fillCol);

      this.counter = 0;
      this.render();
    },
    render: function(){
      this.fillCol();
      $(this.el).addClass('gameArea');

    },

    fillRow: function(){
      var width = window.innerWidth / charWidth - 8;
      _.each(_.range(width), function(){
        $(this.el).append(".");
      }, this);
      $(this.el).append("<br>");
    },

    fillCol: function(){
      this.clear();
      var height = window.innerHeight / charHeight;
      _.each(_.range(height), function(){
        this.fillRow();
      }, this);
    },

    clear: function(){
      $(this.el).empty();
    }
  });


  var listView = new ListView();
})(jQuery);

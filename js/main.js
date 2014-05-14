(function($){
    var charWidth = 10;
    var charHeight = 14;
    var ListView = Backbone.View.extend({
        el: $('body'),

        events: {
            'click button#add': 'addItem',
            'click button#add10': 'addItem10',
            'click button#clearAll': 'clear'
        },



        initialize: function(){
            _.bindAll(this, 'render', 'addItem', 'addItem10', 'clear', 'getDemensions');

            $(window).on('resize', this.getDemensions);

            this.counter = 0;
            this.render();
        },
        render: function(){
            $(this.el).append("<button id='add'>plink!</button>");
            $(this.el).append("<button id='add10'>plonk!</button>");
            $(this.el).append("<button id='clearAll'>zoink!</button>");
            $(this.el).append("<span id='height'></span>");
            $(this.el).append("<span id='width'></span>");
            $(this.el).append("<ul></ul>");
            $(this.el).append("<div id='gameArea'></div>");
            
        },

        addItem: function(){
            this.counter++;
            $('ul', this.el).append("<li>hello dawg" + this.counter +"</li>");
        },

        addItem10: function(){
            _.each(_.range(10),function(){
                this.addItem();
            }, this)
        },

        getDemensions: function(){
            $('#height').html("height = " + window.innerHeight + " ");
            $('#width').html("width = " + window.innerWidth + " ");
        },

        clear: function(){
            $(this.el).empty();
            this.initialize();
        }
    });


    var listView = new ListView();
})(jQuery);

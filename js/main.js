(function($){
    var ListView = Backbone.View.extend({
        el: $('body'),

        events: {
            'click button#add': 'addItem',
            'click button#add10': 'addItem10',
            'click button#clearAll': 'clear'
        },



        initialize: function(){
            _.bindAll(this, 'render', 'addItem', 'addItem10', 'clear');

            this.counter = 0;
            this.render();
        },
        render: function(){
            $(this.el).append("<button id='add'>plink!</button>");
            $(this.el).append("<button id='add10'>plonk!</button>");
            $(this.el).append("<button id='clearAll'>zoink!</button>");
            $(this.el).append("<ul></ul>");
            $(this.el).append("<ul></ul>");
            $(this.el).append("<ul></ul>");
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

        clear: function(){
            $(this.el).empty();
            this.initialize();
        }
    });


    var listView = new ListView();
})(jQuery);

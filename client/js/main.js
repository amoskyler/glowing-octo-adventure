var IndexView = Backbone.View.extend({
    render:function(){
      return this;
    }
});

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index', //#inex
    'item/:id': 'item' //#item
  },

  index: function(){
    console.log("you're at the index");
    view = new IndexView();
  },

  item: function(id){
    console.log(id);
  }
});

var appModel = Backbone.Model.extend({

});












var appRouter = new AppRouter();
Backbone.history.start({pushState: true});

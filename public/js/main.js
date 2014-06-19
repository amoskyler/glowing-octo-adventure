$(document).ready(function(){

  var IndexModel = Backbone.Model.extend({
    defaults:{
      title: 'test'
    }
  });

  var newStuff = new IndexModel();


var ItemView = Backbone.View.extend({
  el: '.content',
  initialize: function(){
    this.render();
  },

  render:function(){
    this.$el.html(this.model.get('title'));
    return this;
  }
});


var IndexView = Backbone.View.extend({
    render:function(){
      this.$el.html("test of route <button>test</button>");
      return this;
    },
    events: {
      "click button": "doStuff"
    },
    doStuff: function() {
      this.$el.html("gone");
      //var view = new ItemView({model: newStuff});
      //$('.content').html(view.render().el);
      Backbone.history.navigate('/item/555',{trigger:false});
    }
});








  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index', //#index
      'item/:id': 'item' //#item
    },

    index: function(){
      console.log("you're at the index");
      var view = new IndexView();
      $('.content').html(view.render().el);
    },

    item: function(id){
      console.log(id);
      var view = new ItemView({model: newStuff});
    }
  });

  var appModel = Backbone.Model.extend({

  });












  var appRouter = new AppRouter();
  Backbone.history.start({pushState: true});

});

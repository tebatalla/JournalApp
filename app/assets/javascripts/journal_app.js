window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new JournalApp.Routers.PostsRouter();
    Backbone.history.start();
    // alert('Hello from Backbone!');
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});

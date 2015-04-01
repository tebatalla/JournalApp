JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "": "insertPostsIndex",
    "posts/:id": "displayPost"
  },

  insertPostsIndex: function () {
    this._postsCollection = new JournalApp.Collections.Posts();
    var postsIndexView = new JournalApp.Views.PostsIndex({ collection: this._postsCollection });
    this._postsCollection.fetch();
    $(".container").html(postsIndexView.render().$el);
  },

  displayPost: function (id) {
    if (!this._postsCollection) {
      this._postsCollection = new JournalApp.Collections.Posts();
    }
    var post = this._postsCollection.getOrFetch(id);
    var postShowView = new JournalApp.Views.PostShow({ model: post });
    $('.container').html(postShowView.render().$el);
  }
});

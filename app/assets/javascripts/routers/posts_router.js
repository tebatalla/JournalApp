JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "": "insertPostsIndex",
    "posts/new": "newPost",
    "posts/:id": "displayPost",
    "posts/:id/edit": "editPost"
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
  },

  editPost: function (id) {
    if (!this._postsCollection) {
      this._postsCollection = new JournalApp.Collections.Posts();
    }
    var post = this._postsCollection.getOrFetch(id);
    var editPostView = new JournalApp.Views.PostForm({
      model: post,
      collection: this._postsCollection
    });
    $('.container').html(editPostView.render().$el);
  },

  newPost: function () {
    if (!this._postsCollection) {
      this._postsCollection = new JournalApp.Collections.Posts();
    }
    var post = new JournalApp.Models.Post();
    var newPostView = new JournalApp.Views.PostForm({
      model: post,
      collection: this._postsCollection
    });
    $('.container').html(newPostView.render().$el);
  }

});

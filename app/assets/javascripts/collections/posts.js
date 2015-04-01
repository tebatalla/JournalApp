JournalApp.Collections.Posts = Backbone.Collection.extend({
  url: "/posts",

  model: JournalApp.Models.Post,

  getOrFetch: function (id) {
    if (!this.get(id)) {
      var newPost = new JournalApp.Models.Post({
        id: id
      });
      newPost.fetch({
        success: this.add(newPost).bind(this)
      });

    }

    this.fetch();
  }

});

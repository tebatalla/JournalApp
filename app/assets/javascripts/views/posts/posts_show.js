JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],

  className: "post-show",

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);

    return this;
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  }
})

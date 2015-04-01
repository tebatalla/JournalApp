class PostsController < ApplicationController
  def create
    @post = Post.new
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, unprocessable_entity: true
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end

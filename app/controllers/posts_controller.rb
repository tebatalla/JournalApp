class PostsController < ApplicationController
  def create
    @post = Post.new
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, unprocessable_entity: true
    end
  end

  def index
    @posts = Post.all
    render :index
  end

  def destroy
    @post = Post.find(params[:id])

    if @post.destroy
      render :show
    else
      render json: @post.errors.full_messages, unprocessable_entity: true
    end
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end

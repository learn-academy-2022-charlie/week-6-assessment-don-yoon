# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is the BlogPost controller. This is where all the business logic lives. As you can see, the BlogPostController class inherits from the ApplicationController class. The ApplicationController itself inherits from ActionController::Base
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # This is assigning all the entries in the table blogposts into the instance variable @posts by referencing the model BlogPost.
    @posts = BlogPost.all
  end

  # ---3)
  # This is the show method responsible for giving back a single entry as seen in line 20. In RoR, once an action has been defined, an equivalent show.html.erb view file will be created. The show route maps to the HTTP GET Method.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # The new action is for creating a new instance of BlogPost. This route maps to the HTTP GET method as well. This is because this simply offers a form to create a new object and is not directly manipulating the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # In this step we are creating a new entry for the table using blog_post_params which will be defined below. Then we are storing it in to an instance variable called post. This will allow us to use methods on the newly created object to check for various conditions.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # This is using the .find method to locate which entry we will be editing. We use the paramter :id which refers to the primary key of the entry in the table. This action is used to offer a form to edit a specific object.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # The .update method is used to actually make changes to the entry in the table. This action maps to the HTTP PATCH Method.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # If the post was unable to be destroyed, the user will be redirected to blog post we tried to destory.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # We use the keyword private to prevent access from outside of the class. Whatever is coded below will only be accessible within the scope of the class.
  private
  def blog_post_params
    # ---10)
    # This is how we define strong paramters. The .require refers to keys we need and the .permit refers to what is allowed to be accessed.
    params.require(:blog_post).permit(:title, :content)
  end
end

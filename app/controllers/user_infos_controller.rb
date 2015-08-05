class UserInfosController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json { @user_infos = UserInfo.all }
    end
  end

  def create
    @user_info = UserInfo.new(user_info_params)
      respond_to do |format|
      if @user_info.save
        format.json { render status: :created, json: @user_info }
      else
        format.json { render json: {errors: @user_info.errors}, status: 422 }
      end
    end
  end


  private

  def user_info_params
    params.require(:user_info).permit(:name, :address, :phone, :email, :password)
  end

end

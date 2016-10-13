class StaticPagesController < ApplicationController
  def welcome
  end

  def about_me
  end

  def projects
  end

  def game_of_life
  end

  def quaternions
  end

  def jlpt_vocabulary
  end

  def jlpt_vocabulary_get
    @index = rand(1..2)
    @jlpt_vocabulary_question = JlptVocabulary.find(@index)
    
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @jlpt_vocabulary_question }

 end
  end
end
